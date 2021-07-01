import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
export default function User({item}) {
    return (
        <div>
            {item.id}. {item.name} - <Link to={'/users/' + item.id}>Details</Link>
        </div>
    );
}