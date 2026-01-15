// Task 4: delUser(number)

import {getServerURL}  from "./task1.js";

export function delUser(id)
{
    fetch(`${getServerURL()}/users/${id}`,
    {
        method: "DELETE"
    });

}
