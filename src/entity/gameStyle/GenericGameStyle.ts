import {CallbackCaller}   from '../../util/CallbackCaller';
import {Entity}           from '../simple/Entity';
import {GameStyle}        from './GameStyle';
import {Name}         from '../../lang/name/Name';
import {GameProperty} from '../properties/GameProperty';

export class GenericGameStyle
    implements GameStyle {

    //region -------------------- Attributes --------------------

    readonly #name;
    readonly #isInProperty;
    readonly #entities: CallbackCaller<Entity[]>;

    //endregion -------------------- Attributes --------------------

    public constructor(name: Name, isInProperty: GameProperty, entities: () => Entity[]) {
        this.#name = name;
        this.#isInProperty = isInProperty;
        this.#entities = new CallbackCaller(entities);
    }


    //region -------------------- Name properties --------------------

    public get name() {
        return this.#name;
    }


    public get languageValue() {
        return this.name.languageValue;
    }


    public get originalEnglish() {
        return this.name.originalEnglish;
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


    public get originalFrench() {
        return this.name.originalFrench;
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


    public get german() {
        return this.name.german;
    }


    public get originalSpanish() {
        return this.name.originalSpanish;
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


    public get italian() {
        return this.name.italian;
    }


    public get dutch() {
        return this.name.dutch;
    }


    public get originalPortuguese() {
        return this.name.originalPortuguese;
    }

    public get portuguese() {
        return this.name.portuguese;
    }

    public get americanPortuguese() {
        return this.name.americanPortuguese;
    }

    public get europeanPortuguese() {
        return this.name.europeanPortuguese;
    }


    public get russian() {
        return this.name.russian;
    }


    public get japanese() {
        return this.name.japanese;
    }


    public get originalChinese() {
        return this.name.originalChinese;
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


    public get korean() {
        return this.name.korean;
    }

    public get individualValues() {
        return this.name.individualValues;
    }

    //endregion -------------------- Name properties --------------------
    //region -------------------- Is in game properties --------------------

    public get isInProperty() {
        return this.#isInProperty;
    }

    public get isInSuperMarioMaker1() {
        return this.isInProperty.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInProperty.isInSuperMarioMaker2;
    }

    //endregion -------------------- Is in game properties --------------------

    public get entities() {
        return this.#entities.get;
    }

    public toNameMap() {
        return this.name.toNameMap();
    }

}