import z from "zod";

/**
 * Schema of the object containing links to other pages.
 */
export const PagedObjectLinksSchema = z.object({
    first: z.url().optional(),
    previous: z.url().optional(),
    current: z.url().optional(),
    next: z.url().optional(),
    last: z.url().optional()
});

/**
 * Object containing links to other pages.
 */
export type PagedObjectLinks = z.infer<typeof PagedObjectLinksSchema>;