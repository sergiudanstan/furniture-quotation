// TS 7 type-checks JSX children against the props of intrinsic elements, but
// twrl's JSX.IntrinsicElements declares no `children`. Add it here.
import "twrl/jsx-runtime";

declare module "twrl/jsx-runtime" {
  namespace JSX {
    type Element = globalThis.JSX.Element;
    type IntrinsicElements = {
      [Tag in keyof globalThis.JSX.IntrinsicElements]: globalThis.JSX.IntrinsicElements[Tag] & { children?: unknown };
    };
  }
}
