import { defineCollection, defineContentConfig, z } from '@nuxt/content'


const sharedContentSchema = {
    // Return just the shape (a plain object), not a full schema
    title: z.string(),
    description: z.string(),
    image: z.optional(z.object({ url: z.string(), alt: z.string() })),
    timestamp: z.number(),
    tags: z.array(z.string()),
}

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            // Load every file inside the `content` directory
            source: 'blog/**',
            // Specify the type of content in this collection
            type: 'page',
            schema: z.object({
                ...sharedContentSchema,
                rawbody: z.string()
            }),
        }),
        links: defineCollection({
            // Load every file inside the `content` directory
            source: 'links/**',
            // Specify the type of content in this collection
            type: 'data',
            schema: z.object({
                ...sharedContentSchema,
                links: z.array(z.object({ title: z.string(), url: z.string() }))
            })
        }),
    }
})