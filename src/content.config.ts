import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const postCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      description: z.string(),
      publishedAt: z.date().default(() => new Date()),
    }),
});

export const collections = {
  posts: postCollection,
};
