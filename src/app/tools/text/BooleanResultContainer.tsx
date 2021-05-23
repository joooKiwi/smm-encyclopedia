import {Component} from 'react';

import BooleanTextContainer from './BooleanTextContainer';

export interface BooleanTextContent {
    boolean: boolean
    trueValue: string
    falseValue: string
}

/**
 * Create a coloration based on the boolean value.
 *
 * The {@link BooleanResultContainer.render render} method return a new {@link BooleanTextContainer}
 * with the classes "text-success" or "text-danger".
 */
export default class BooleanResultContainer
    extends Component<BooleanTextContent, any> {

    protected get boolean() {
        return this.props.boolean;
    }


    public render() {
        return <BooleanTextContainer
            className={[this.boolean ? 'text-success' : 'text-danger']}
            boolean={this.boolean}
            trueValue={this.props.trueValue}
            falseValue={this.props.falseValue}
        />;
    }
}