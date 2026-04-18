import { exportManifold, exportSTL, exportOBJ } from "./export";
import type { Manifold } from "manifold-3d";

export type FormatBlobs = {
  tmf: { blob: Blob; filename: string };
  stl: { blob: Blob; filename: string };
  obj: { blob: Blob; filename: string };
};

// Exports the Manifold in all supported formats and makes them available when ready
export class TMFLoader {
  private loading?: { result?: FormatBlobs };

  load(manifoldP: Promise<Manifold>, basename: string) {
    this.loading = {};

    const loading = this.loading;
    manifoldP.then((manifold) => {
      loading.result = {
        tmf: { blob: exportManifold(manifold), filename: basename + ".3mf" },
        stl: { blob: exportSTL(manifold), filename: basename + ".stl" },
        obj: { blob: exportOBJ(manifold), filename: basename + ".obj" },
      };
    });
  }

  take(): undefined | FormatBlobs {
    const result = this.loading?.result;
    if (result !== undefined) {
      this.loading = undefined;
    }
    return result;
  }
}
