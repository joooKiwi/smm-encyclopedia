import {__, Languages} from "../lang/Languages";
import {Component} from "react";

export default class Footer extends Component {

    public render() {
        return <footer id="footer_container" className="bg-dark pt-4 pb-3 mb-0">
            <div className="container">
                <div className="row">
                    <span id="copyright" className="text-sm-center text-light small">Copyright <sup>©</sup> Nintendo<sup>TM</sup></span>
                    <span id="copyright_madeBy" className="text-sm-center text-light small">{__('Web application made by')}: JóôòKiwi</span>
                    <span id="copyright_lastEdited" className="text-sm-center text-light small">{__('Last update')}: {Languages.currentLanguage.newDateInstanceCreator.createDate(28, 3, 2021)}</span>
                </div>
            </div>
        </footer>
    }

}
