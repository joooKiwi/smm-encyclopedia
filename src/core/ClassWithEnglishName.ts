export interface ClassWithEnglishName<out NAME extends string,
    out NAME_IN_HTML extends string = string, > {

    get englishName(): NAME

    /**
     * Get the english name in a html single instance for a className or an id.
     */
    get englishNameInHtml(): NAME_IN_HTML

}
