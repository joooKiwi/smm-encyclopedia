import type {Lazy} from '@joookiwi/lazy'

import type {CanMakeASoundOutOfAMusicBlockProperty, InstrumentProperty} from 'core/entity/properties/instrument/InstrumentProperty'
import type {PossibleCanMakeASoundOutOfAMusicBlock_Comment}             from 'core/entity/properties/instrument/loader.types'
import type {Instrument}                                                from 'core/instrument/Instrument'
import type {NullOr}                                                    from 'util/types/nullable'
import type {BooleanOrNotApplicable}                                    from 'util/types/variables'

export class InstrumentPropertyContainer
    implements InstrumentProperty {

    //region -------------------- Fields --------------------

    readonly #instrumentsHolder
    readonly #canMakeASoundOutOfAMusicBlock

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    constructor(instruments: Lazy<readonly Instrument[]>,
                canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlockProperty,) {
        this.#instrumentsHolder = instruments
        this.#canMakeASoundOutOfAMusicBlock = canMakeASoundOutOfAMusicBlock
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get instruments(): readonly Instrument[] {
        return this.#instrumentsHolder.value
    }

    //region -------------------- Can make a sound out of a music block --------------------

    public get canMakeASoundOutOfAMusicBlockContainer(): CanMakeASoundOutOfAMusicBlockProperty {
        return this.#canMakeASoundOutOfAMusicBlock
    }

    public get canMakeASoundOutOfAMusicBlock(): BooleanOrNotApplicable {
        return this.canMakeASoundOutOfAMusicBlockContainer.value
    }

    public get canMakeASoundOutOfAMusicBlockComment(): NullOr<PossibleCanMakeASoundOutOfAMusicBlock_Comment> {
        return this.canMakeASoundOutOfAMusicBlockContainer.comment
    }

    //endregion -------------------- Can make a sound out of a music block --------------------

    //endregion -------------------- Getter methods --------------------

}
