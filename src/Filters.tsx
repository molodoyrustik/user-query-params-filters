import React, { useState, useEffect } from 'react';
import {
    useQueryParams,
    StringParam,
    useQueryParam,
    NumberParam,
    ArrayParam,
    QueryParamConfig,
    withDefault,
} from 'use-query-params';

interface IUser {
    id: string;
    name: string;
    age: number;
}

const user1: IUser = {
    id: 'id1',
    name: 'Ruslan',
    age: 12,
}

const user2: IUser = {
    id: 'id2',
    name: 'Damir',
    age: 142,
}

const users: IUser[] = [user1, user2]

const Filters = () => {

    const [query, setQuery] = useQueryParams({
        filter1: withDefault(StringParam, 'id1'),
    });

    const [filter1, setFilter1] = useState<IUser | undefined>(users.find((user) => user.id === query.filter1));

    useEffect(() => {
        setQuery({
            filter1: filter1?.id,
        })
    }, [filter1])

    console.log('query', query);
    console.log('filter', filter1);
    return <div>
        <h1>Filters</h1>
        <div>
            <p>1 filter</p>
            <select value={filter1?.id} onChange={(event) => {
                const id = event.target.value;
                setFilter1(users.find((user) => user.id === id));
            }}>
                {
                    users.map((user) => {
                        return (
                            <option value={user.id}>{user.name}</option>
                        )
                    })
                }
            </select>
        </div>
    </div>
}

export default Filters;