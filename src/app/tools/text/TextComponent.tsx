import type {ReactProperty} from '../../../util/react/ReactProperty';

export type PossibleTextContent = | string | number | boolean;

export interface TextProperties<T extends PossibleTextContent = PossibleTextContent, >
    extends ReactProperty {

    content: | null | undefined | T

    classes?: | null | string[]

}

/**
 *
 * @param properties
 * @reactComponent
 */
export default function TextComponent<T extends PossibleTextContent = PossibleTextContent, >({content, classes,}: TextProperties<T>,) {
    if (classes == null)
        return <span>{content}</span>;
    return <span className={classes.join(' ')}>{content}</span>;
}
