import React from 'react';
import './App.css';
import Header from "./Header";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Signin from "./SignIn";
import {useStateValue} from "./StateProvider";

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App(){
   const [{user},dispatch]=useStateValue();
  
    return (
      <div className="app">
      <Router>
      {
        !user ?(
          <Signin/>
        ):(
          <>
        <Header/>
        <div className="app_body">
           <Sidebar />
           <Switch>
              <Route  path="/room/:roomId">
                  <Chat />
              </Route>
              <Route path="/">
                 
              </Route>
           </Switch>
        </div>
        </>
        )}
       
       </Router>
      </div>
    );

}


export default App