import {Link} from 'react-router-dom';

import ChangeTheLanguageTab        from './ChangeTheLanguageTab';
import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import DisplayTab                  from './DisplayTab';
import {route}                     from '../routes/route';

/**
 *
 * @reactComponent
 */
export default function Navigation() {
    return <nav id="navigation-container" className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
            <ContentTranslationComponent>{translation =>
                <Link key="navigationHome" className="navbar-brand" aria-current="page" to={route('home')}>
                    {translation('Home')}
                </Link>
            }</ContentTranslationComponent>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-container" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div id="navbar-container" className="collapse navbar-collapse">
                <ul id="left-navbar-container" className="navbar-nav me-auto mb-2 mb-lg-0">
                    <DisplayTab/>
                </ul>
                <ul id="right-navbar-container" className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <ChangeTheLanguageTab/>
                </ul>
            </div>
        </div>
    </nav>;
}
