import React, {Component} from "react";
import Navigation         from "../navigation/Navigation";
import Footer             from "../navigation/Footer";

export default abstract class AbstractApp
    extends Component {


    protected abstract _mainContent(): JSX.Element;


    public render() {
        return (<>
            <Navigation/>
            <main className="pt-3 pb-5 align-bottom container-fluid">
                {this._mainContent()}
            </main>
            <Footer/>
        </>)
    }

}