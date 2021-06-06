import {Component} from 'react';

export interface TextContent {

    content: string

}

export default class TextContainer
    extends Component<TextContent, any> {

    render() {
        return <span>{this.props.content}</span>;
    }
}