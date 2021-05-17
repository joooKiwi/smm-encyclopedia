import {SMM2Name}       from './SMM2Name';
import {useTranslation} from 'react-i18next';
import {Popover}        from 'bootstrap';
import {SMM2Languages}  from './SMM2Languages';

interface SMM2NameProperty {
    popoverOrientation?: 'auto' | 'top' | 'bottom' | 'left' | 'right'
    id: string
    name: SMM2Name
}

export function SMM2NameComponent(props: SMM2NameProperty) {
    const language_t = useTranslation('language').t;
    const content_t = useTranslation('content').t;

    const {name, popoverOrientation} = props;
    const id = props.id + name.english.toLowerCase().replace(' ', '_');
    const nameMap = name.toNameMap();
    const languagesToDisplay = getLanguagesToSetTheList(name);
    console.log(languagesToDisplay.map(language => language.englishName));
    let content = '<ol>';
    nameMap.forEach((value, language) => {
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
    return <span id={id} data-bs-toggle="popover">{SMM2Languages.currentLanguage.get(name)}</span>;
}

function getLanguagesToSetTheList(name: SMM2Name): readonly SMM2Languages[] {
    const currentLanguage = SMM2Languages.currentLanguage;
    const returnedLanguages = [] as SMM2Languages[];
    if (!SMM2Languages.ENGLISH.isCurrentLanguage)
        returnedLanguages.push(...(typeof SMM2Languages.ENGLISH.original(name) === 'string' ? [SMM2Languages.ENGLISH] : [SMM2Languages.AMERICAN_ENGLISH, SMM2Languages.EUROPEAN_ENGLISH]));
    if (!SMM2Languages.FRENCH.isCurrentLanguage)
        returnedLanguages.push(...(typeof SMM2Languages.FRENCH.original(name) === 'string' ? [SMM2Languages.FRENCH] : [SMM2Languages.CANADIAN_FRENCH, SMM2Languages.EUROPEAN_FRENCH]));
    if (!SMM2Languages.GERMAN.isCurrentLanguage)
        returnedLanguages.push(SMM2Languages.GERMAN);
    if (!SMM2Languages.SPANISH.isCurrentLanguage)
        returnedLanguages.push(...(typeof SMM2Languages.SPANISH.original(name) === 'string' ? [SMM2Languages.SPANISH] : [SMM2Languages.AMERICAN_SPANISH, SMM2Languages.EUROPEAN_SPANISH]));
    if (!SMM2Languages.ITALIAN.isCurrentLanguage)
        returnedLanguages.push(SMM2Languages.ITALIAN);
    if (!SMM2Languages.DUTCH.isCurrentLanguage)
        returnedLanguages.push(SMM2Languages.DUTCH);
    if (!(currentLanguage === SMM2Languages.AMERICAN_PORTUGUESE || currentLanguage === SMM2Languages.EUROPEAN_PORTUGUESE))
        returnedLanguages.push(...(typeof SMM2Languages.PORTUGUESE.original(name) === 'string' ? [SMM2Languages.PORTUGUESE] : [SMM2Languages.AMERICAN_PORTUGUESE, SMM2Languages.EUROPEAN_PORTUGUESE]));
    if (!SMM2Languages.RUSSIAN.isCurrentLanguage)
        returnedLanguages.push(SMM2Languages.RUSSIAN);
    if (!SMM2Languages.JAPANESE.isCurrentLanguage)
        returnedLanguages.push(SMM2Languages.JAPANESE);
    if (!SMM2Languages.CHINESE.isCurrentLanguage)
        returnedLanguages.push(...(typeof SMM2Languages.CHINESE.original(name) === 'string' ? [SMM2Languages.CHINESE] : [SMM2Languages.CHINESE_SIMPLIFIED, SMM2Languages.CHINESE_TRADITIONAL]));
    if (!SMM2Languages.KOREAN.isCurrentLanguage)
        returnedLanguages.push(SMM2Languages.KOREAN);

    // SMM2Languages.values
    //     .filter(language => !(language === SMM2Languages.AMERICAN_ENGLISH || language === SMM2Languages.EUROPEAN_ENGLISH))
    //     .filter(language => !(language === SMM2Languages.CANADIAN_FRENCH || language === SMM2Languages.EUROPEAN_FRENCH))
    //     .filter(language => !(language === SMM2Languages.AMERICAN_SPANISH || language === SMM2Languages.EUROPEAN_SPANISH))
    //     .filter(language => !(language === SMM2Languages.AMERICAN_PORTUGUESE || language === SMM2Languages.EUROPEAN_PORTUGUESE))
    //     .filter(language => !(language === SMM2Languages.CHINESE_SIMPLIFIED || language === SMM2Languages.CHINESE_TRADITIONAL))
    //     .filter(language => !language.isCurrentLanguageOrAssociatedWithIt);

    return returnedLanguages;
}