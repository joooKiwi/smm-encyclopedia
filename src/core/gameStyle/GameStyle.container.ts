import type {Entity}       from '../entity/Entity';
import type {GameProperty} from '../entity/properties/GameProperty';
import type {GameStyle}    from './GameStyle';
import type {Name}         from '../../lang/name/Name';
import type {ObjectHolder} from '../../util/holder/ObjectHolder';

import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolderContainer';

export class GameStyleContainer
    implements GameStyle {

    //region -------------------- Attributes --------------------

    readonly #name: ObjectHolder<Name>;
    readonly #isInProperty;
    readonly #entities: ObjectHolder<readonly Entity[]>;

    //endregion -------------------- Attributes --------------------

    public constructor(name: () => Name, isInProperty: GameProperty, entities: () => readonly Entity[],) {
        this.#name = new DelayedObjectHolderContainer(name);
        this.#isInProperty = isInProperty;
        this.#entities = new DelayedObjectHolderContainer(entities);
    }

    //region -------------------- Name properties --------------------

    public get nameContainer(): Name {
        return this.#name.get;
    }


    public get languageValue() {
        return this.nameContainer.languageValue;
    }


    public get originalEnglish() {
        return this.nameContainer.originalEnglish;
    }

    public get english() {
        return this.nameContainer.english;
    }

    public get americanEnglish() {
        return this.nameContainer.americanEnglish;
    }

    public get europeanEnglish() {
        return this.nameContainer.europeanEnglish;
    }


    public get originalFrench() {
        return this.nameContainer.originalFrench;
    }

    public get french() {
        return this.nameContainer.french;
    }

    public get canadianFrench() {
        return this.nameContainer.canadianFrench;
    }

    public get europeanFrench() {
        return this.nameContainer.europeanFrench;
    }


    public get german() {
        return this.nameContainer.german;
    }


    public get originalSpanish() {
        return this.nameContainer.originalSpanish;
    }

    public get spanish() {
        return this.nameContainer.spanish;
    }

    public get americanSpanish() {
        return this.nameContainer.americanSpanish;
    }

    public get europeanSpanish() {
        return this.nameContainer.europeanSpanish;
    }


    public get italian() {
        return this.nameContainer.italian;
    }


    public get dutch() {
        return this.nameContainer.dutch;
    }


    public get originalPortuguese() {
        return this.nameContainer.originalPortuguese;
    }

    public get portuguese() {
        return this.nameContainer.portuguese;
    }

    public get americanPortuguese() {
        return this.nameContainer.americanPortuguese;
    }

    public get europeanPortuguese() {
        return this.nameContainer.europeanPortuguese;
    }


    public get russian() {
        return this.nameContainer.russian;
    }


    public get japanese() {
        return this.nameContainer.japanese;
    }


    public get originalChinese() {
        return this.nameContainer.originalChinese;
    }

    public get chinese() {
        return this.nameContainer.chinese;
    }

    public get traditionalChinese() {
        return this.nameContainer.traditionalChinese;
    }

    public get simplifiedChinese() {
        return this.nameContainer.simplifiedChinese;
    }


    public get korean() {
        return this.nameContainer.korean;
    }


    public get isGreekUsed() {
        return this.nameContainer.isGreekUsed;
    }

    public get greek() {
        return this.nameContainer.greek;
    }


    public get originalLanguages() {
        return this.nameContainer.originalLanguages;
    }

    //endregion -------------------- Name properties --------------------
    //region -------------------- Game properties --------------------

    public get isInProperty() {
        return this.#isInProperty;
    }

    public get isInSuperMarioMaker1() {
        return this.isInProperty.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.isInProperty.isInSuperMarioMaker2;
    }

    //endregion -------------------- Game properties --------------------

    public get entities() {
        return this.#entities.get;
    }

    public toNameMap() {
        return this.nameContainer.toNameMap();
    }

}