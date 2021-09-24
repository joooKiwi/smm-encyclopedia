import {Popover}        from 'bootstrap';
import {useTranslation} from 'react-i18next';

import type {Name} from '../../lang/name/Name';

import {EveryLanguages} from '../../lang/EveryLanguages';
import SpanPopover      from '../../bootstrap/popover/SpanPopover';

interface SMM2NameProperty {

    popoverOrientation?: 'auto' | 'top' | 'bottom' | 'left' | 'right'
    id: string
    name: Name

}

export default function SMM2NameComponent({popoverOrientation, id, name,}: SMM2NameProperty,): JSX.Element {
    const {t: languageTranslation,} = useTranslation('language');
    const {t: contentTranslation,} = useTranslation('content');

    const elementId = id + '_' + name.english.toLowerCase().replace(' ', '_');
    const languagesToDisplay = name.originalLanguages.filter(language => !language.isCurrentLanguage);
    let content = '<ol class="m-0">';
    name.toNameMap().forEach((value, language,) => {
        if (languagesToDisplay.includes(language)) {
            content += `<li>${languageTranslation(language.englishName)}: ${value}</li>`;
        }
    });
    content += '</ol>';

    const option: Partial<Popover.Options> = {
        title: contentTranslation('In other languages'),
        content: content,
        html: true,
        trigger: 'hover focus',
    };
    if (popoverOrientation != null)
        option.placement = popoverOrientation;

    return <SpanPopover elementId={elementId} option={option}>
        {EveryLanguages.currentLanguage.get(name)}
    </SpanPopover>;
}