export interface BooleanTextContent /*extends React.HTMLAttributes<HTMLSpanElement>*/
{

    boolean: boolean
    trueValue: string
    falseValue: string
    className?: string[]

}

/**
 * Create a simple {@link HTMLSpanElement html text element (HTMLSpanElement)}
 * with a variable value based on a simple boolean.
 */
export default function BooleanTextContainer({boolean, trueValue, falseValue, className,}: BooleanTextContent,) {
    const content = boolean ? trueValue : falseValue;
    return <span className={className?.join(' ')}>{content}</span>;
}