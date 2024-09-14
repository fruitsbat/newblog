import type { ParsedContent } from "@nuxt/content";

export interface ParsedContentExtension extends ParsedContent {
  imageURL: string;
  imageAlt: string;
  tags: Array<string>;
  timestamp: number;
  links: Array<{title: string, url: string}> | undefined;
}