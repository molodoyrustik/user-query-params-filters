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
    const MyParam = {
        encode: (val: string) => {
            return val;
        },
        decode: (input: string | (string | null)[] | null | undefined) => {
            const a =  users.find((user) => user.id === input);
            if (a) {
             return a.id;
            } else {
                return undefined;
            }
        },
    };

    const [query, setQuery] = useQueryParams({
        filter1: MyParam,
    });

    console.log(query);
    return <div>
        <h1>Filters</h1>
        <div>
            <p>1 filter</p>
            <select value={query.filter1} onChange={(value) => {
                // setFilter1(value.target.value)
                console.log(value.target.value);
                setQuery({
                    filter1: value.target.value ? value.target.value: undefined,
                })
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