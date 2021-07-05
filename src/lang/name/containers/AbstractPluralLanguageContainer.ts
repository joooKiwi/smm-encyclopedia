import type {PluralLanguage} from './PluralLanguage';

import {SimpleLanguageContainer} from './SimpleLanguageContainer';

export abstract class AbstractPluralLanguageContainer<T extends string>
    extends SimpleLanguageContainer
    implements PluralLanguage<T> {

    public static readonly DEFAULT_NULL_LANGUAGE = 'N/A';

    #values?: Map<T, string>;

    protected constructor(values: string | readonly [T, string,][]) {
        super(values instanceof Array ? AbstractPluralLanguageContainer.DEFAULT_NULL_LANGUAGE : values);
        if (values instanceof Array)
            this.#values = new Map<T, string>(values);
    }


    protected get values(): Map<T, string> {
        return this.#values ?? (this.#values = new Map());
    }

    public get(language: T): string {
        return this.value === AbstractPluralLanguageContainer.DEFAULT_NULL_LANGUAGE
            ? this.values.get(language)!
            : this.value;

    }

}