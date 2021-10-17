import type {ClassWithNullObjectPattern, EmptyNameName} from '../../util/ClassWithNullObjectPattern';
import type {Name}                                      from './Name';

import {EMPTY_ARRAY, EMPTY_MAP, EMPTY_STRING} from '../../util/emptyVariables';

/**
 * @singleton
 */
export class EmptyName
    implements Name, ClassWithNullObjectPattern<EmptyNameName> {

    static #instance?: EmptyName;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }


    //region -------------------- Name properties --------------------

    public readonly languageValue = EMPTY_STRING;

    //region -------------------- English properties --------------------

    public readonly originalEnglish = EMPTY_STRING;
    public readonly english = EMPTY_STRING;
    public readonly americanEnglish = EMPTY_STRING;
    public readonly europeanEnglish = EMPTY_STRING;

    //endregion -------------------- English properties --------------------
    //region -------------------- German properties --------------------

    public readonly german = EMPTY_STRING;

    //endregion -------------------- German properties --------------------
    //region -------------------- French properties --------------------

    public readonly originalFrench = EMPTY_STRING;
    public readonly french = EMPTY_STRING;
    public readonly canadianFrench = EMPTY_STRING;
    public readonly europeanFrench = EMPTY_STRING;

    //endregion -------------------- French properties --------------------
    //region -------------------- Spanish properties --------------------

    public readonly originalSpanish = EMPTY_STRING;
    public readonly spanish = EMPTY_STRING;
    public readonly americanSpanish = EMPTY_STRING;
    public readonly europeanSpanish = EMPTY_STRING;

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    public readonly italian = EMPTY_STRING;

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    public readonly dutch = EMPTY_STRING;

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    public readonly originalPortuguese = EMPTY_STRING;
    public readonly portuguese = EMPTY_STRING;
    public readonly americanPortuguese = EMPTY_STRING;
    public readonly europeanPortuguese = EMPTY_STRING;

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    public readonly russian = EMPTY_STRING;

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    public readonly japanese = EMPTY_STRING;

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    public readonly originalChinese = EMPTY_STRING;
    public readonly chinese = EMPTY_STRING;
    public readonly traditionalChinese = EMPTY_STRING;
    public readonly simplifiedChinese = EMPTY_STRING;

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    public readonly korean = EMPTY_STRING;

    //endregion -------------------- Korean properties --------------------
    //region -------------------- Greek properties --------------------

    public readonly isGreekUsed = false;
    public readonly greek = EMPTY_STRING;

    //endregion -------------------- Greek properties --------------------

    public readonly originalLanguages = EMPTY_ARRAY;

    //endregion -------------------- Name properties --------------------

    public toNameMap() {
        return EMPTY_MAP;
    }

    public toString(): EmptyNameName {
        return 'Empty name';
    }

}