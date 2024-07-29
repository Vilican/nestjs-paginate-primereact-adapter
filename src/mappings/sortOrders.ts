import {SortOrder} from "primereact/api";
import {TwoWayMap} from "../utils/TwoWayMap";

/**
 * Mapping between PrimeReact's {@link SortOrder} and nestjs-paginate's URL query parameters.
 */
export const sortOrders = new TwoWayMap(new Map([
    [SortOrder.ASC, 'ASC'],
    [SortOrder.DESC, 'DESC']
]));