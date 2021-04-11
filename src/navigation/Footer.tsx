import {__, Languages} from "../lang/Languages";
import {Component} from "react";

export default class Footer
    extends Component {

    public render() {
        return <footer id="footer_container" className="bg-dark pt-4 pb-3 mb-0">
            <div className="container">
                <div className="row">
                    <span id="copyright" className="text-center text-light small">{__('Copyright')}<sup>©</sup> Nintendo™</span>
                    <span id="copyright_madeBy" className="text-center text-light small">{__('React application made by')}: JóôòKiwi & Geitje</span>
                    <span id="copyright_lastEdited" className="text-center text-light small">{__('Last update')}: {Languages.currentLanguage.newDateInstanceCreator.createDate(11, 4, 2021)}</span>
                </div>
            </div>
        </footer>
    }

}
