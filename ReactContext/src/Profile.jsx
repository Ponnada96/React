import React, { useContext } from 'react'
import userContext from './context/userContext'

function Profile() {
    const { user } = useContext(userContext)
    return (
        <div>
            <h1>Profile</h1>
            <b>username {user.name}</b>
        </div>
    )
}

export default Profile