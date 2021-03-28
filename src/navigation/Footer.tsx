import {__, Languages} from "../Languages";
import {Component} from "react";

export default class Footer extends Component {

    public render() {
        return <footer id="footer_container" className="bg-dark pt-4 pb-3 mb-0">
            <div className="container">
                <div className="row">
                    <span id="copyright" className="text-sm-center text-light small">Copyright <sup>©</sup> Nintendo<sup>TM</sup></span>
                    <span id="copyright_madeBy" className="text-sm-center text-light small">{__('Web application made by')}: JóôòKiwi</span>
                    <span id="copyright_lastEdited" className="text-sm-center text-light small">{__('Last update')}: {getDateFromLanguage()}</span>
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
            return <>March 28<sup>th</sup>, 2021</>;
        case 'fr_CA':
        case 'fr_EU':
            return <>28 mars 2021</>;
        case 'es_AM':
        case 'es_EU':
            return <>28 de marzo del 2021</>;//https://www.babbel.com/en/magazine/how-to-write-the-date-in-spanish/
        case 'it':
            return <>28 marzo 2021</>;
        case 'nl':
            return <>28 maart 2021</>;//https://www.babbel.com/en/magazine/a-guide-to-how-to-write-the-date-in-dutch/
        case 'de':
            return <>der 4. März 2021</>;//https://www.wikihow.com/Write-German-Dates
        case 'ru':
            return <>28 март 2021 года</>;//https://www.babbel.com/en/magazine/how-to-write-the-date-in-russian/
        case 'ko':
            return <>2021년3월28일</>//https://koreanyousay.tumblr.com/post/15304320832/how-do-you-write-dates-in-korean-ex-november
        case 'ja':
        case 'zh_S':
        case 'zh_T':
            return <>2021年3月28日</>;//https://en.wikipedia.org/wiki/Date_and_time_notation_in_Asia
    }
}