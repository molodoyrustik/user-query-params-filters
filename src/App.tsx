import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { QueryParamProvider } from 'use-query-params';
import AboutPage from './AboutPage';
import ListPage from './ListPage';

function App() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Switch>
            <Route exact path="/">
              Index
             </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/list">
              <ListPage />
            </Route>
          </Switch>
        </QueryParamProvider>
      </Router >
    </div>
  );
}

export default App;
