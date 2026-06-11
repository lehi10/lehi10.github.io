import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const workSchema = z.object({
	title: z.string(),
	description: z.string(),
	publishDate: z.coerce.date(),
	tags: z.array(z.string()),
	img: z.string(),
	img_alt: z.string().optional(),
});

export const collections = {
	work: defineCollection({
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
		schema: workSchema,
	}),
	projects: defineCollection({
		loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
		schema: workSchema.extend({
			url: z.string().optional(),
			lastCommit: z.string().optional(),
			images: z.array(z.object({ src: z.string(), alt: z.string().optional() })).optional(),
		}),
	}),
};
