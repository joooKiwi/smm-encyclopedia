import BooleanTextContainer from './BooleanTextContainer';

export interface BooleanTextContent {

    boolean: boolean
    trueValue: string
    falseValue: string

}

/**
 * Create a coloration based on the boolean value.
 *
 * The {@link BooleanResultContainer.render render} method return a new {@link BooleanTextContainer}
 * with the classes "text-success" or "text-danger".
 */
export default function BooleanResultContainer({boolean, trueValue, falseValue,}: BooleanTextContent) {
    return <BooleanTextContainer
        className={[boolean ? 'text-success' : 'text-danger']}
        boolean={boolean}
        trueValue={trueValue}
        falseValue={falseValue}
    />;
}