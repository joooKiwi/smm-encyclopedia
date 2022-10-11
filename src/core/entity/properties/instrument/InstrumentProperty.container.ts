import type {CanMakeASoundOutOfAMusicBlockProperty, InstrumentProperty} from './InstrumentProperty'
import type {Instrument}                                                from '../../../instrument/Instrument'
import type {ObjectHolder}                                              from '../../../../util/holder/ObjectHolder'

export class InstrumentPropertyContainer
    implements InstrumentProperty {

    //region -------------------- Fields --------------------

    readonly #instrumentsHolder
    readonly #canMakeASoundOutOfAMusicBlock

    //endregion -------------------- Fields --------------------

    constructor(instruments: ObjectHolder<readonly Instrument[]>, canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlockProperty,) {
        this.#instrumentsHolder = instruments
        this.#canMakeASoundOutOfAMusicBlock = canMakeASoundOutOfAMusicBlock
    }

    //region -------------------- Getter methods --------------------

    public get instruments() {
        return this.#instrumentsHolder.get
    }

    //region -------------------- Can make a sound out of a music block --------------------

    public get canMakeASoundOutOfAMusicBlockContainer() {
        return this.#canMakeASoundOutOfAMusicBlock
    }

    public get canMakeASoundOutOfAMusicBlock() {
        return this.canMakeASoundOutOfAMusicBlockContainer.value
    }

    public get canMakeASoundOutOfAMusicBlockComment() {
        return this.canMakeASoundOutOfAMusicBlockContainer.comment
    }

    //endregion -------------------- Can make a sound out of a music block --------------------

    //endregion -------------------- Getter methods --------------------

}
