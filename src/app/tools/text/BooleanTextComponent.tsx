import type {BooleanTextProperties} from './properties/BooleanTextProperties';

import TextComponent from './TextComponent';

/**
 * Create a simple {@link TextComponent}
 * with a variable value based on a simple boolean.
 * @reactComponent
 */
export default function BooleanTextComponent({boolean, trueValue, falseValue, ...otherProperties}: BooleanTextProperties,) {
    return <TextComponent content={boolean ? trueValue : falseValue} {...otherProperties}/>;
}
