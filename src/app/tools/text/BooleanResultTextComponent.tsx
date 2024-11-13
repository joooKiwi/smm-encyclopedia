import type {BooleanResultTextProperties, TextColor} from 'app/tools/text/properties/BooleanResultTextProperties'

import BooleanTextComponent from 'app/tools/text/BooleanTextComponent'
import {Empty}        from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

const TRUE_DEFAULT_COLOR: TextColor = 'text-success'
const FALSE_DEFAULT_COLOR: TextColor = 'text-danger'

/**
 * Create a coloration based on the boolean value.
 *
 * Return a new {@link BooleanTextComponent}
 * with the classes "text-success" or "text-danger".
 * @reactComponent
 */
export default function BooleanResultTextComponent({boolean, classes, true: _true, false: _false, ...otherProperties}: BooleanResultTextProperties,) {
    const [trueValue, trueColor,] = typeof _true == 'string' ? [_true, TRUE_DEFAULT_COLOR] : _true
    const [falseValue, falseColor,] = typeof _false == 'string' ? [_false, FALSE_DEFAULT_COLOR] : _false

    return <BooleanTextComponent classes={[...(classes ?? EMPTY_ARRAY), (boolean ? trueColor : falseColor)]} boolean={boolean} true={trueValue} false={falseValue} {...otherProperties}/>
}
