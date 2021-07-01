import Users from "./components/users/Users";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
function App() {
  return (
      <Router>
          <div>
              <div><Link to={'/'}>Home</Link></div>
              <div><Link to={'/users'}>Users</Link></div>
              <div><Link to={'/posts'}>Posts</Link></div>
              <div><Link to={'/comments'}>Comments</Link></div>
              <Switch>
                  <Route path={'/users'} component={Users}/>
                  <Route path={'/posts'} component={Posts}/>
                  <Route path={'/comments'} component={Comments}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
