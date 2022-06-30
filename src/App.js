import TopBar from "./components/TopBar/TopBar";
import Single from "./pages/single/Single";
import Write from"./pages/write/Write";
import Settings from"./pages/settings/Settings";
import Login from'./pages/login/Login';
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from"react-router-dom";


function App() {
  const user=false;
  return (
    <Router >
      
     <TopBar />
     <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/register">
        { user ? <Home/> : <Register/>}
      </Route>
      <Route exact path="/login">
        {user ? <Home />:<Login/>}
      </Route>
      <Route  path="/setting">
        {user? <Settings/>: <Register/>}
      </Route>
      <Route path="/write">
        {user? <Write/> : <Register/>}
      </Route>
      <Route  path="/post/:postId">
        <Single/>
      </Route>
     </Switch>
        
         
      
    </Router>
  );
}

export default App;
