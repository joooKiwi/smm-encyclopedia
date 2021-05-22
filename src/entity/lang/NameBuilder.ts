import {Builder}                            from '../../util/Builder';
import {SMM2NameTemplate}                   from './SMM2NameTemplate';
import {Name}                               from '../../lang/name/Name';
import {NameBuilder as OriginalNameBuilder} from '../../lang/name/NameBuilder';

export class NameBuilder
    implements Builder<Name> {
    readonly #template;

    public constructor(template: SMM2NameTemplate) {
        this.#template = template;
    }

    public get template() {
        return this.#template;
    }

    public build() {
        const temporaryVariableToAvoidError = 'temp';

        return new OriginalNameBuilder()
            .setEnglish(this.template.english.simple ?? [this.template.english.american ?? temporaryVariableToAvoidError, this.template.english.european ?? temporaryVariableToAvoidError] as string | [string, string])
            .setFrench(this.template.french.simple ?? [this.template.french.canadian ?? temporaryVariableToAvoidError, this.template.french.european ?? temporaryVariableToAvoidError] as string | [string, string])
            .setGerman(this.template.german ?? temporaryVariableToAvoidError)
            .setSpanish(this.template.spanish.simple ?? [this.template.spanish.american ?? temporaryVariableToAvoidError, this.template.spanish.european ?? temporaryVariableToAvoidError] as string | [string, string])
            .setItalian(this.template.italian ?? temporaryVariableToAvoidError)
            .setDutch(this.template.dutch ?? temporaryVariableToAvoidError)
            .setPortuguese(this.template.portuguese.simple ?? [this.template.portuguese.american ?? temporaryVariableToAvoidError, this.template.portuguese.european ?? temporaryVariableToAvoidError] as string | [string, string])
            .setRussian(this.template.russian ?? temporaryVariableToAvoidError)
            .setJapanese(this.template.japanese ?? temporaryVariableToAvoidError)
            .setChinese(this.template.chinese.simple ?? [this.template.chinese.simplified ?? temporaryVariableToAvoidError, this.template.chinese.traditional ?? temporaryVariableToAvoidError] as string | [string, string])
            .setKorean(this.template.korean ?? temporaryVariableToAvoidError)
            .build();
    }

}
