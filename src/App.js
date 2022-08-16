import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Containers
import Todo from 'Containers/Todo/Todo';
import NotFound from 'Containers/NotFound/NotFound';
import Detail from 'Containers/Detail/Detail';
import SignIn from 'Containers/SignIn/SignIn';

// Private Route
import PrivateRoute from './Config/PrivateRoute';

function App() {
	return (
		<Router>
			<Switch>
				<PrivateRoute exact path="/" component={Todo} />
				<PrivateRoute exact path="/detail/:id" component={Detail} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="*" component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
