// Task 3: addUser(first_name, last_name, email)

import {getServerURL}  from "./task1.js";

export function addUser(firstName,lastName,email)
{
    return fetch(`${getServerURL()}/users`)
    .then(res => res.json())
    .then(users =>
    {
        const newId = users.length + 1;
        const newUser = 
        {
        id: newId,
        firstName,
        lastName,
        email
        };
    

    return fetch(`${getServerURL()}/users`,
    {
        method: "POST",
        headers:
        {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    })
}