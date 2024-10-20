import {DataViewState} from "primereact/dataview";

export const dataviewToNest = (dataview?: Readonly<DataViewState>): { [key: string]: unknown } => {

    if (!dataview) return {};

    return {
        "page": Math.floor(dataview.first / dataview.rows) + 1,
        "limit": dataview.rows
    };

};