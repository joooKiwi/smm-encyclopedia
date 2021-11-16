import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
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
            <SingleDisplayTab routeName="everyGameStyles" callback={translation => translation('Display every game styles')}/>
            <SingleDisplayTab routeName="everyGroups" callback={translation => translation('Display every entity groups')}/>
            <SingleDisplayTab routeName="everyLimits" callback={translation => translation('Display every limits')}/>
            <SingleDisplayTab routeName="everyThemes" callback={translation => translation('Display every themes')}/>
            <SingleDisplayTab routeName="everySoundEffects" callback={translation => translation('Display every sound effects')}/>
            <SingleDisplayTab routeName="everySoundEffectCategories" callback={translation => translation('Display every sound effect categories')}/>
            <SingleDisplayTab routeName="everyMysteryMushrooms" callback={translation => TranslationUtility.replaceAndInterpretTranslation(translation, 'Display every Mystery Mushrooms',
                {pluralName: <span key="everyMysteryMushrooms_pluralName" className="text-decoration-underline">Mystery Mushrooms</span>})}/>{/*TODO add Mystery Mushroom but the plural name*/}
        </ul>
    </li>;
}
