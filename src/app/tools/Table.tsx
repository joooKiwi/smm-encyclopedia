import {Component, ReactNode} from "react";

export type SingleTableContent = [key: string, ...content: JSX.Element[]];

interface SimpleTableComponent {
    caption: string
    headers: string[]
    content: SingleTableContent[]
}

export default class Table
    extends Component<SimpleTableComponent, any> {

    protected get caption() {
        return this.props.caption;
    }

    protected get headers() {
        return this.props.headers;
    }

    protected get content() {
        return this.props.content;
    }

    private __getHeaders(isHead: boolean): JSX.Element[] {
        return this.headers.map(header => <th key={`${isHead ? 'head' : 'foot'}_${header}`}>{header}</th>);
    }

    private __getContent(): JSX.Element[] {
        return this.content.map(content => {
            const key = content[0];
            return <tr key={key + ' header'}>
                {content.map((innerContent, index) => {
                    if (typeof innerContent !== 'string')
                        return <td key={`${key} ${this.headers[index]}`}>{innerContent}</td>;
                    return null;
                }).filter(content => content !== null)}
            </tr>;
        })
    }

    public render(): ReactNode {
        return <table className="table table-bordered table-striped">
            <caption>{this.caption}</caption>
            <thead><tr>{this.__getHeaders(true)}</tr></thead>
            <tbody>{this.__getContent()}</tbody>
            <tfoot><tr>{this.__getHeaders(false)}</tr></tfoot>
        </table>;
    }
}
