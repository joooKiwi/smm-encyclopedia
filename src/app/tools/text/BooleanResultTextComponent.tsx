import BooleanTextComponent    from './BooleanTextComponent';
import {BooleanTextProperties} from './properties/BooleanTextProperties';

/**
 * Create a coloration based on the boolean value.
 *
 * Return a new {@link BooleanTextComponent}
 * with the classes "text-success" or "text-danger".
 * @reactComponent
 */
export default function BooleanResultTextComponent({boolean, classes, ...otherProperties}: BooleanTextProperties,) {
    return <BooleanTextComponent classes={[...(classes ?? []), (boolean ? 'text-success' : 'text-danger')]} boolean={boolean} {...otherProperties}/>;
}
