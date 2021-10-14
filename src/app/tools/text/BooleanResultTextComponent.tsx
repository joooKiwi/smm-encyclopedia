import BooleanTextComponent, {BooleanTextProperties} from './BooleanTextComponent';

/**
 * Create a coloration based on the boolean value.
 *
 * Return a new {@link BooleanTextComponent}
 * with the classes "text-success" or "text-danger".
 * @reactComponent
 */
export default function BooleanResultTextComponent({boolean, trueValue, falseValue, classes,}: BooleanTextProperties,) {
    return <BooleanTextComponent
        classes={[...(classes ?? []), ...[boolean ? 'text-success' : 'text-danger']]}
        boolean={boolean}
        trueValue={trueValue}
        falseValue={falseValue}
    />;
}
