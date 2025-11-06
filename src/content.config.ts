// 1. Import utilities from `astro:content`
import { file, glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  loader: glob({ base: "src/content/blog", pattern: "*.md" }),
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.date(),
    author: z.string().default("Embodi"),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  loader: file("src/content/team.json"),
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

const featuresCollection = defineCollection({
  loader: file("src/content/features.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
  }),
});

const heroCollection = defineCollection({
  loader: file("src/data/hero.yaml"),
  schema: z.object({
    headline: z.string(),
    intro: z.string(),
    actions: z.array(
      z.object({
        label: z.string(),
        icon: z.string().optional(),
        href: z.string().url(),
        outline: z.boolean().default(false),
      })
    ),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  team: teamCollection,
  features: featuresCollection,
  hero: heroCollection,
};
