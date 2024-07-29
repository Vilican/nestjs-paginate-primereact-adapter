import z from "zod";

/**
 * Schema of the object containing metadata about the response data.
 */
export const PagedObjectMetaSchema = z.object({
    itemsPerPage: z.number(),
    totalItems: z.number(),
    currentPage: z.number(),
    totalPages: z.number(),
    sortBy: z.array(
        z.union([
            z.string(),
            z.tuple([z.string(), z.enum(["ASC", "DESC"])])
        ])
    ).optional(),
    searchBy: z.array(z.string()).optional(),
    search: z.string().optional(),
    select: z.array(z.string()).optional(),
    filter: z.record(z.string(), z.string()).optional()
});

/**
 * Object containing metadata about the response data.
 */
export type PagedObjectMeta = z.infer<typeof PagedObjectMetaSchema>;