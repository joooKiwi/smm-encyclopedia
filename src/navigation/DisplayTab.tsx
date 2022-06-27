import {Fragment} from 'react';

import {BASE_PATH}                 from '../variables';
import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import Image                       from '../app/tools/images/Image';
import SingleDisplayTab            from './SingleDisplayTab';
import {TranslationUtility}        from '../lang/components/TranslationUtility';

/**
 * @reactComponent
 */
export default function DisplayTab() {
    return <li className="nav-item dropdown">
        <ContentTranslationComponent>{translation =>
            <span className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {translation('Display')}…
                </span>
        }</ContentTranslationComponent>
        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <SingleDisplayTab routeName="everyEntities" callback={translation => translation('Display every entities')}/>
            <SingleDisplayTab routeName="everyCategories" callback={translation => translation('Display every entity categories')}/>
            <SingleDisplayTab routeName="everyGroups" callback={translation => translation('Display every entity groups')}/>
            <SingleDisplayTab routeName="everyLimits" callback={translation => translation('Display every limits')}/>
            <SingleDisplayTab routeName="everyThemes" callback={translation => translation('Display every themes')}/>
            <div className="dropdown-divider"/>
            <SingleDisplayTab routeName="everySoundEffects" callback={translation => translation('Display every sound effects')}/>
            <SingleDisplayTab routeName="everySoundEffectCategories" callback={translation => translation('Display every sound effect categories')}/>
            <div className="dropdown-divider"/>
            <SingleDisplayTab routeName="everyMiiCostumes" callback={translation => TranslationUtility.replaceAndInterpretTranslation(translation, 'Display every Mii costumes',
                {
                    pluralName: <span key="miiCostume-pluralName" className="text-decoration-underline">Mii costumes{/*TODO add Mii costumes, but the plural name*/}</span>,
            },)}/>
            <div className="dropdown-divider"/>
            <SingleDisplayTab routeName="everyMysteryMushrooms" callback={translation => TranslationUtility.replaceAndInterpretTranslation(translation, 'Display every Mystery Mushrooms',
                {
                    pluralName: <Fragment key="everyMysteryMushrooms-pluralName">
                        <span key="mysteryMushroom-pluralName" className="text-decoration-underline">Mystery Mushrooms</span>{/*TODO add Mystery Mushroom, but the plural name*/}
                        <sup><Image key="mysteryMushroom-image" source={`/${BASE_PATH}/entity/1 - SMB/In game/SMM1/Item - Kinoko2/wait.0.png`} fallbackName="Mystery Mushroom image" className="menu-image"/></sup>
                    </Fragment>
                })}/>
            <div className="dropdown-divider"/>
            <SingleDisplayTab routeName="everyGameReferences" callback={translation => translation('Display every game references')}/>
            <SingleDisplayTab routeName="everyGameStyles" callback={translation => translation('Display every game styles')}/>
        </ul>
    </li>;
}
