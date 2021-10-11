import type {BooleanProperty, PossibleBoolean} from './BooleanProperty';
import type {PropertyThatCanBeUnknown}         from './PropertyThatCanBeUnknown';

export interface BooleanThatCanBeUnknownProperty<B extends PossibleBoolean = PossibleBoolean, IS_UNKNOWN extends boolean = boolean, >
    extends BooleanProperty<B>, PropertyThatCanBeUnknown<B, IS_UNKNOWN> {

}
