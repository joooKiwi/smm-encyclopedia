import type {ReactProperty} from '../../../util/react/ReactProperty';

export type PossibleTextContent = | string | number | boolean;

export interface TextProperties<T extends PossibleTextContent = PossibleTextContent, >
    extends ReactProperty {

    content: | null | undefined | T

    classes?: | null | string[]

}

export default function TextContainer<T extends PossibleTextContent = PossibleTextContent, >({content, classes,}: TextProperties<T>,) {
    if (classes == null)
        return <span>{content}</span>;
    return <span className={classes.join(' ')}>{content}</span>;
}