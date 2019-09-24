
/*
   App 应用总容器
*/
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './containers/header/Header';
import Home from './containers/home/Home';
import About from './containers/about/About';
import BusinessShow from './containers/businessShow/BusinessShow';
import CallUs from './containers/callus/CallUs';
import Footer from './containers/footer/Footer';
import Mengban from './containers/mengban/Mengban';
class App extends Component {
    render() {
        return <div>
            <Mengban/>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/About" component={About} />
                <Route path="/BusinessShow" component={BusinessShow} />
                <Route path="/CallUs" component={CallUs} />
                <Route render={() => <Redirect to="/" />} />
            </Switch>
            
            <Footer />
        </div>;
    }
}
export default App;