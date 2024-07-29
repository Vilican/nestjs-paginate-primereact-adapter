import z from "zod";

/**
 * Schema of the object containing links to other pages.
 */
export const PagedObjectLinksSchema = z.object({
    first: z.string().url().optional(),
    previous: z.string().url().optional(),
    current: z.string().url().optional(),
    next: z.string().url().optional(),
    last: z.string().url().optional()
});

/**
 * Object containing links to other pages.
 */
export type PagedObjectLinks = z.infer<typeof PagedObjectLinksSchema>;