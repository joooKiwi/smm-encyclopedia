import {AbstractTime} from 'util/sound/time/AbstractTime'

export class Millisecond<TIME extends number = number, >
    extends AbstractTime {

    public constructor(frame: TIME,) {
        super(frame, frame / 1000,)
    }

}
