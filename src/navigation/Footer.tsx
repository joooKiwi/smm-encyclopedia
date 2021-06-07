import {withTranslation} from 'react-i18next';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import {Languages}                 from '../lang/Languages';
import SimpleDate                  from '../lang/SimpleDate';

class Footer
    extends ContentTranslationComponent {

    public render() {
        return <footer id="footer_container" className="bg-dark pt-4 pb-3 mb-0">
            <div className="container">
                <div className="row">
                    <span id="copyright" className="text-center text-light small">{this.translation('Copyright')}<sup>©</sup> Nintendo™</span>
                    <span id="copyright_madeBy" className="text-center text-light small">{this.translation('React application made by')}: JóôòKiwi & Geitje</span>
                    <span id="copyright_lastEdited" className="text-center text-light small">{this.translation('Last update')}: <SimpleDate language={Languages.currentLanguage} day={6} month={6} year={2021}/></span>
                </div>
            </div>
        </footer>;
    }

}

export default withTranslation('content')(Footer);
