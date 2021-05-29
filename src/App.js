import react from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Avatar from './components/avatar/avatar'
import Header from './components/header/header'
import Categoryitem from './components/category_item/category_item'
import Addtodo from './components/addtodo/addtodo';
import TaskComponent from './components/task_component/taskComponent';
import Addtask from './components/addtask/addtask';
import Setavatar from './components/avatar/setAvatar/setavatar'
import Login from './components/login/login';
import Register from './components/register/register';

function App() {

  return (
    <div>
      <div className="App" >
        <Avatar />
        <Header />
        <Addtodo />
      </div>
      <div className="routing">
        <Router>
          <div className="category">
          <nav>
              <ul style={{'listStyle' : 'none'}}>
                <li>
                <Categoryitem link={'/work'} theme={'1'} name="Work"/>
                </li>
                 <li>
                <Categoryitem link={'/personal'} theme={'2'} name="Personal"/>
                </li>
                 <li>
                <Categoryitem link={'/trip'} theme={'1'} name="Trip"/>
                </li>
                 <li>
                <Categoryitem link={'/other'} theme={'2'} name="Other"/>
                </li>
              </ul>
          </nav>
          </div>
        <div className="router_page">
            <Switch>
              <Route  path="/work"> 
                <TaskComponent category='work'/>
              </Route>
               <Route  path="/personal"> 
                <TaskComponent category='personal'/>
              </Route>
               <Route  path="/trip"> 
                <TaskComponent category='trip'/>
              </Route>
              <Route  path="/other"> 
                <TaskComponent category='other'/>
              </Route>
              <Route  path="/addtodo">
                <Addtask />
              </Route>
              <Route  path="/avatar">
                <Setavatar />
              </Route>
               <Route exact path="/">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
            </Switch>
        </div>
        </Router>
        </div>
      </div>
  );
}

export default App;
