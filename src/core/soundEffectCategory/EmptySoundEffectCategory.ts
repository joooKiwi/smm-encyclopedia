import type {ClassWithNullObjectPattern, EmptySoundEffectCategoryName} from '../../util/ClassWithNullObjectPattern';
import type {SoundEffectCategory}                                      from './SoundEffectCategory';

import {EmptyName} from '../../lang/name/EmptyName';

/**
 * @singleton
 */
export class EmptySoundEffectCategory
    implements SoundEffectCategory, ClassWithNullObjectPattern<EmptySoundEffectCategoryName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptySoundEffectCategory;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Name properties --------------------

    public readonly nameContainer = EmptyName.get;

    public readonly languageValue = this.nameContainer.languageValue;

    public readonly originalEnglish = this.nameContainer.originalEnglish;
    public readonly english = this.nameContainer.english;
    public readonly americanEnglish = this.nameContainer.americanEnglish;
    public readonly europeanEnglish = this.nameContainer.europeanEnglish;

    public readonly originalFrench = this.nameContainer.originalFrench;
    public readonly french = this.nameContainer.french;
    public readonly canadianFrench = this.nameContainer.canadianFrench;
    public readonly europeanFrench = this.nameContainer.europeanFrench;

    public readonly german = this.nameContainer.german;

    public readonly originalSpanish = this.nameContainer.originalSpanish;
    public readonly spanish = this.nameContainer.spanish;
    public readonly americanSpanish = this.nameContainer.americanSpanish;
    public readonly europeanSpanish = this.nameContainer.europeanSpanish;

    public readonly italian = this.nameContainer.italian;

    public readonly dutch = this.nameContainer.dutch;

    public readonly originalPortuguese = this.nameContainer.originalPortuguese;
    public readonly portuguese = this.nameContainer.portuguese;
    public readonly americanPortuguese = this.nameContainer.americanPortuguese;
    public readonly europeanPortuguese = this.nameContainer.europeanPortuguese;

    public readonly russian = this.nameContainer.russian;

    public readonly japanese = this.nameContainer.japanese;

    public readonly originalChinese = this.nameContainer.originalChinese;
    public readonly chinese = this.nameContainer.chinese;
    public readonly traditionalChinese = this.nameContainer.traditionalChinese;
    public readonly simplifiedChinese = this.nameContainer.simplifiedChinese;

    public readonly korean = this.nameContainer.korean;

    public readonly isGreekUsed = this.nameContainer.isGreekUsed;
    public readonly greek = this.nameContainer.greek;

    public readonly originalLanguages = this.nameContainer.originalLanguages;

    //endregion -------------------- Name properties --------------------

    public toNameMap() {
        return this.nameContainer.toNameMap();
    }

    public toString(): EmptySoundEffectCategoryName {
        return 'Empty sound effect category';
    }

}