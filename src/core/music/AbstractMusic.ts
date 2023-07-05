import type {Music}          from 'core/music/Music'
import type {MusicSoundFile} from 'core/music/file/MusicSoundFile'

export abstract class AbstractMusic<ALL extends readonly MusicSoundFile[] = readonly MusicSoundFile[], >
    implements Music<ALL> {

    #everyMusicsHolder?: ALL

    protected constructor() {
    }

    //region -------------------- Getter methods --------------------

    protected abstract _createEveryMusics(): ALL

    public get everyMusics(): ALL {
        return this.#everyMusicsHolder ??= this._createEveryMusics()
    }

    //endregion -------------------- Getter methods --------------------

}
