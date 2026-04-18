import type { Manifold } from "manifold-3d";
import { roundedRect } from "./manifold";

export interface TableParams {
  topWidth: number;
  topDepth: number;
  topThickness: number;
  topRadius: number;
  legHeight: number;
  legWidth: number;
  legInset: number;
}

export async function tableAssembly(p: TableParams): Promise<Manifold> {
  const top = (await roundedRect(p.topWidth, p.topDepth, p.topRadius))
    .extrude(p.topThickness)
    .translate([0, 0, p.legHeight]);

  const legRadius = p.legWidth * 0.15;
  const legShape = await roundedRect(p.legWidth, p.legWidth, legRadius);
  const singleLeg = legShape.extrude(p.legHeight);

  const dx = p.topWidth / 2 - p.legInset - p.legWidth / 2;
  const dy = p.topDepth / 2 - p.legInset - p.legWidth / 2;

  const legs = [
    singleLeg.translate([+dx, +dy, 0]),
    singleLeg.translate([+dx, -dy, 0]),
    singleLeg.translate([-dx, +dy, 0]),
    singleLeg.translate([-dx, -dy, 0]),
  ].reduce((a, b) => a.add(b));

  return top.add(legs);
}
