import './App.css';
import {BrowserRouter, HashRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import {useContext} from "react";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

function App() {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if(loading) {
        return <Loader/>
    }
  return (
    <HashRouter>
      <NavBar/>
        <AppRouter/>
    </HashRouter>
  );
}

export default App;
