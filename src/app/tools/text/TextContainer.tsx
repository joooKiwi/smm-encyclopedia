export type PossibleTextContent = | string | number | boolean;

export interface TextContent<T extends PossibleTextContent = PossibleTextContent, > {

    content: | null | undefined | T

    classes?: | null | string[]

}

export default function TextContainer<T extends PossibleTextContent = PossibleTextContent, >({content, classes,}: TextContent<T>,) {
    if (classes == null)
        return <span>{content}</span>;
    return <span className={classes.join(' ')}>{content}</span>;
}