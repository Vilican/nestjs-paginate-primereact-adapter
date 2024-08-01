import {DataTableStateEvent} from "primereact/datatable";
import {sortOrders} from "./mappings/sortOrders";

export const datatableToNest = (datatable?: Readonly<DataTableStateEvent>): { [key: string]: unknown } => {

    if (!datatable) return {};

    const filters: { [key: string]: string | string[] } = {};

    // Filters can actually be nullish, but ESLint fails to detect that.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (datatable.filters) for (const [key, value] of Object.entries(datatable.filters)) {

        // One condition for given attribute
        if ("matchMode" in value && "value" in value && value.matchMode && value.value) {
            filters[`filter.${key}`] = `$${value.matchMode}:${value.value}`;
            continue;
        }

        // Multiple conditions for given attribute
        if ("operator" in value && "constraints" in value && value.operator) {
            filters[`filter.${key}`] = [];
            for (const constraint of value.constraints) {
                // ===== For some reason, TypeScript and ESLint cannot detect that array has ben set two lines above. =====
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                filters[`filter.${key}`].push(`$${constraint.matchMode}:${constraint.value}`);
            }
        }

    }

    const sorters: string[] = [];

    // Sorting by a single attribute
    if (datatable.sortField && datatable.sortOrder) sorters.push(`${datatable.sortField}:${sortOrders.get(datatable.sortOrder)}`);

    // Sorting by multiple attributes
    if (datatable.multiSortMeta) for (const value of datatable.multiSortMeta) {
        if (!value.order) continue;
        sorters.push(`${value.field}:${sortOrders.get(value.order)}`);
    }

    return {
        "page": (datatable.page ?? 0) + 1,
        "limit": datatable.rows,
        "sortBy": (sorters.length > 0) ? sorters : undefined,
        ...filters
    };

};