import z from "zod";
import {PagedObjectLinksSchema} from "./PagedObjectLinks";
import {PagedObjectMetaSchema} from "./PagedObjectMeta";

/**
 * Schema of the object encapsulating response data and extending it with metadata and links.
 */
export const PagedObjectSchema = <T extends z.ZodType>(dataSchema: T) => z.object({
    data: z.array(dataSchema),
    links: PagedObjectLinksSchema,
    meta: PagedObjectMetaSchema
});

/**
 * Object encapsulating response data and extending it with metadata and links.
 */
export type PagedObject = z.infer<typeof PagedObjectMetaSchema>;