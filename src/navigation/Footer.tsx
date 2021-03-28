import {__, Languages} from "../Languages";
import {Component} from "react";

export default class Footer extends Component {

    public render() {
        return <footer id="footer_container" className="bg-dark pt-4 pb-3 mb-0">
            <div className="container">
                <div className="row">
                    <span id="copyright" className="w-100 text-sm-center text-light small">
                        Copyright <sup>©</sup> Nintendo<sup>TM</sup>
                    </span>
                    <span id="copyright_madeBy" className="w-100 text-sm-center text-light small">
                        {__('Web application made by')}: JóôòKiwi
                    </span>
                    <span id="copyright_lastEdited" className="w-100 text-sm-center text-light small">
                        {__('Last update')}: {getDateFromLanguage()}
                    </span>
                </div>
            </div>
        </footer>
    }

}

function getDateFromLanguage(): JSX.Element {
    switch (Languages.currentLanguage.acronym) {
        default:
        case 'en_EU':
        case 'en_US':
            return <>March 27<sup>th</sup>, 2021</>;
        case 'fr_CA':
        case 'fr_EU':
            return <>27 mars 2021</>;
    }
}