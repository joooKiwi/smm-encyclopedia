import './App.scss';
import React, {Component} from 'react';
import logo from "./logo.svg";
import GroupTextButton from "./buttons/GroupTextButton";
import {PossibleLanguages} from "./Languages";
import Navigation from "./navigation/Navigation";

export default class App
    extends Component<{ lang: PossibleLanguages }, any> {

    protected get language() {
        return this.props.lang;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <GroupTextButton elements={[{text: 'test', isActive: true,}]}/>
                </header>
            </div>
        );
            <Navigation/>
    }

}
