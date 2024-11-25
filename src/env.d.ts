/// <reference types="astro/client" />

declare module '*.astro' {
  import { AstroComponentFactory } from 'astro/runtime/server/index.js';
  const Component: AstroComponentFactory;
  export default Component;
}

declare module '@astrolib/seo/src/AstroSeo.astro' {
  import { AstroComponentFactory } from 'astro/runtime/server/index.js';
  const Component: AstroComponentFactory;
  export default Component;
}