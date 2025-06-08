import type { CollectionItemBase } from "@nuxt/content";

export interface ParsedContentExtension extends CollectionItemBase {
  image?: {url: string, alt: string}
  tags: Array<string>;
  timestamp: number;
  links?: Array<{ title: string; url: string }>;
  description: string | undefined;
}