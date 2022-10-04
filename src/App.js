import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

import {Home} from './components/Home';
import ViewBook from './components/ViewBook';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import ViewBookDetails from './components/ViewBookDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Home}></Route>

            <Route exact path="/ViewBook" component = {ViewBook}></Route>

            <Route exact path="/AddBook" component = {AddBook}></Route>
            
            <Route exact path="/UpdateBook/:id" component = {UpdateBook}></Route>

            <Route exact path="/ViewBookDetails/:id"  component = {ViewBookDetails}></Route>
          </Switch>   
        </div>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
