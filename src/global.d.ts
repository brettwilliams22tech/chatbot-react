declare module "*.module.css" {
  const content: Record<readonly string, readonly string>;
  export default content;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.json" {
  const src: string;
  export default src;
}
