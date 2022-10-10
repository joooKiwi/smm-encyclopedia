import {AbstractTime} from './AbstractTime';

export class Millisecond<TIME extends number = number, >
    extends AbstractTime {

    public constructor(frame: TIME,) {
        super(frame, frame / 1000,);
    }

}
