import {Millisecond} from './Millisecond';

export class Frame<FRAME extends number = number, >
    extends Millisecond {

    //region -------------------- Fields --------------------

    readonly #frame;

    //endregion -------------------- Fields --------------------

    public constructor(frame: FRAME,) {
        super(frame / 60,);
        this.#frame = frame;
    }

    //region -------------------- Getter methods --------------------

    public get frame(): FRAME {
        return this.#frame;
    }

    //endregion -------------------- Getter methods --------------------

}
