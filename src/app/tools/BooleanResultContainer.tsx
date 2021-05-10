import {Component} from "react";

export interface BooleanTextContent {
    boolean: boolean
    trueValue: string
    falseValue: string
}

export default class BooleanResultContainer
    extends Component<BooleanTextContent, any> {

    protected get boolean() {
        return this.props.boolean;
    }

    protected get _content() {
        return this.boolean ? this.props.trueValue : this.props.falseValue;
    }


    public render() {
        return <span className={this.boolean ? 'text-success' : 'text-danger'}>{this._content}</span>;
    }
}