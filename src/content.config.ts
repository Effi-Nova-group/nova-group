import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    order: z.number(),
    title: z.string(),
    category: z.string(),
    excerpt: z.string(),
    readTime: z.string(),
    image: image(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    ctaHeading: z.string(),
    ctaBody: z.string(),
  }),
});

export const collections = { blog };
