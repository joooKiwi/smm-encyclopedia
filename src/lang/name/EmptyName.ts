import {Name} from './Name';

/**
 * @nullObjectPattern
 * @singleton
 */
export class EmptyName
    implements Name {

    private static readonly instance = new EmptyName();
    public static readonly EMPTY_STRING = '';
    public static readonly EMPTY_MAP = new Map();

    private constructor() {
    }


    public readonly languageValue = EmptyName.EMPTY_STRING;


    public readonly originalEnglish = EmptyName.EMPTY_STRING;
    public readonly english = EmptyName.EMPTY_STRING;
    public readonly americanEnglish = EmptyName.EMPTY_STRING;
    public readonly europeanEnglish = EmptyName.EMPTY_STRING;

    public readonly german = EmptyName.EMPTY_STRING;

    public readonly originalFrench = EmptyName.EMPTY_STRING;
    public readonly french = EmptyName.EMPTY_STRING;
    public readonly canadianFrench = EmptyName.EMPTY_STRING;
    public readonly europeanFrench = EmptyName.EMPTY_STRING;

    public readonly originalSpanish = EmptyName.EMPTY_STRING;
    public readonly spanish = EmptyName.EMPTY_STRING;
    public readonly americanSpanish = EmptyName.EMPTY_STRING;
    public readonly europeanSpanish = EmptyName.EMPTY_STRING;

    public readonly italian = EmptyName.EMPTY_STRING;

    public readonly dutch = EmptyName.EMPTY_STRING;

    public readonly originalPortuguese = EmptyName.EMPTY_STRING;
    public readonly portuguese = EmptyName.EMPTY_STRING;
    public readonly americanPortuguese = EmptyName.EMPTY_STRING;
    public readonly europeanPortuguese = EmptyName.EMPTY_STRING;

    public readonly russian = EmptyName.EMPTY_STRING;

    public readonly japanese = EmptyName.EMPTY_STRING;

    public readonly originalChinese = EmptyName.EMPTY_STRING;
    public readonly chinese = EmptyName.EMPTY_STRING;
    public readonly simplifiedChinese = EmptyName.EMPTY_STRING;
    public readonly traditionalChinese = EmptyName.EMPTY_STRING;

    public readonly korean = EmptyName.EMPTY_STRING;


    public static get get() {
        return this.instance;
    }

    public toNameMap() {
        return EmptyName.EMPTY_MAP;
    }

    public toString(): 'Empty name' {
        return 'Empty name';
    }

}