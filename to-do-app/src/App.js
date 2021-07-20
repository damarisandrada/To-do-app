import ContentHome from './pages/home/Home';
import ContentLogin from './pages/loginpage/Loginpage';
import ContentRegister from './pages/registerpage/Registerpage'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Router>
      <Switch>
        <Route exact path="/">
          <ContentRegister></ContentRegister>
        </Route>
        <Route exact path="/Login">
          <ContentLogin></ContentLogin>
        </Route>
        <Route exact path="/Home">
          <ContentHome></ContentHome>
        </Route>
      </Switch>
    </Router>
    <Footer></Footer>
    </div>
  );
};

export default App;
