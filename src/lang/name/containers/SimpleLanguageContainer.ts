import {SimpleLanguage} from "./SimpleLanguage";

export class SimpleLanguageContainer
    implements SimpleLanguage {

    readonly #value;

    public constructor(value: string) {
        this.#value = value;
    }


    public get value() {
        return this.#value;
    }

}