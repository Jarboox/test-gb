import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

import Register from '../components/register/register';
import List from '../components/list/index';
import Sum from '../components/sum/sum';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
    
    }


    render() {
        return (<>
            <nav className="nav">
                <ul className="navigation">
                    <li>
                        <a href="/"> Registrar </a>
                    </li>
                    <li>
                        <a href="/list"> Usuarios </a>
                    </li>
                    <li>
                        <a href="/sum"> Index </a>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/" component={() => <Register />} />
                <Route exact path="/list" component={() => <List />} />
                <Route exact path="/sum" component={() => <Sum />} />
            </Switch>
        </>);
    }
}

export default withRouter(Routes);