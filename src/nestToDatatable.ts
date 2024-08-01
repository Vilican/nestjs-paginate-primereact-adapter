import {DataTableProps, DataTableValueArray} from "primereact/datatable";
import {PagedObjectMeta} from "./schemas/PagedObjectMeta";
import {filterOperators} from "./mappings/filterOperators";
import {sortOrders} from "./mappings/sortOrders";

export const nestToDatatable = <T extends DataTableValueArray>(meta?: Readonly<PagedObjectMeta>):
    Pick<DataTableProps<T>, "first" | "rows" | "totalRecords" | "filters" | "multiSortMeta" | "sortMode"> => {

    if (!meta) return {
        first: 0,
        rows: 0,
        totalRecords: 0,
        filters: undefined,
        multiSortMeta: undefined,
        sortMode: "multiple"
    };

    return {
        first: ((meta.currentPage - 1) * meta.itemsPerPage),
        rows: meta.itemsPerPage,
        totalRecords: meta.totalItems,
        filters: (meta.filter) && Object.entries(meta.filter).reduce(
            (acc, [key, filterString]) => {
                const filterArray = filterString.split(":");
                return {...acc, [key]: {operator: filterOperators.revGet(filterArray[0]), value: filterArray[1]}};
            }, {}
        ),
        multiSortMeta: meta.sortBy?.map(item => {
            if (Array.isArray(item)) return {field: item[0], order: sortOrders.revGet(item[1])};
            return {field: item, order: undefined};
        }),
        sortMode: "multiple"
    };

};