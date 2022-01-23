import {Link} from 'react-router-dom';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import {route}                     from '../routes/route';
import Tooltip                     from '../bootstrap/tooltip/Tooltip';
import {TooltipInstance}           from '../bootstrap/tooltip/TooltipInstance';


const HOME_ID = 'home-link';

export default function HomeButton() {
    return <ContentTranslationComponent>{translation =>
        <Tooltip option={({title: translation('Home'), placement: 'left',})} elementId={HOME_ID}>
            <Link key="navigation button" id={HOME_ID} className="btn btn-lg bi-house" to={route('home')}
                  onClick={() => TooltipInstance.getInstance(HOME_ID).instance.hide()}/>
        </Tooltip>
    }</ContentTranslationComponent>;
}
