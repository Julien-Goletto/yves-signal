import type { MDXComponents as MDXComponentsType } from "mdx/types";

const MDXComponent = (components: MDXComponentsType): MDXComponentsType => {
  return{
    ...components
  };
};

export { MDXComponent };
