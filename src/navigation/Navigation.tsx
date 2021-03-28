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
                <div id="navbar-right-container" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <LanguageChanger/>
                    </ul>
                </div>
            </div>
        </nav>);
    }

}