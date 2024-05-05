import { defineCollection, z } from "astro:content";

const albums = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      cover: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      tags: z.array(z.string()).optional(),
      date: z.date().optional(),
    }),
});

export const collections = {
  albums,
};
