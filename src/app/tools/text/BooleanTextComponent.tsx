import TextComponent from './TextComponent';

import type {ReactProperty} from '../../../util/react/ReactProperty';

export interface BooleanTextProperties
    extends ReactProperty/*React.HTMLAttributes<HTMLSpanElement>*/
{

    boolean: boolean

    trueValue: string

    falseValue: string

    classes?: | null | string[]

}

/**
 * Create a simple {@link TextComponent}
 * with a variable value based on a simple boolean.
 * @reactComponent
 */
export default function BooleanTextComponent({boolean, trueValue, falseValue, classes,}: BooleanTextProperties,) {
    const content = boolean ? trueValue : falseValue;
    if (classes == null)
        return <TextComponent content={content}/>;
    return <TextComponent content={content} classes={classes}/>;
}
