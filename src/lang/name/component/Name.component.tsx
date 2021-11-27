import {Popover}        from 'bootstrap';
import {useTranslation} from 'react-i18next';

import type {ContentNamespace, LanguageNamespace, TranslationMethod} from '../../components/TranslationProperty';
import type {Name}                                                   from '../Name';
import type {NameProperties, PopoverOrientation}                     from './Name.properties';

import {EveryLanguages}  from '../../EveryLanguages';
import SpanPopover       from '../../../bootstrap/popover/SpanPopover';
import {StringContainer} from '../../../entity/StringContainer';

/**
 * A name component used to render the current language in text format
 * and the other languages (excluding the current one) in a simple table format.
 *
 * @param properties
 * @reactComponent
 * @see Name.toNameMap
 * @see EveryLanguages.currentLanguage
 */
export default function NameComponent({popoverOrientation, id, name, ...otherProperties}: NameProperties,) {
    const {t: languageTranslation,} = useTranslation('language');
    const {t: contentTranslation,} = useTranslation('content');

    const elementId = `${id}-${StringContainer.getInHtml(name.english)}`;

    return <SpanPopover elementId={elementId} option={createOption(createContent(elementId, name, languageTranslation,), popoverOrientation, contentTranslation,)} {...otherProperties}>
        {EveryLanguages.currentLanguage.get(name)}
    </SpanPopover>;
}

function createContent(elementId: string, name: Name, languageTranslation: TranslationMethod<LanguageNamespace>,): string {
    const languagesToDisplay = name.originalLanguages.filter(language => !language.isCurrentLanguage);


    let content = `<table id="${elementId}-table" class="table table-striped"><tbody>`;
    name.toNameMap().forEach((value, language,) => {
        if (languagesToDisplay.includes(language)) {
            content += `<tr><th>${languageTranslation(language.englishName)}</th><td>${value}</td></tr>`;
        }
    });
    content += `</tbody></table>`;

    return content;
}

function createOption(content: string, popoverOrientation: | PopoverOrientation | undefined, contentTranslation: TranslationMethod<ContentNamespace>,): Partial<Popover.Options> {
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
