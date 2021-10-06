import {Popover}                   from 'bootstrap';
import {TFunction, useTranslation} from 'react-i18next';

import type {Name}          from '../../lang/name/Name';
import type {ReactProperty} from '../../util/ReactProperty';

import {EveryLanguages} from '../../lang/EveryLanguages';
import SpanPopover      from '../../bootstrap/popover/SpanPopover';

//region -------------------- SMM2 name component types --------------------

type PopoverOrientation = | 'auto' | 'top' | 'bottom' | 'left' | 'right';

interface SMM2NameProperties
    extends ReactProperty {

    popoverOrientation?: PopoverOrientation

    id: string

    name: Name

}

//endregion -------------------- SMM2 name component types --------------------

export default function SMM2NameComponent({popoverOrientation, id, name,}: SMM2NameProperties,): JSX.Element {
    const {t: languageTranslation,} = useTranslation('language');
    const {t: contentTranslation,} = useTranslation('content');

    const elementId = id + '_' + name.english.toLowerCase().replace(' ', '_');

    return <SpanPopover elementId={elementId} option={createOption(createContent(name, languageTranslation,), popoverOrientation, contentTranslation,)}>
        {EveryLanguages.currentLanguage.get(name)}
    </SpanPopover>;
}

function createContent(name: Name, languageTranslation: TFunction<'language'>,): string {
    const languagesToDisplay = name.originalLanguages.filter(language => !language.isCurrentLanguage);
    let content = '<ol class="m-0">';
    name.toNameMap().forEach((value, language,) => {
        if (languagesToDisplay.includes(language)) {
            content += `<li>${languageTranslation(language.englishName)}: ${value}</li>`;
        }
    });
    content += '</ol>';

    return content;
}

function createOption(content: string, popoverOrientation: | PopoverOrientation | undefined, contentTranslation: TFunction<'content'>,): Partial<Popover.Options> {
    const option: Partial<Popover.Options> = {
        title: contentTranslation('In other languages'),
        content: content,
        html: true,
        trigger: 'hover focus',
    };
    if (popoverOrientation != null)
        option.placement = popoverOrientation;

    return option;
}
