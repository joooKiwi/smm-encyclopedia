import {Popover}        from 'bootstrap';
import {useTranslation} from 'react-i18next';

import {Name}           from '../../lang/name/Name';
import {EveryLanguages} from '../../lang/EveryLanguages';

interface SMM2NameProperty {
    popoverOrientation?: 'auto' | 'top' | 'bottom' | 'left' | 'right'
    id: string
    name: Name
}

export function SMM2NameComponent(props: SMM2NameProperty) {
    const language_t = useTranslation('language').t;
    const content_t = useTranslation('content').t;

    const {name, popoverOrientation} = props;
    const id = props.id + '_' + name.english.toLowerCase().replace(' ', '_');
    const languagesToDisplay = getLanguagesToSetTheList(name);
    let content = '<ol>';
    name.toNameMap().forEach((value, language) => {
        if (languagesToDisplay.includes(language)) {
            content += `<li>${language_t(language.englishName)}: ${value}</li>`;
        }
    });
    content += '</ol>';

    setTimeout(() => new Popover(document.getElementById(id)!, {
        title: content_t('In other languages'),
        content: content,
        html: true,
        placement: popoverOrientation,
        trigger: 'hover focus',
    }), 1);
    //TODO change to a way without a delay (timeout).
    return <span id={id} data-bs-toggle="popover">{EveryLanguages.currentLanguage.get(name)}</span>;
}

function getLanguagesToSetTheList(name: Name): readonly EveryLanguages[] {
    const returnedLanguages = [] as EveryLanguages[];

    if (!EveryLanguages.ENGLISH.isCurrentLanguage)
        returnedLanguages.push(...(typeof EveryLanguages.ENGLISH.original(name) === 'string' ? [EveryLanguages.ENGLISH] : [EveryLanguages.AMERICAN_ENGLISH, EveryLanguages.EUROPEAN_ENGLISH]));
    if (!EveryLanguages.FRENCH.isCurrentLanguage)
        returnedLanguages.push(...(typeof EveryLanguages.FRENCH.original(name) === 'string' ? [EveryLanguages.FRENCH] : [EveryLanguages.CANADIAN_FRENCH, EveryLanguages.EUROPEAN_FRENCH]));
    if (!EveryLanguages.GERMAN.isCurrentLanguage)
        returnedLanguages.push(EveryLanguages.GERMAN);
    if (!EveryLanguages.SPANISH.isCurrentLanguage)
        returnedLanguages.push(...(typeof EveryLanguages.SPANISH.original(name) === 'string' ? [EveryLanguages.SPANISH] : [EveryLanguages.AMERICAN_SPANISH, EveryLanguages.EUROPEAN_SPANISH]));
    if (!EveryLanguages.ITALIAN.isCurrentLanguage)
        returnedLanguages.push(EveryLanguages.ITALIAN);
    if (!EveryLanguages.DUTCH.isCurrentLanguage)
        returnedLanguages.push(EveryLanguages.DUTCH);
    if (!EveryLanguages.PORTUGUESE.isCurrentLanguage)
        returnedLanguages.push(...(typeof EveryLanguages.PORTUGUESE.original(name) === 'string' ? [EveryLanguages.PORTUGUESE] : [EveryLanguages.AMERICAN_PORTUGUESE, EveryLanguages.EUROPEAN_PORTUGUESE]));
    if (!EveryLanguages.RUSSIAN.isCurrentLanguage)
        returnedLanguages.push(EveryLanguages.RUSSIAN);
    if (!EveryLanguages.JAPANESE.isCurrentLanguage)
        returnedLanguages.push(EveryLanguages.JAPANESE);
    if (!EveryLanguages.CHINESE.isCurrentLanguage)
        returnedLanguages.push(...(typeof EveryLanguages.CHINESE.original(name) === 'string' ? [EveryLanguages.CHINESE] : [EveryLanguages.CHINESE_SIMPLIFIED, EveryLanguages.CHINESE_TRADITIONAL]));
    if (!EveryLanguages.KOREAN.isCurrentLanguage)
        returnedLanguages.push(EveryLanguages.KOREAN);

    return returnedLanguages;
}