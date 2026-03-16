declare module "gsap-trial/ScrollSmoother" {
  import { ScrollSmoother } from "gsap/ScrollSmoother";
  export { ScrollSmoother };
  export default ScrollSmoother;
}

declare module "gsap-trial/SplitText" {
  export class SplitText {
    readonly chars: Element[];
    readonly lines: Element[];
    readonly words: Element[];
    readonly elements: Element[];
    constructor(target: gsap.DOMTarget, vars?: SplitText.Vars);
    split(vars?: SplitText.Vars): void;
    revert(): void;
    static create(target: gsap.DOMTarget, vars?: SplitText.Vars): SplitText;
  }

  namespace SplitText {
    interface Vars {
      type?: string;
      linesClass?: string;
      wordsClass?: string;
      charsClass?: string;
      [key: string]: any;
    }
  }

  export default SplitText;
}
