export class StringContainer<T extends string, T_HTML extends string = string, > {

    public static readonly REMOVAL_REGEX = /[.:()[\]]|('s)/g;

    public static readonly REPLACE_CHARACTERS = new Map([['?', 'questionMark'], ['!', 'exclamationMark'], ['&', 'and',]] as const);

    public static readonly WORD_SEPARATOR_REGEX = /[ \-\\/]/g;

    readonly #value;
    #valueInHtml?: T_HTML;

    public constructor(value: T,) {
        this.#value = value;
    }

    public get get(): T {
        return this.#value;
    }

    public get getInHtml(): T_HTML {
        return this.#valueInHtml ??= StringContainer.getInHtml(this.get) as T_HTML;
    }

    public static getInHtml(value: string,): string {
        const splitValues = value.toLowerCase().replaceAll(this.REMOVAL_REGEX, '',).split(this.WORD_SEPARATOR_REGEX).map(stringValue =>
            this.REPLACE_CHARACTERS.has(stringValue as never) ? this.REPLACE_CHARACTERS.get(stringValue as never)! : stringValue);

        return splitValues.shift() + splitValues.map(stringValue => stringValue.charAt(0).toUpperCase() + stringValue.substring(1)).join('');
    }

}
