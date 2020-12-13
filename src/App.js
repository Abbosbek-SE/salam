import React from 'react'
import Video from './Video'
import Groupchat from './Groupchat'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import MenuSalam from "./components/header/MenuSalam"
import Home from "./components/ui/Home"
import { AuthProvider } from "./contexts/AuthContext"
import ForgotPassword from "./components/auth/ForgotPassword"
import UpdateProfile from "./components/auth/UpdateProfile"
import PrivateRoute from "./PrivateRoute"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import "./app.css"


	  
function App(){

	
		
	
		return (
			<>
			<MenuSalam />
				<Router>
				<AuthProvider>
					<Switch>
					   <Route path="/forgot-password" component={ForgotPassword} />
					   <PrivateRoute path="/update-profile" component={UpdateProfile} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
						<PrivateRoute path="/" exact component ={Home} />
						<PrivateRoute path="/groupchat" exact component={Groupchat} />
						<Route path="/:url" component={Video} />
						
					</Switch>
				</AuthProvider>
				</Router>
				</>
		)
	
}

export default App;