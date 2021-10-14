import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import SimpleDate                  from '../lang/date/SimpleDate';

/**
 *
 * @reactComponent
 */
export default function Footer() {
    return <footer id="footer_container" className="bg-dark pt-4 pb-3 mb-0">
        <div className="container">
            <div className="row">
                <ContentTranslationComponent>{translation =>
                    <span id="copyright" className="text-center text-light small">
                        {translation('Copyright')}<sup>©</sup> Nintendo™
                    </span>
                }</ContentTranslationComponent>
                <ContentTranslationComponent>{translation =>
                    <span id="copyright_madeBy" className="text-center text-light small">
                        {translation('React application made by')}: JóôòKiwi & Geitje
                    </span>
                }</ContentTranslationComponent>
                <ContentTranslationComponent>{translation =>
                    <span id="copyright_lastEdited" className="text-center text-light small">
                        {translation('Last update')}: <SimpleDate day={6} month={10} year={2021}/>
                    </span>
                }</ContentTranslationComponent>
            </div>
        </div>
    </footer>;
}
