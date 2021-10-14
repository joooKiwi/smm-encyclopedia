import TextContainer from './TextContainer';

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
 * Create a simple {@link TextContainer}
 * with a variable value based on a simple boolean.
 */
export default function BooleanTextContainer({boolean, trueValue, falseValue, classes,}: BooleanTextProperties,) {
    const content = boolean ? trueValue : falseValue;
    if (classes == null)
        return <TextContainer content={content}/>;
    return <TextContainer content={content} classes={classes}/>;
}