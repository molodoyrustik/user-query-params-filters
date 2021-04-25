import React from 'react';
import Filters from './Filters';
// import {
//     useQueryParams,
//     StringParam,
//     NumberParam,
//     ArrayParam,
//     QueryParamConfig,
//     withDefault,
//   } from 'use-query-params';

const ListPage = () => {
    // const [query, setQuery] = useQueryParams({
    //     filter1: StringParam,
    //     filter2: StringParam,
    //     filter3: StringParam,
    // });
    // console.log('LISTPAGE', query);
    return <div>
        <h1>ListPage</h1>
        <Filters/>
    </div>
}

export default ListPage;