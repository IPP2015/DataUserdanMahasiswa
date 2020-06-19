import React from 'react'
import{Switch,Route} from 'react-router-dom'
import apiconfig from '../config/api.config.json'
import Header from '../components/Header'
import Sidebar from '../components/sidebar'
import home from '../components/home'
import listmahasiswa from '../components/content/mahasiswa/listmahasiswa'
//import Datatablesertifikasi from '../components/content/m_sertifikasi/list_sertifikasi'
import page from "../components/content/mahasiswa/page"
import listmuser from "../components/content/m_user/list_m_user"
//import user from '../components/user'

import {Redirect}  from 'react-router' 

class Dashboard  extends React.Component{
    render(){
        return(
            <div class="wrapper">
            <Header />
            <Sidebar />
            <div class="content-wrapper">
                  <Switch>
                    <PrivateRoute exact path="/home" component={home} />
                    <PrivateRoute exact path="/listmahasiswa" component={listmahasiswa} />
                   <PrivateRoute exact path="/page" component={page} />
                   <PrivateRoute exact path="/listm_user" component={listmuser} />
                   {/* <PrivateRoute exact path="/listsertifikasi" component={Datatablesertifikasi} /> */}
                  </Switch>
            </div>
          </div>
        )
    }

}
const PrivateRoute = ({ component : Component, ...rest }) => (
  <Route
  {...rest} 
  render = {props=>
  localStorage.getItem(apiconfig.ls.token)!=null ? (
    <Component {...props} />
  ) : (
    <Redirect
    to={{
      Pathname: "/",
      State: { from : props.location }
    }}
    />
  )}  
    />
)

export default Dashboard