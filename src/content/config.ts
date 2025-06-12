import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    readTime: z.string(),
    type: z.enum(["internal", "external"]).default("internal"),
    externalUrl: z.string().optional(),
    platform: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    status: z.enum(["In Progress", "Completed", "Planned", "On Hold"]),
    category: z.string().optional(),
    github: z.string().optional(),
    codeberg: z.string().optional(),
    gitlab: z.string().optional(),
    demo: z.string().optional(),
    image: z.string().optional(),
    highlights: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  projects,
};
