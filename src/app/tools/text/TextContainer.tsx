export interface TextContent<T extends string | number | boolean = string | number | boolean, > {

    content: | null | undefined | T

    classes?: | null | string[],

}

export default function TextContainer<T extends string | number | boolean = string | number | boolean, >({content, classes,}: TextContent<T>,) {
    if (classes == null)
        return <span>{content}</span>;
    return <span className={classes.join(' ')}>{content}</span>;
}