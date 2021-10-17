import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import { Header } from './components/header';
import { Landing } from './components/landing'
import { Projects } from './components/projects';
import { About } from './components/about';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">

      <Router basename ='/'>
        <Header />
        <Switch>
          <Route exact path ='/' component={Landing} />
          <Route path = '/projects' component={Projects} />
          <Route path ='/about' component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
