import React from 'react';

const Users = (props) => {
    const {params} = props.match;
    console.log(props);
    return(
        <div>
            <h1>Users</h1>
            <p>{params.id}</p>
        </div>
    )
}

export default Users;