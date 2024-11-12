import type {BooleanTextProperties} from 'app/tools/text/properties/BooleanTextProperties'

import TextComponent from 'app/tools/text/TextComponent'

/**
 * Create a {@link TextComponent}
 * with a variable value based on a {@link Boolean}.
 * @reactComponent
 */
export default function BooleanTextComponent({boolean, true: _true, false: _false, ...otherProperties}: BooleanTextProperties,) {
    return <TextComponent content={boolean ? _true : _false} {...otherProperties}/>
}
