import type {ReactNode} from 'react';
import {PureComponent}  from 'react';

import type {ReactComponent}                             from '../../../util/react/ReactComponent';
import type {SimpleTableProperties, SingleHeaderContent} from './Table.types';

/**
 * @reactComponent
 */
export default class Table
    extends PureComponent<SimpleTableProperties>
    implements ReactComponent<ReactNode> {

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

    private static __getHeaderKey(header: SingleHeaderContent,): string {
        return typeof header === 'string' ? header : header.key;
    }

    private static __getHeaderContent(header: SingleHeaderContent,): JSX.Element {
        return typeof header === 'string'
            ? <span>{header}</span>
            : 'element' in header
                ? header.element
                : <img key={header.key} alt={header.alt} src={header.path}/>;
    }

    private __getHeaders(isHead: boolean,): JSX.Element[] {
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
