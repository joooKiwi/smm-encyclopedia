import type {NameTrait}                                 from './NameTrait'
import type {Name}                                      from './Name'
import type {EveryLanguages}                            from '../EveryLanguages'
import type {ObjectHolder, PossibleValueOnObjectHolder} from '../../util/holder/ObjectHolder'

import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolder.container'

/**
 * A simple implementation of the {@link NameTrait}
 * to remove duplicate code.
 */
export class ClassContainingAName<T, >
    implements NameTrait<T> {

    //region -------------------- Fields --------------------

    readonly #nameContainer: ObjectHolder<Name<T>>

    //endregion -------------------- Fields --------------------

    public constructor(name: PossibleValueOnObjectHolder<Name<T>>,) {
        this.#nameContainer = new DelayedObjectHolderContainer(name)
    }

    //region -------------------- Getter methods --------------------

    public get nameContainer(): Name<T> {
        return this.#nameContainer.get
    }


    public get languageValue(): this['nameContainer']['languageValue'] {
        return this.nameContainer.languageValue
    }

    //region -------------------- English properties --------------------

    public get originalEnglish(): this['nameContainer']['originalEnglish'] {
        return this.nameContainer.originalEnglish
    }

    public get english(): this['nameContainer']['english'] {
        return this.nameContainer.english
    }

    public get americanEnglish(): this['nameContainer']['americanEnglish'] {
        return this.nameContainer.americanEnglish
    }

    public get europeanEnglish(): this['nameContainer']['europeanEnglish'] {
        return this.nameContainer.europeanEnglish
    }

    //endregion -------------------- English properties --------------------
    //region -------------------- French properties --------------------

    public get originalFrench(): this['nameContainer']['originalFrench'] {
        return this.nameContainer.originalFrench
    }

    public get french(): this['nameContainer']['french'] {
        return this.nameContainer.french
    }

    public get canadianFrench(): this['nameContainer']['canadianFrench'] {
        return this.nameContainer.canadianFrench
    }

    public get europeanFrench(): this['nameContainer']['europeanFrench'] {
        return this.nameContainer.europeanFrench
    }

    //endregion -------------------- French properties --------------------
    //region -------------------- German properties --------------------

    public get german(): this['nameContainer']['german'] {
        return this.nameContainer.german
    }

    //endregion -------------------- German properties --------------------
    //region -------------------- Spanish properties --------------------

    public get originalSpanish(): this['nameContainer']['originalSpanish'] {
        return this.nameContainer.originalSpanish
    }

    public get spanish(): this['nameContainer']['spanish'] {
        return this.nameContainer.spanish
    }

    public get americanSpanish(): this['nameContainer']['americanSpanish'] {
        return this.nameContainer.americanSpanish
    }

    public get europeanSpanish(): this['nameContainer']['europeanSpanish'] {
        return this.nameContainer.europeanSpanish
    }

    //endregion -------------------- Spanish properties --------------------
    //region -------------------- Italian properties --------------------

    public get italian(): this['nameContainer']['italian'] {
        return this.nameContainer.italian
    }

    //endregion -------------------- Italian properties --------------------
    //region -------------------- Dutch properties --------------------

    public get dutch(): this['nameContainer']['dutch'] {
        return this.nameContainer.dutch
    }

    //endregion -------------------- Dutch properties --------------------
    //region -------------------- Portuguese properties --------------------

    public get originalPortuguese(): this['nameContainer']['originalPortuguese'] {
        return this.nameContainer.originalPortuguese
    }

    public get portuguese(): this['nameContainer']['portuguese'] {
        return this.nameContainer.portuguese
    }

    public get americanPortuguese(): this['nameContainer']['americanPortuguese'] {
        return this.nameContainer.americanPortuguese
    }

    public get europeanPortuguese(): this['nameContainer']['europeanPortuguese'] {
        return this.nameContainer.europeanPortuguese
    }

    //endregion -------------------- Portuguese properties --------------------
    //region -------------------- Russian properties --------------------

    public get russian(): this['nameContainer']['russian'] {
        return this.nameContainer.russian
    }

    //endregion -------------------- Russian properties --------------------
    //region -------------------- Japanese properties --------------------

    public get japanese(): this['nameContainer']['japanese'] {
        return this.nameContainer.japanese
    }

    //endregion -------------------- Japanese properties --------------------
    //region -------------------- Chinese properties --------------------

    public get originalChinese(): this['nameContainer']['originalChinese'] {
        return this.nameContainer.originalChinese
    }

    public get chinese(): this['nameContainer']['chinese'] {
        return this.nameContainer.chinese
    }

    public get traditionalChinese(): this['nameContainer']['traditionalChinese'] {
        return this.nameContainer.traditionalChinese
    }

    public get simplifiedChinese(): this['nameContainer']['simplifiedChinese'] {
        return this.nameContainer.simplifiedChinese
    }

    //endregion -------------------- Chinese properties --------------------
    //region -------------------- Korean properties --------------------

    public get korean(): this['nameContainer']['korean'] {
        return this.nameContainer.korean
    }

    //endregion -------------------- Korean properties --------------------
    //region -------------------- Hebrew properties --------------------

    public get isHebrewUsed(): this['nameContainer']['isHebrewUsed'] {
        return this.nameContainer.isHebrewUsed
    }

    public get hebrew(): this['nameContainer']['hebrew'] {
        return this.nameContainer.hebrew
    }

    //endregion -------------------- Hebrew properties --------------------
    //region -------------------- Polish properties --------------------

    public get isPolishUsed(): this['nameContainer']['isPolishUsed'] {
        return this.nameContainer.isPolishUsed
    }

    public get polish(): this['nameContainer']['polish'] {
        return this.nameContainer.polish
    }

    //endregion -------------------- Polish properties --------------------
    //region -------------------- Ukrainian properties --------------------

    public get isUkrainianUsed(): this['nameContainer']['isUkrainianUsed'] {
        return this.nameContainer.isUkrainianUsed
    }

    public get ukrainian(): this['nameContainer']['ukrainian'] {
        return this.nameContainer.ukrainian
    }

    //endregion -------------------- Ukrainian properties --------------------
    //region -------------------- Greek properties --------------------

    public get isGreekUsed(): this['nameContainer']['isGreekUsed'] {
        return this.nameContainer.isGreekUsed
    }

    public get greek(): this['nameContainer']['greek'] {
        return this.nameContainer.greek
    }

    //endregion -------------------- Greek properties --------------------

    public get originalLanguages(): this['nameContainer']['originalLanguages'] {
        return this.nameContainer.originalLanguages
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toNameMap(): ReadonlyMap<EveryLanguages, T> {
        return this.nameContainer.toNameMap()
    }

    //endregion -------------------- Convertor methods --------------------

}
