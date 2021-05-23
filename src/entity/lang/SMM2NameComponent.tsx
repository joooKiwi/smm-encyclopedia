import {Popover}         from 'bootstrap';
import {withTranslation} from 'react-i18next';

import {ContentAndLanguageTranslationComponent} from '../../lang/components/ContentAndLanguageTranslationComponent';
import {ContentAndLanguageTranslationElement}   from '../../lang/components/elements/ContentAndLanguageTranslationElement';
import {EveryLanguages}                         from '../../lang/EveryLanguages';
import {Name}                                   from '../../lang/name/Name';

interface SMM2NameProperty
    extends ContentAndLanguageTranslationElement {
    popoverOrientation?: 'auto' | 'top' | 'bottom' | 'left' | 'right'
    id: string
    name: Name
}

class SMM2NameComponent
    extends ContentAndLanguageTranslationComponent<SMM2NameProperty> {

    private get id() {
        return this.props.id;
    }

    private get popoverOrientation() {
        return this.props.popoverOrientation;
    }

    private get name() {
        return this.props.name;
    }

    private get languagesToDisplay(): readonly EveryLanguages[] {
        const returnedLanguages = [] as EveryLanguages[];

        if (!EveryLanguages.ENGLISH.isCurrentLanguage)
            returnedLanguages.push(...(typeof EveryLanguages.ENGLISH.original(this.name) === 'string' ? [EveryLanguages.ENGLISH] : [EveryLanguages.AMERICAN_ENGLISH, EveryLanguages.EUROPEAN_ENGLISH]));
        if (!EveryLanguages.FRENCH.isCurrentLanguage)
            returnedLanguages.push(...(typeof EveryLanguages.FRENCH.original(this.name) === 'string' ? [EveryLanguages.FRENCH] : [EveryLanguages.CANADIAN_FRENCH, EveryLanguages.EUROPEAN_FRENCH]));
        if (!EveryLanguages.GERMAN.isCurrentLanguage)
            returnedLanguages.push(EveryLanguages.GERMAN);
        if (!EveryLanguages.SPANISH.isCurrentLanguage)
            returnedLanguages.push(...(typeof EveryLanguages.SPANISH.original(this.name) === 'string' ? [EveryLanguages.SPANISH] : [EveryLanguages.AMERICAN_SPANISH, EveryLanguages.EUROPEAN_SPANISH]));
        if (!EveryLanguages.ITALIAN.isCurrentLanguage)
            returnedLanguages.push(EveryLanguages.ITALIAN);
        if (!EveryLanguages.DUTCH.isCurrentLanguage)
            returnedLanguages.push(EveryLanguages.DUTCH);
        if (!EveryLanguages.PORTUGUESE.isCurrentLanguage)
            returnedLanguages.push(...(typeof EveryLanguages.PORTUGUESE.original(this.name) === 'string' ? [EveryLanguages.PORTUGUESE] : [EveryLanguages.AMERICAN_PORTUGUESE, EveryLanguages.EUROPEAN_PORTUGUESE]));
        if (!EveryLanguages.RUSSIAN.isCurrentLanguage)
            returnedLanguages.push(EveryLanguages.RUSSIAN);
        if (!EveryLanguages.JAPANESE.isCurrentLanguage)
            returnedLanguages.push(EveryLanguages.JAPANESE);
        if (!EveryLanguages.CHINESE.isCurrentLanguage)
            returnedLanguages.push(...(typeof EveryLanguages.CHINESE.original(this.name) === 'string' ? [EveryLanguages.CHINESE] : [EveryLanguages.CHINESE_SIMPLIFIED, EveryLanguages.CHINESE_TRADITIONAL]));
        if (!EveryLanguages.KOREAN.isCurrentLanguage)
            returnedLanguages.push(EveryLanguages.KOREAN);

        return returnedLanguages;
    }

    public render(): JSX.Element {
        const id = this.id + '_' + this.name.english.toLowerCase().replace(' ', '_');
        const languagesToDisplay = this.languagesToDisplay;
        let content = '<ol>';
        this.name.toNameMap().forEach((value, language) => {
            if (languagesToDisplay.includes(language)) {
                content += `<li>${this.languageTranslation(language.englishName)}: ${value}</li>`;
            }
        });
        content += '</ol>';

        setTimeout(() => new Popover(document.getElementById(id)!, {
            title: this.contentTranslation('In other languages'),
            content: content,
            html: true,
            placement: this.popoverOrientation,
            trigger: 'hover focus',
        }), 1);
        //TODO change to a way without a delay (timeout).
        return <span id={id} data-bs-toggle="popover">{EveryLanguages.currentLanguage.get(this.name)}</span>;
    }

}

export default withTranslation(['content', 'language',])(SMM2NameComponent);
