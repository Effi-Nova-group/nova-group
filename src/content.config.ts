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
    publishedAt: z.coerce.date(),
    author: z.string().default('Efraim Shwintarsky'),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: ({ image }) => z.object({
    order: z.number(),
    client: z.string(),
    sector: z.string(),
    title: z.string(),
    subtitle: z.string(),
    logo: image().optional(),
    heroImage: image().optional(),
    stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    ctaHeading: z.string(),
    ctaBody: z.string(),
  }),
});

export const collections = { blog, caseStudies };
