import React from "react";
import Card from "../UI/Card";
import styles from './UsersList.module.css'

const UserList = props => {

    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user) =>
                (
                    <li key={user.id}>
                        From {user.from} to {user.to}, {user.type} - when: ({user.date}), description: {user.description}
                        <button onClick={() => props.onDeleteHandler(user.id)}>Delete</button>
                        <button onClick={() => props.onEditHandler(user.id)}>Edit</button>
                    </li>
                )
                )}
            </ul>
        </Card>
    )
}

export default UserList;