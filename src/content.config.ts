import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const apps = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/apps' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tagline: z.string(),
      category: z.string(),
      status: z.enum(['released', 'beta', 'upcoming']).default('upcoming'),
      featured: z.boolean().default(false),
      order: z.number().default(100),

      // Visual identity
      icon: image().optional(),
      iconColors: z
        .object({
          from: z.string(),
          to: z.string(),
        })
        .optional(),
      iconGlyph: z.string().optional(),
      screenshots: z.array(image()).default([]),

      // Marketing copy
      features: z
        .array(
          z.object({
            icon: z.string().optional(),
            title: z.string(),
            body: z.string(),
          }),
        )
        .default([]),

      // Release info
      playStoreUrl: z.string().url().optional(),
      publishedAt: z.date().optional(),
      version: z.string().optional(),

      // Technical (optional, shown collapsed)
      packageId: z.string().optional(),
      minSdk: z.number().optional(),
      targetSdk: z.number().optional(),
      techStack: z.array(z.string()).default([]),

      // Support / legal
      supportEmail: z.string().email().optional(),
      privacyPolicyUrl: z.string().optional(),
      policyUpdatedAt: z.date().optional(),
    }),
});

export const collections = { apps };
