import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import SimpleDate                  from '../lang/date/SimpleDate';

export default function Footer() {
    return <footer id="footer_container" className="bg-dark pt-4 pb-3 mb-0">
        <div className="container">
            <div className="row">
                <span id="copyright" className="text-center text-light small">
                    <ContentTranslationComponent renderCallback={translation => translation('Copyright')}/><sup>©</sup> Nintendo™
                </span>
                <span id="copyright_madeBy" className="text-center text-light small">
                    <ContentTranslationComponent renderCallback={translation => translation('React application made by')}/>: JóôòKiwi & Geitje
                </span>
                <span id="copyright_lastEdited" className="text-center text-light small">
                    <ContentTranslationComponent renderCallback={translation => translation('Last update')}/>: <SimpleDate day={4} month={7} year={2021}/>
                </span>
            </div>
        </div>
    </footer>;
}
