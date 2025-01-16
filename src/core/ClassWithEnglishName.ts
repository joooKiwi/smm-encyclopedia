export interface ClassWithEnglishName<out NAME extends string,
    out NAME_IN_HTML extends string = string, > {

    readonly englishName: NAME

    /** Get the english name in a html single instance for a className or an id */
    readonly englishNameInHtml: NAME_IN_HTML

}
