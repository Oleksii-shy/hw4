import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/API";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";

export default function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.data);
        });
    }, []);
    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}
            <Switch>
                <Route path={'/users/:id'} component={UserDetails}/>
            </Switch>
        </div>
    );
}