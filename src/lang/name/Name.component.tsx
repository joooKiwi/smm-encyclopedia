import type {TFunction} from 'react-i18next';
import {Popover}        from 'bootstrap';
import {useTranslation} from 'react-i18next';

import type {Name}                                from './Name';
import type {ReactProperty}                       from '../../util/react/ReactProperty';
import type {ContentNamespace, LanguageNamespace} from '../components/TranslationProperty';

import {EveryLanguages} from '../EveryLanguages';
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

/**
 *
 * @param properties
 * @reactComponent
 */
export default function NameComponent({popoverOrientation, id, name,}: SMM2NameProperties,) {
    const {t: languageTranslation,} = useTranslation('language');
    const {t: contentTranslation,} = useTranslation('content');

    const elementId = id + '_' + name.english.toLowerCase().replace(' ', '_');

    return <SpanPopover elementId={elementId} option={createOption(createContent(elementId, name, languageTranslation,), popoverOrientation, contentTranslation,)}>
        {EveryLanguages.currentLanguage.get(name)}
    </SpanPopover>;
}

function createContent(elementId: string, name: Name, languageTranslation: TFunction<LanguageNamespace>,): string {
    const languagesToDisplay = name.originalLanguages.filter(language => !language.isCurrentLanguage);


    let content = `<table id="${elementId}_table" class="table table-striped"><tbody>`;
    name.toNameMap().forEach((value, language,) => {
        if (languagesToDisplay.includes(language)) {
            content += `<tr><th>${languageTranslation(language.englishName)}</th><td>${value}</td></tr>`;
        }
    });
    content += `</tbody></table>`;

    return content;
}

function createOption(content: string, popoverOrientation: | PopoverOrientation | undefined, contentTranslation: TFunction<ContentNamespace>,): Partial<Popover.Options> {
    const option: Partial<Popover.Options> = {
        title: contentTranslation('In other languages'),
        content: content,
        html: true,
        trigger: 'hover focus',
        sanitize: false,/*README the sanitize option is disabled since it could not load the table properly*/
    };
    if (popoverOrientation != null)
        option.placement = popoverOrientation;

    return option;
}
