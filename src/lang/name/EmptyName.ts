import {EMPTY_ARRAY, EMPTY_MAP, EMPTY_STRING} from '../../util/emptyVariables';
import {Name}                                 from './Name';

/**
 * @nullObjectPattern
 * @singleton
 */
export class EmptyName
    implements Name {

    private static readonly instance = new EmptyName();

    private constructor() {
    }

    public static get get() {
        return this.instance;
    }


    //region -------------------- Name properties --------------------

    public readonly languageValue = EMPTY_STRING;


    public readonly originalEnglish = EMPTY_STRING;
    public readonly english = EMPTY_STRING;
    public readonly americanEnglish = EMPTY_STRING;
    public readonly europeanEnglish = EMPTY_STRING;

    public readonly german = EMPTY_STRING;

    public readonly originalFrench = EMPTY_STRING;
    public readonly french = EMPTY_STRING;
    public readonly canadianFrench = EMPTY_STRING;
    public readonly europeanFrench = EMPTY_STRING;

    public readonly originalSpanish = EMPTY_STRING;
    public readonly spanish = EMPTY_STRING;
    public readonly americanSpanish = EMPTY_STRING;
    public readonly europeanSpanish = EMPTY_STRING;

    public readonly italian = EMPTY_STRING;

    public readonly dutch = EMPTY_STRING;

    public readonly originalPortuguese = EMPTY_STRING;
    public readonly portuguese = EMPTY_STRING;
    public readonly americanPortuguese = EMPTY_STRING;
    public readonly europeanPortuguese = EMPTY_STRING;

    public readonly russian = EMPTY_STRING;

    public readonly japanese = EMPTY_STRING;

    public readonly originalChinese = EMPTY_STRING;
    public readonly chinese = EMPTY_STRING;
    public readonly simplifiedChinese = EMPTY_STRING;
    public readonly traditionalChinese = EMPTY_STRING;

    public readonly korean = EMPTY_STRING;

    public readonly individualValues = EMPTY_ARRAY;

    //endregion -------------------- Name properties --------------------

    public toNameMap() {
        return EMPTY_MAP;
    }

    public toString(): 'Empty name' {
        return 'Empty name';
    }

}