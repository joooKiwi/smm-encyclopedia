import {Popover}        from 'bootstrap';
import {useEffect}      from 'react';
import {useTranslation} from 'react-i18next';

import type {Name} from '../../lang/name/Name';

import {EveryLanguages} from '../../lang/EveryLanguages';

interface SMM2NameProperty {

    popoverOrientation?: 'auto' | 'top' | 'bottom' | 'left' | 'right'
    id: string
    name: Name

}

export default function SMM2NameComponent({popoverOrientation, id, name,}: SMM2NameProperty,): JSX.Element {
    const {t: languageTranslation,} = useTranslation('language');
    const {t: contentTranslation,} = useTranslation('content');

    const elementId = id + '_' + name.english.toLowerCase().replace(' ', '_');
    const languagesToDisplay = name.individualValues.filter(language => !language.isCurrentLanguage);
    let content = '<ol class="m-0">';
    name.toNameMap().forEach((value, language,) => {
        if (languagesToDisplay.includes(language)) {
            content += `<li>${languageTranslation(language.englishName)}: ${value}</li>`;
        }
    });
    content += '</ol>';

    useEffect(() => {
        const option: Partial<Popover.Options> = {
            title: contentTranslation('In other languages'),
            content: content,
            html: true,
            trigger: 'hover focus',
        };
        if (popoverOrientation != null)
            option.placement = popoverOrientation;
        new Popover(document.getElementById(elementId)!, option,);
    });

    return <span key={elementId} id={elementId} data-bs-toggle="popover">{EveryLanguages.currentLanguage.get(name)}</span>;
}
