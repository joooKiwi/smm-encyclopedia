import type {Music}          from 'core/music/Music'
import type {MusicSoundFile} from 'core/music/file/MusicSoundFile'
import type {ObjectHolder}   from 'util/holder/ObjectHolder'

import {ObjectHolderContainer} from 'util/holder/ObjectHolder.container'

export abstract class AbstractMusic<ALL extends readonly MusicSoundFile[] = readonly MusicSoundFile[], >
    implements Music<ALL> {

    //region -------------------- Fields --------------------

    #everyMusicsHolder?: ObjectHolder<ALL>

    //endregion -------------------- Fields --------------------

    protected constructor() {
    }

    //region -------------------- Getter methods --------------------

    protected abstract _createEveryMusics(): ALL

    public get everyMusics(): ALL {
        return (this.#everyMusicsHolder ?? new ObjectHolderContainer(this._createEveryMusics())).get
    }

    //endregion -------------------- Getter methods --------------------

}
