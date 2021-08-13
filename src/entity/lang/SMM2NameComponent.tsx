import {Popover}        from 'bootstrap';
import {useTranslation} from 'react-i18next';

import type {Name} from '../../lang/name/Name';

import {EveryLanguages} from '../../lang/EveryLanguages';

interface SMM2NameProperty {

    popoverOrientation?: 'auto' | 'top' | 'bottom' | 'left' | 'right'
    id: string
    name: Name

}

export default function SMM2NameComponent({popoverOrientation, id, name,}: SMM2NameProperty,) {
    const {t: languageTranslation,} = useTranslation('language');
    const {t: contentTranslation,} = useTranslation('content');

    const elementId = id + '_' + name.english.toLowerCase().replace(' ', '_');
    const languagesToDisplay = name.individualValues.filter(language => !language.isCurrentLanguage);
    let content = '<ol>';
    name.toNameMap().forEach((value, language) => {
        if (languagesToDisplay.includes(language)) {
            content += `<li>${languageTranslation(language.englishName)}: ${value}</li>`;
        }
    });
    content += '</ol>';

    setTimeout(() => new Popover(document.getElementById(elementId)!, {
        title: contentTranslation('In other languages'),
        content: content,
        html: true,
        placement: popoverOrientation,
        trigger: 'hover focus',
    }), 1);
    //TODO change to a way without a delay (timeout).

    return <span id={elementId} data-bs-toggle="popover">{EveryLanguages.currentLanguage.get(name)}</span>;
}
