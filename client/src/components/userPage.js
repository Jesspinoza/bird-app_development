import React from "react";

const UserPage = (props) => {
    return (
        <>
            <h2>Account Details</h2>
            <h4>Username: {props.user.username}</h4>
            <h4>Email: {props.user.email}</h4>
            <h2>Bird Sightings!</h2>
            <h2>Dream Birds</h2>
        </>
    )
}

export default UserPage