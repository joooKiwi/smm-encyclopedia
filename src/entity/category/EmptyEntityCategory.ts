import {EmptyName}      from '../../lang/name/EmptyName';
import {EntityCategory} from './EntityCategory';

/**
 * @nullObjectPattern
 * @singleton
 */
export class EmptyEntityCategory
    implements EntityCategory {

    static readonly #instance = new EmptyEntityCategory();

    private constructor() {
    }

    public static get get() {
        return this.#instance;
    }


    //region -------------------- Name properties --------------------

    public readonly name = EmptyName.get;


    public readonly languageValue = this.name.languageValue;

    public readonly originalEnglish = this.name.originalEnglish;
    public readonly english = this.name.english;
    public readonly americanEnglish = this.name.americanEnglish;
    public readonly europeanEnglish = this.name.europeanEnglish;

    public readonly originalFrench = this.name.originalFrench;
    public readonly french = this.name.french;
    public readonly canadianFrench = this.name.canadianFrench;
    public readonly europeanFrench = this.name.europeanFrench;

    public readonly german = this.name.german;

    public readonly originalSpanish = this.name.originalSpanish;
    public readonly spanish = this.name.spanish;
    public readonly americanSpanish = this.name.americanSpanish;
    public readonly europeanSpanish = this.name.europeanSpanish;

    public readonly italian = this.name.italian;

    public readonly dutch = this.name.dutch;

    public readonly originalPortuguese = this.name.originalPortuguese;
    public readonly portuguese = this.name.portuguese;
    public readonly americanPortuguese = this.name.americanPortuguese;
    public readonly europeanPortuguese = this.name.europeanPortuguese;

    public readonly russian = this.name.russian;

    public readonly japanese = this.name.japanese;

    public readonly originalChinese = this.name.originalChinese;
    public readonly chinese = this.name.chinese;
    public readonly simplifiedChinese = this.name.simplifiedChinese;
    public readonly traditionalChinese = this.name.traditionalChinese;

    public readonly korean = this.name.korean;

    public readonly individualValues = this.name.individualValues;

    //endregion -------------------- Name properties --------------------

    public toNameMap() {
        return this.name.toNameMap();
    }

    public toString(): 'Empty entity category' {
        return 'Empty entity category';
    }

}
