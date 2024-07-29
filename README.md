# nestjs-paginate-primereact-adapter

This project is an adapter that allows integration between [Nest.js Paginate](https://www.npmjs.com/package/nestjs-paginate) and [PrimeReact Datatable](https://primereact.org/datatable/) component.

## How to use

1. Install on your front-end:

`npm i --save @vilican/nestjs-paginate-primereact-adapter`  
`yarn add @vilican/nestjs-paginate-primereact-adapter`

2. When querying paged objects, use ```datatableToNest``` function to transform Datatable state into URL query parameters.  
   You can pass these parameters to your HTTP client of choice, such as Axios.

`const params = parseDatatableToNest(dataTableStateEvent);`

3. When parsing the reply, use ```nestToDatatable``` function to auto-generate props for the Datatable.  
   This function accepts metadata received from Nest.js Paginate (i.e. your API).  
   Remove props 'first', 'rows', 'totalRecords', 'filters', 'multiSortMeta' and 'sortMode' from Datatable if defined.

`<DataTable ...OTHER PROPS... {...parseNestToDatatable(meta)}>`