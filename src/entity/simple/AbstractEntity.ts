import {Entity} from "./Entity";
import {SMM2Name} from "../lang/SMM2Name";
import {IsInProperty} from "../properties/IsInProperty";
import {EntityReferences} from "../properties/EntityReferences";

export abstract class AbstractEntity
    implements Entity {

    readonly #name;
    readonly #isInProperty;
    readonly #references;

    protected constructor(name: SMM2Name, isInProperty: IsInProperty, references: EntityReferences,) {
        this.#name = name;
        this.#isInProperty = isInProperty;
        this.#references = references;
    }


    //region -------------------- Name properties --------------------

    public get name() {
        return this.#name;
    }


    public get languageValue() {
        return this.name.languageValue;
    }


    public get japanese() {
        return this.name.japanese;
    }


    public get english() {
        return this.name.english;
    }

    public get americanEnglish() {
        return this.name.americanEnglish;
    }

    public get europeanEnglish() {
        return this.name.europeanEnglish;
    }


    public get spanish() {
        return this.name.spanish;
    }

    public get americanSpanish() {
        return this.name.americanSpanish;
    }

    public get europeanSpanish() {
        return this.name.europeanSpanish;
    }


    public get french() {
        return this.name.french;
    }

    public get canadianFrench() {
        return this.name.canadianFrench;
    }

    public get europeanFrench() {
        return this.name.europeanFrench;
    }


    public get dutch() {
        return this.name.dutch;
    }


    public get german() {
        return this.name.german;
    }


    public get italian() {
        return this.name.italian;
    }


    public get russian() {
        return this.name.russian;
    }


    public get korean() {
        return this.name.korean;
    }


    public get chinese() {
        return this.name.chinese;
    }

    public get simplifiedChinese() {
        return this.name.simplifiedChinese;
    }

    public get traditionalChinese() {
        return this.name.traditionalChinese;
    }

    //endregion -------------------- Name properties --------------------

    //region -------------------- Is in properties --------------------

    public get isInProperty() {
        return this.#isInProperty;
    }

    public get isInSuperMarioMaker1() {
        return this.isInProperty.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInProperty.isInSuperMarioMaker2;
    }


    public get isInSuperMarioBrosStyle() {
        return this.isInProperty.isInSuperMarioBrosStyle;
    }

    public get isInSuperMarioBros3Style() {
        return this.isInProperty.isInSuperMarioBros3Style;
    }

    public get isInSuperMarioWorldStyle() {
        return this.isInProperty.isInSuperMarioWorldStyle;
    }

    public get isInNewSuperMarioBrosUStyle() {
        return this.isInProperty.isInNewSuperMarioBrosUStyle;
    }

    public get isInSuperMario3DWorldStyle() {
        return this.isInProperty.isInSuperMario3DWorldStyle;
    }


    public get isInGroundTheme() {
        return this.isInProperty.isInGroundTheme;
    }

    public get isInUndergroundTheme() {
        return this.isInProperty.isInUndergroundTheme;
    }

    public get isInUnderwaterTheme() {
        return this.isInProperty.isInUnderwaterTheme;
    }

    public get isInDesertTheme() {
        return this.isInProperty.isInDesertTheme;
    }

    public get isInSnowTheme() {
        return this.isInProperty.isInSnowTheme;
    }

    public get isInSkyTheme() {
        return this.isInProperty.isInSkyTheme;
    }

    public get isInForestTheme() {
        return this.isInProperty.isInForestTheme;
    }

    public get isInGhostHouseTheme() {
        return this.isInProperty.isInGhostHouseTheme;
    }

    public get isInAirshipTheme() {
        return this.isInProperty.isInAirshipTheme;
    }

    public get isInCastleTheme() {
        return this.isInProperty.isInCastleTheme;
    }


    public get isInDayTheme() {
        return this.isInProperty.isInDayTheme;
    }

    public get isInNightTheme() {
        return this.isInProperty.isInNightTheme;
    }

    //endregion -------------------- Is in properties --------------------

    //region -------------------- References properties --------------------

    public get references() {
        return this.#references;
    }


    public get referenceInSuperMarioBrosStyle() {
        return this.references.referenceInSuperMarioBrosStyle;
    }

    public get referenceInSuperMarioBros3Style() {
        return this.references.referenceInSuperMarioBros3Style;
    }

    public get referenceInSuperMarioWorldStyle() {
        return this.references.referenceInSuperMarioWorldStyle;
    }

    public get referenceInNewSuperMarioBrosUStyle() {
        return this.references.referenceInNewSuperMarioBrosUStyle;
    }

    public get referenceInSuperMario3DWorldStyle() {
        return this.references.referenceInSuperMario3DWorldStyle;
    }


    public get referenceInGroundTheme() {
        return this.references.referenceInGroundTheme;
    }

    public get referenceInUndergroundTheme() {
        return this.references.referenceInUndergroundTheme;
    }

    public get referenceInUnderwaterTheme() {
        return this.references.referenceInUnderwaterTheme;
    }

    public get referenceInDesertTheme() {
        return this.references.referenceInDesertTheme;
    }

    public get referenceInSnowTheme() {
        return this.references.referenceInSnowTheme;
    }

    public get referenceInSkyTheme() {
        return this.references.referenceInSkyTheme;
    }

    public get referenceInForestTheme() {
        return this.references.referenceInForestTheme;
    }

    public get referenceInGhostHouseTheme() {
        return this.references.referenceInGhostHouseTheme;
    }

    public get referenceInAirshipTheme() {
        return this.references.referenceInAirshipTheme;
    }

    public get referenceInCastleTheme() {
        return this.references.referenceInCastleTheme;
    }


    public get referenceInDayTheme() {
        return this.references.referenceInDayTheme;
    }

    public get referenceInNightTheme() {
        return this.references.referenceInNightTheme;
    }


    public get everyReferences() {
        return this.references.everyReferences;
    }

    //endregion -------------------- References properties --------------------

}
