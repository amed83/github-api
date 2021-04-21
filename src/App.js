import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ShowSingleRepo } from './containers/ShowSingleRepo/ShowSingleRepo';
import { ShowAllRepo } from './containers/ShowAllRepo/ShowAllRepo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={ShowAllRepo} />
        <Route path='/:id' exact component={ShowSingleRepo} />
      </Switch>
    </Router>
  );
}

export default App;
