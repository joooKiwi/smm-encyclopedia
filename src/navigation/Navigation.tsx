import React, {Component, ReactNode} from "react";
import {Link} from "react-router-dom";
import {Languages} from "../Languages";
import LanguageChanger from "./LanguageChanger";

export default class Navigation
    extends Component {

    render(): ReactNode {

        return (<nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <Link key={'navigationHome'} className="navbar-brand" to={`/${Languages.currentLanguage}`}>Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-container" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div id="navbar-container" className="collapse navbar-collapse">
                    <ul id="left-navbar-container" className="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <ul id="right-navbar-container" className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <LanguageChanger/>
                    </ul>
                </div>
            </div>
        </nav>);
    }

}