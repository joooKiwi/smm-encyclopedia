import {AbstractTime} from 'util/file/sound/time/AbstractTime'

export class Millisecond<const TIME extends number = number, >
    extends AbstractTime {

    public constructor(frame: TIME,) {
        super(frame, frame / 1000,)
    }

}
