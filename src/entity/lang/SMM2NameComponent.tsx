import {Popover}         from 'bootstrap';
import {withTranslation} from 'react-i18next';

import ContentAndLanguageTranslationComponent from '../../lang/components/ContentAndLanguageTranslationComponent';
import {ContentAndLanguageTranslationElement} from '../../lang/components/elements/ContentAndLanguageTranslationElement';
import {EveryLanguages}                       from '../../lang/EveryLanguages';
import {Name}                                 from '../../lang/name/Name';

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

    private get languagesToDisplay() {
        return this.name.individualValues.filter(language => !language.isCurrentLanguage);
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
