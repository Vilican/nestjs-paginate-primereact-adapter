import {FilterMatchMode} from "primereact/api";
import {TwoWayMap} from "../utils/TwoWayMap";

/**
 * Mapping between PrimeReact's {@link FilterMatchMode} and nestjs-paginate's URL query parameters.
 */
export const filterOperators = new TwoWayMap(new Map([
    [FilterMatchMode.STARTS_WITH, '$sw'],
    [FilterMatchMode.CONTAINS, '$contains'],
    [FilterMatchMode.NOT_CONTAINS, '$not:$contains'],
    [FilterMatchMode.EQUALS, '$eq'],
    [FilterMatchMode.NOT_EQUALS, '$not:$eq'],
    [FilterMatchMode.IN, '$in'],
    [FilterMatchMode.NOT_IN, '$not:$in'],
    [FilterMatchMode.LESS_THAN, '$lt'],
    [FilterMatchMode.LESS_THAN_OR_EQUAL_TO, '$lte'],
    [FilterMatchMode.GREATER_THAN, '$gt'],
    [FilterMatchMode.GREATER_THAN_OR_EQUAL_TO, '$gte'],
    [FilterMatchMode.BETWEEN, '$btw'],
    [FilterMatchMode.DATE_IS, '$eq'],
    [FilterMatchMode.DATE_IS_NOT, '$not:$eq'],
    [FilterMatchMode.DATE_BEFORE, '$lt'],
    [FilterMatchMode.DATE_AFTER, '$gt']
]));