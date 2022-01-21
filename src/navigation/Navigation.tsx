import {Link} from 'react-router-dom';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import DisplayTab                  from './DisplayTab';
import {route}                     from '../routes/route';
import Tooltip                     from '../bootstrap/tooltip/Tooltip';

const HOME_ID = 'home-link';

/**
 * @reactComponent
 */
export default function Navigation() {
    return <nav id="navigation-container" className="navbar navbar-expand-md navbar-light bg-light bg-gradient">
        <div className="container-fluid">
            <ContentTranslationComponent>{translation =>
                <Tooltip option={({title: translation('Home'), placement: 'right',})} elementId={HOME_ID}>
                    <Link key="navigationHome" id={HOME_ID} className="navbar-brand bi-house" aria-current="page" to={route('home')}/>
                </Tooltip>
            }</ContentTranslationComponent>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-container" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div id="navbar-container" className="collapse navbar-collapse">
                <ul id="left-navbar-container" className="navbar-nav me-auto mb-2 mb-lg-0">
                    <DisplayTab/>
                </ul>
                <ul id="right-navbar-container" className="navbar-nav ms-auto mb-2 mb-lg-0"/>
            </div>
        </div>
    </nav>;
}
