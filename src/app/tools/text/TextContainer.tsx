export interface TextContent {

    content: string

}

export default function TextContainer({content}: TextContent,) {
    return <span>{content}</span>;
}