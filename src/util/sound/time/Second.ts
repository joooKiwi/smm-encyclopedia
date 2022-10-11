import {AbstractTime} from './AbstractTime'

export class Second<TIME extends number = number, >
    extends AbstractTime<number, TIME> {

    public constructor(second: TIME,) {
        super(second * 1000 * 60, second,)
    }

}
