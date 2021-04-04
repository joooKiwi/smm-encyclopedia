import './App.scss';
import React, {Component} from 'react';
import Navigation from "../navigation/Navigation";
import Footer from "../navigation/Footer";

export default class App
    extends Component {

    public render() {
        return (<>
            <Navigation/>
            <main className="pt-3 pb-5 align-bottom container-fluid">
            </main>
            <Footer/>
        </>)
    }

}
