import {SMM2Name} from "./SMM2Name";

/**
 * @singleton
 */
export class EmptyName
    implements SMM2Name {

    public static instance = new EmptyName();
    public static readonly EMPTY_STRING = '';

    private constructor() {
    }


    public readonly languageValue = EmptyName.EMPTY_STRING;


    public readonly japanese = EmptyName.EMPTY_STRING;

    public readonly english = EmptyName.EMPTY_STRING;
    public readonly americanEnglish = EmptyName.EMPTY_STRING;
    public readonly europeanEnglish = EmptyName.EMPTY_STRING;

    public readonly spanish = EmptyName.EMPTY_STRING;
    public readonly americanSpanish = EmptyName.EMPTY_STRING;
    public readonly europeanSpanish = EmptyName.EMPTY_STRING;

    public readonly french = EmptyName.EMPTY_STRING;
    public readonly canadianFrench = EmptyName.EMPTY_STRING;
    public readonly europeanFrench = EmptyName.EMPTY_STRING;

    public readonly dutch = EmptyName.EMPTY_STRING;

    public readonly german = EmptyName.EMPTY_STRING;

    public readonly italian = EmptyName.EMPTY_STRING;

    public readonly portuguese = EmptyName.EMPTY_STRING;
    public readonly americanPortuguese = EmptyName.EMPTY_STRING;
    public readonly europeanPortuguese = EmptyName.EMPTY_STRING;

    public readonly russian = EmptyName.EMPTY_STRING;

    public readonly korean = EmptyName.EMPTY_STRING;

    public readonly chinese = EmptyName.EMPTY_STRING;
    public readonly simplifiedChinese = EmptyName.EMPTY_STRING;
    public readonly traditionalChinese = EmptyName.EMPTY_STRING;


    public static get get() {
        return this.instance;
    }

    public toString() {
        return 'Empty name';
    }

}