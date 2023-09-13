import {Millisecond} from 'util/file/sound/time/Millisecond'

export class FramePerMillisecond<const out FRAME extends number = number, >
    extends Millisecond {

    //region -------------------- Fields --------------------

    readonly #framePerMillisecond
    readonly #framePerSecond

    //endregion -------------------- Fields --------------------

    public constructor(frame: FRAME,) {
        super(frame / 60,)
        this.#framePerMillisecond = frame
        this.#framePerSecond = frame * 1000
    }

    //region -------------------- Getter methods --------------------

    public get framePerSecond(): number {
        return this.#framePerSecond
    }

    public get framePerMillisecond(): FRAME {
        return this.#framePerMillisecond
    }

    //endregion -------------------- Getter methods --------------------

}
