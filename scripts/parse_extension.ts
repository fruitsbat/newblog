import type { ParsedContent } from "@nuxt/content";

export interface ParsedContentExtension extends ParsedContent {
  imageURL: string;
  imageAlt: string;
  tags: Array<string>;
  timestamp: number;
  links: Array<{ title: string; url: string }> | undefined;
  description: string | undefined;
}

export interface CommentExtension extends ParsedContent {
  name: string;
  website: string | undefined;
  timestamp: number;
  reply: string | undefined;
}
