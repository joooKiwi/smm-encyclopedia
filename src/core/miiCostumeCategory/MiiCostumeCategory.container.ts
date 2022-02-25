import type {Name}               from '../../lang/name/Name';
import type {MiiCostumeCategory} from './MiiCostumeCategory';

export class MiiCostumeCategoryContainer
    implements MiiCostumeCategory {

    //region -------------------- Attributes --------------------

    readonly #nameContainer;

    //endregion -------------------- Attributes --------------------

    public constructor(name: Name<string>,) {
        this.#nameContainer = name;
    }

    //region -------------------- Name properties --------------------

    public get nameContainer(): Name<string> {
        return this.#nameContainer;
    }


    public get languageValue(): this['nameContainer']['languageValue'] {
        return this.nameContainer.languageValue;
    }


    public get originalEnglish(): this['nameContainer']['originalEnglish'] {
        return this.nameContainer.originalEnglish;
    }

    public get english(): this['nameContainer']['english'] {
        return this.nameContainer.english;
    }

    public get americanEnglish(): this['nameContainer']['americanEnglish'] {
        return this.nameContainer.americanEnglish;
    }

    public get europeanEnglish(): this['nameContainer']['europeanEnglish'] {
        return this.nameContainer.europeanEnglish;
    }


    public get originalFrench(): this['nameContainer']['originalFrench'] {
        return this.nameContainer.originalFrench;
    }

    public get french(): this['nameContainer']['french'] {
        return this.nameContainer.french;
    }

    public get canadianFrench(): this['nameContainer']['canadianFrench'] {
        return this.nameContainer.canadianFrench;
    }

    public get europeanFrench(): this['nameContainer']['europeanFrench'] {
        return this.nameContainer.europeanFrench;
    }


    public get german(): this['nameContainer']['german'] {
        return this.nameContainer.german;
    }


    public get originalSpanish(): this['nameContainer']['originalSpanish'] {
        return this.nameContainer.originalSpanish;
    }

    public get spanish(): this['nameContainer']['spanish'] {
        return this.nameContainer.spanish;
    }

    public get americanSpanish(): this['nameContainer']['americanSpanish'] {
        return this.nameContainer.americanSpanish;
    }

    public get europeanSpanish(): this['nameContainer']['europeanSpanish'] {
        return this.nameContainer.europeanSpanish;
    }


    public get italian(): this['nameContainer']['italian'] {
        return this.nameContainer.italian;
    }


    public get dutch(): this['nameContainer']['dutch'] {
        return this.nameContainer.dutch;
    }


    public get originalPortuguese(): this['nameContainer']['originalPortuguese'] {
        return this.nameContainer.originalPortuguese;
    }

    public get portuguese(): this['nameContainer']['portuguese'] {
        return this.nameContainer.portuguese;
    }

    public get americanPortuguese(): this['nameContainer']['americanPortuguese'] {
        return this.nameContainer.americanPortuguese;
    }

    public get europeanPortuguese(): this['nameContainer']['europeanPortuguese'] {
        return this.nameContainer.europeanPortuguese;
    }


    public get russian(): this['nameContainer']['russian'] {
        return this.nameContainer.russian;
    }


    public get japanese(): this['nameContainer']['japanese'] {
        return this.nameContainer.japanese;
    }


    public get originalChinese(): this['nameContainer']['originalChinese'] {
        return this.nameContainer.originalChinese;
    }

    public get chinese(): this['nameContainer']['chinese'] {
        return this.nameContainer.chinese;
    }

    public get traditionalChinese(): this['nameContainer']['traditionalChinese'] {
        return this.nameContainer.traditionalChinese;
    }

    public get simplifiedChinese(): this['nameContainer']['simplifiedChinese'] {
        return this.nameContainer.simplifiedChinese;
    }


    public get korean(): this['nameContainer']['korean'] {
        return this.nameContainer.korean;
    }


    public get isGreekUsed(): this['nameContainer']['isGreekUsed'] {
        return this.nameContainer.isGreekUsed;
    }

    public get greek(): this['nameContainer']['greek'] {
        return this.nameContainer.greek;
    }


    public get originalLanguages(): this['nameContainer']['originalLanguages'] {
        return this.nameContainer.originalLanguages;
    }

    //endregion -------------------- Name properties --------------------

    public toNameMap() {
        return this.nameContainer.toNameMap();
    }

}
