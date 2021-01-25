import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/signin';
import CollectionP from './pages/collectionpage';
import WomenP from './pages/women';
import MenP from './pages/men';
import MagazineP from './pages/magazine';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignIn} exact />
        <Route path='/collectionpage' component={CollectionP} exact />
        <Route path='/women' component={WomenP} exact />
        <Route path='/men' component={MenP} exact />
        <Route path='/magazine' component={MagazineP} exact />
      </Switch>
    </Router>
  );
}

export default App;
