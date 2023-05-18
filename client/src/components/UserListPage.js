import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const UserListPage = (props) => {
    const [userList, setUserList] = useState([])
    
    const getUserList = async () => {
        try {
            const response = await fetch("/api/v1/users")
            if(!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const body = await response.json()
            setUserList(body.users)
        } catch (error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getUserList()
    }, [])

    const userListObject = userList.map(userObject => {

        return(
            <li key={userObject.id}>
                <h4><Link to={`/users/${userObject.id}`}>{userObject.username}</Link></h4>
            </li>
        )
    }) 
   return (
    <>
        {userListObject}
    </>
   )
}

export default UserListPage