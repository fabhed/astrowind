declare module '@astrolib/seo' {
  export interface OpenGraph {
    url?: string;
    site_name?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
    }>;
    locale?: string;
    type?: string;
  }

  export interface AstroSeoProps {
    title?: string;
    titleTemplate?: string;
    canonical?: string;
    noindex?: boolean;
    nofollow?: boolean;
    description?: string;
    openGraph?: OpenGraph;
    twitter?: {
      handle?: string;
      site?: string;
      cardType?: string;
    };
  }

  // Add this to ignore the Astro component import error
  export const AstroSeo: (props: AstroSeoProps) => any;
}