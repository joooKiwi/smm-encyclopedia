import type {ModalProperties} from './ModalContainers.types';
import type {ReactProperty}   from '../util/react/ReactProperty';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import LanguageChangerButton       from './button/LanguageChanger.button';
import SimpleDate                  from '../lang/date/SimpleDate';

interface FooterProperties
    extends ReactProperty {

    languageChanger: ModalProperties

}

/**
 * @reactComponent
 */
export default function Footer({languageChanger,}: FooterProperties,) {
    return <footer id="footer-container" className="bg-dark bg-gradient pt-4 pb-3 mb-0 position-relative">
        <ContentTranslationComponent>{translation =>
            <div className="container">
                <div className="row">
                <span id="copyright" className="text-center text-light small">
                    {translation('Copyright')}<sup>©</sup> Nintendo™
                </span>
                <span id="copyright_madeBy" className="text-center text-light small">
                    {translation('React application made by')}: JóôòKiwi & Geitje
                </span>
                <span id="copyright_lastEdited" className="text-center text-light small">
                    {translation('Last update')}: <SimpleDate day={19} month={6} year={2022}/>
                </span>
                </div>
            </div>
        }</ContentTranslationComponent>
        <LanguageChangerButton {...languageChanger}/>
    </footer>;
}
