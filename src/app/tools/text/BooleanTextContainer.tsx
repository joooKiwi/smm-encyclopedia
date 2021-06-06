import {Component} from 'react';

export interface BooleanTextContent /*extends React.HTMLAttributes<HTMLSpanElement>*/{

    boolean: boolean
    trueValue: string
    falseValue: string
    className?: string[]

}

/**
 * Create a simple {@link HTMLSpanElement html text element (HTMLSpanElement)}
 * with a variable value based on a simple boolean.
 */
export default class BooleanTextContainer
    extends Component<BooleanTextContent, any> {

    protected get _content() {
        return this.props.boolean ? this.props.trueValue : this.props.falseValue;
    }


    public render() {
        return <span className={this.props.className?.join(' ')}>{this._content}</span>;
    }
}