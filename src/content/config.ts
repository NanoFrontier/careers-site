import { defineCollection, z } from 'astro:content';

export const collections = {
  jobs: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      location: z.string(),
      employmentType: z.enum(['FULL_TIME','PART_TIME','CONTRACT','INTERN']),
      department: z.enum(['R&D','Engineering','Business','Corporate']).optional(),
      description: z.string(),
      datePosted: z.string(),
      validThrough: z.string().optional(),
      identifier: z.string().optional(),
      tags: z.array(z.string()).optional(),
      priority: z.enum(['high', 'medium', 'low']).optional(),
    })
  }),
  people: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      role: z.string().optional(),
      department: z.string().optional(),
      date: z.string(),
      summary: z.string().optional(),
      hero: z.string().optional(),
      quote: z.string().optional(),
      joined: z.string().optional(),
      name: z.string().optional(),
      link: z.string().url().optional()
    })
  }),
  stories: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      summary: z.string().optional(),
      hero: z.string().optional(),
      date: z.string()
    })
  })
};


