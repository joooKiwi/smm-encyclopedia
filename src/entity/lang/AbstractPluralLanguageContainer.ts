import {PluralLanguage} from "./PluralLanguage";
import {SimpleLanguageContainer} from "./SimpleLanguageContainer";

export abstract class AbstractPluralLanguageContainer<T extends string>
    extends SimpleLanguageContainer
    implements PluralLanguage<T> {

    public static DEFAULT_NULL_LANGUAGE = 'N/A';

    readonly #values?;

    protected constructor(value: string)
    protected constructor(...values: readonly [T, string][])
    protected constructor(values: string | readonly [T, string][]) {
        super(values instanceof Array ? AbstractPluralLanguageContainer.DEFAULT_NULL_LANGUAGE : values);
        if (values instanceof Array)
            this.#values = new Map<T, string>(values);
    }


    protected get values(): Map<T, string> {
        return this.#values ?? new Map();
    }

    public get(language: T): string {
        return this.values.get(language) ?? (this.values.set(language, AbstractPluralLanguageContainer.DEFAULT_NULL_LANGUAGE).get(language)!);
    }

}