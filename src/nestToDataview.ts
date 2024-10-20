import {DataViewProps} from "primereact/dataview";
import {PagedObjectMeta} from "./schemas/PagedObjectMeta";

export const nestToDataview = (meta?: Readonly<PagedObjectMeta>): Pick<DataViewProps, "first" | "rows" | "totalRecords"> => {

    if (!meta) return {
        first: 0,
        rows: 0,
        totalRecords: 0
    };

    return {
        first: ((meta.currentPage - 1) * meta.itemsPerPage),
        rows: meta.itemsPerPage,
        totalRecords: meta.totalItems
    };

};