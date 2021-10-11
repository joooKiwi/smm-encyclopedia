import type {ClassWithComment, PossibleComment} from './ClassWithComment';
import type {Property}                          from './Property';

export interface PropertyWithComment<T, COMMENT extends PossibleComment = PossibleComment, >
    extends Property<T>, ClassWithComment<COMMENT> {

}
