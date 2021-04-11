import React, {Component, ReactNode} from "react";
import {Link} from "react-router-dom";
import {__, Languages} from "../lang/Languages";
import LanguageChanger from "./LanguageChanger";

export default class Navigation
    extends Component {

    public render(): ReactNode {

        return (<nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <Link key='navigationHome' className="navbar-brand" aria-current="page" to={`/${Languages.currentLanguage.acronym}/home`}>Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-container" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div id="navbar-container" className="collapse navbar-collapse">
                    <ul id="left-navbar-container" className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{__('Display')}...</span>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li className="dropdown-item"><Link key="navigationEveryEntities" className="nav-link active" to={`/${Languages.currentLanguage.acronym}/every/entity`}>{__('Display every entities')}</Link></li>
                                <li className="dropdown-item"><Link key="navigationEveryLimit" className="nav-link active" to={`/${Languages.currentLanguage.acronym}/every/group`}>{__('Display every entity group')}</Link></li>
                                <li className="dropdown-item"><Link key="navigationEveryLimit" className="nav-link active" to={`/${Languages.currentLanguage.acronym}/every/limit`}>{__('Display every limits')}</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul id="right-navbar-container" className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <LanguageChanger/>
                    </ul>
                </div>
            </div>
        </nav>);
    }

}