export class StringContainer<T extends string, T_HTML extends string = string, > {

    /**
     * A regex containing the characters that should be removed direclty
     * <ol>
     *  <li>:</li>
     *  <li>(</li>
     *  <li>)</li>
     *  <li>[</li>
     *  <li>]</li>
     *  <li>-</li>
     *  <li>|</li>
     *  <li>'s</li>
     * </ol>
     */
    static readonly #REMOVAL_REGEX = /[.:()[\]]-|('s)/g

    static readonly #REPLACE_CHARACTERS = new Map([['?', 'question'], ['!', 'exclamation'], ['&', 'and',], ['|', 'or',],] as const)

    static readonly #WORD_SEPARATOR_REGEX = /[ \-\\/]/g

    static readonly #ALREADY_CONVERTED_VALUES = new Map<string, string>()

    readonly #value
    #valueInHtml?: T_HTML

    public constructor(value: T,) {
        this.#value = value
    }

    public get get(): T {
        return this.#value
    }

    public get getInHtml(): T_HTML {
        return this.#valueInHtml ??= StringContainer.getInHtml(this.get) as T_HTML
    }

    /**
     * Convert the value received in an html format string.<br/>
     *
     * Example: <u>anExample-withSomething(weird)&fun</u>
     * will be transformed in <u>anExampleWithSomethingWeirdAndFun</u><br/>
     *
     * It also keeps track of the converted values to not reiterate the same values twice.
     *
     * @param value The value to convert as a proper HTML value.
     */
    public static getInHtml(value: string,): string {
        if (this.#ALREADY_CONVERTED_VALUES.has(value))
            return this.#ALREADY_CONVERTED_VALUES.get(value)!

        const splitValues = value.toLowerCase()
            .replaceAll(this.#REMOVAL_REGEX, '',)
            .split(this.#WORD_SEPARATOR_REGEX)
            .map(stringValue => this.#REPLACE_CHARACTERS.get(stringValue as never) ?? stringValue)
            .map(stringValue => {
                this.#REPLACE_CHARACTERS.forEach((replacementText, characterToReplace,) => {
                    if (stringValue.includes(characterToReplace))
                        stringValue = stringValue.replace(characterToReplace, '')
                })
                return stringValue
            }).flat(2)

        const returnedValue = splitValues.shift() + splitValues.map(stringValue => stringValue.charAt(0).toUpperCase() + stringValue.substring(1)).join('')
        this.#ALREADY_CONVERTED_VALUES.set(value, returnedValue,)
        return returnedValue
    }

}
