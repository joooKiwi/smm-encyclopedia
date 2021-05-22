import {Component, ReactNode} from 'react';

export type SingleTableContent = [key: string, ...content: JSX.Element[]];

interface SimpleImageHeader {
    key: string
    /**
     * The name if the image cannot be loaded.
     */
    alt: string
    path: string
}

interface SimpleTableComponent {
    id: string
    caption: string
    headers: readonly (string | SimpleImageHeader)[]
    content: readonly SingleTableContent[]
}

export default class Table
    extends Component<SimpleTableComponent, any> {

    protected get id() {
        return this.props.id;
    }

    protected get caption() {
        return this.props.caption;
    }

    protected get headers() {
        return this.props.headers;
    }

    protected get content() {
        return this.props.content;
    }

    private static __getHeaderKey(header: string | SimpleImageHeader): string {
        return typeof header === 'string' ? header : header.key;
    }

    private static __getHeaderContent(header: string | SimpleImageHeader): JSX.Element {
        return typeof header === 'string'
            ? <span>{header}</span>
            : <img key={header.key} alt={header.alt} src={header.path}/>;
    }

    private __getHeaders(isHead: boolean): JSX.Element[] {
        return this.headers.map(header => <th key={`${isHead ? 'head' : 'foot'}_${Table.__getHeaderKey(header)}`}>{Table.__getHeaderContent(header)}</th>);
    }

    private __getContent(): JSX.Element[] {
        return this.content.map(content => {
            const key = content[0];
            return <tr key={key + '_header'}>
                {content.map((innerContent, index) =>
                    typeof innerContent !== 'string'
                        ? <td key={`${key}_${index} ${Table.__getHeaderKey(this.headers[index - 1])}`}>{innerContent}</td>
                        : null)
                    .filter(content => content !== null)}
            </tr>;
        });
    }

    public render(): ReactNode {
        return <table key={this.id} id={this.id} className="table table-bordered table-striped">
            <caption>{this.caption}</caption>
            <thead>
            <tr>{this.__getHeaders(true)}</tr>
            </thead>
            <tbody>{this.__getContent()}</tbody>
            <tfoot>
            <tr>{this.__getHeaders(false)}</tr>
            </tfoot>
        </table>;
    }
}
