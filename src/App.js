import React, { Component ,Fragment} from 'react'
import Header from './common/header/Header.js'
import {GlobalStyle} from './style.js'
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import store from './store';
import Home from './common/home'
//import Detail from './common/detail'
import Detail from './common/detail/loadable.js'
import Login from './common/login'
import Writting from './common/writting'
import Vip from './common/vip'
class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <Fragment>
          <GlobalStyle />
          <BrowserRouter>
          <div>
            <Header></Header>
            {/* switch：当路由匹配不到时走相应组件，一般用作404页面 */}
            <Switch>
            <Route path='/' exact component={Home}></Route> 
             {/*  <Route path='/home' exact render={()=>
                (
                  <div>
                    <Header></Header>
                    <Home></Home>
                  </div>
                )}></Route> */}
              {/* 下面这种是动态路由，通过this,props.match.params.id获取动态参数 */}
              <Route path='/detail/:id' exact component={Detail}></Route>
             {/* 还可以通过下面这种方式路由传参 */}
             {/*  <Route path='/detail' exact component={Detail}></Route> */}

             <Route path='/login' exact component={Login}></Route> 

             {/*  <Route path='/home'  children={(routerProps)=>{
               console.log(routerProps);
               return(
                 <div>
                     <Header></Header>
                     <button onClick={routerProps.history.go(-1)}>Go</button>
                 </div>
              
               )
             }}></Route>  */}
             <Route path='/write' exact component={Writting}></Route>
             <Route path='/aa' exact render={()=><div>aa</div>}></Route>
             <Route path='/vip' exact component={Vip}></Route>
             <Route render={()=><div>404</div>}></Route>
             </Switch>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

export default App
