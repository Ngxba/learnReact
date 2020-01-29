import React from "react"
import UserList from "../components/UserList"

const User = () => {

    const USERS = [
        {id: "u1", name: "Tung Lam", image : "https://images.menswearhouse.com/is/image/TMW/171171090-suits-24?scl=1&qlt=80", places: 3}
    ]

    return (
        <UserList items={USERS}/>
    )
}

export default User