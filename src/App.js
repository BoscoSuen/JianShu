import React, {Component } from 'react';
import { Provider} from'react-redux';
import { GlobalStyle } from './style';
import Header from './common/header';
import { Iconfont } from './statics/iconfont/iconfont';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './pages/home';
import Detail from "./pages/detail";
import store from "./store";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle />
                <Iconfont />
                <Header/>
                    <div>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail' exact component={Detail}></Route>
                    </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
