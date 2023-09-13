import {AbstractTime} from 'util/file/sound/time/AbstractTime'

export class Second<const out TIME extends number = number, >
    extends AbstractTime<number, TIME> {

    public constructor(second: TIME,) {
        super(second * 1000 * 60, second,)
    }

}
