import {SMM2Name} from "./SMM2Name";
import {SMM2NameTemplate} from "./SMM2NameTemplate";
import {SMM2NameContainer} from "./SMM2NameContainer";
import {Builder} from "../../util/Builder";

export class SMM2NameBuilder
    implements Builder<SMM2Name> {
    readonly #template;

    public constructor(template: SMM2NameTemplate) {
        this.#template = template;
    }

    public get template() {
        return this.#template;
    }

    public build() {
        const temporaryVariableToAvoidError = 'temp';
        const englishReference = this.template.english.simple ?? [this.template.english.american ?? temporaryVariableToAvoidError, this.template.english.european ?? temporaryVariableToAvoidError] as string | [string, string];
        const frenchReference = this.template.french.simple ?? [this.template.french.canadian ?? temporaryVariableToAvoidError, this.template.french.european ?? temporaryVariableToAvoidError] as string | [string, string];
        const germanReference = this.template.german ?? temporaryVariableToAvoidError as string;
        const spanishReference = this.template.spanish.simple ?? [this.template.spanish.american ?? temporaryVariableToAvoidError, this.template.spanish.european ?? temporaryVariableToAvoidError] as string | [string, string];
        const italianReference = this.template.italian ?? temporaryVariableToAvoidError as string;
        const dutchReference = this.template.dutch ?? temporaryVariableToAvoidError as string;
        const portugueseReference = this.template.portuguese.simple ?? [this.template.portuguese.american ?? temporaryVariableToAvoidError, this.template.portuguese.european ?? temporaryVariableToAvoidError] as string | [string, string];
        const russianReference = this.template.russian ?? temporaryVariableToAvoidError as string;
        const japaneseReference = this.template.japanese ?? temporaryVariableToAvoidError as string;
        const chineseReference = this.template.chinese.simple ?? [this.template.chinese.simplified ?? temporaryVariableToAvoidError, this.template.chinese.traditional ?? temporaryVariableToAvoidError] as string | [string, string];
        const koreanReference = this.template.korean ?? temporaryVariableToAvoidError as string;

        return new SMM2NameContainer(englishReference, frenchReference, germanReference, spanishReference, italianReference, dutchReference, portugueseReference, russianReference, japaneseReference, chineseReference, koreanReference,);
    }

}
