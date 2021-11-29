import type {Name}                        from '../../lang/name/Name';
import type {ReactComponent}              from '../../util/react/ReactComponent';
import type {ReactElement, ReactProperty} from '../../util/react/ReactProperty';

import {PureComponent} from 'react';

export interface EntityPropertyProperties<R>
    extends ReactProperty {

    reference: R

    name: Name

    displayAllAsText: boolean

}

/**
 * @reactComponent
 */
export abstract class AbstractEntityPropertyThatCanDisplayAllComponent<R>
    extends PureComponent<EntityPropertyProperties<R>>
    implements ReactComponent {

    protected get reference() {
        return this.props.reference;
    }

    protected get name() {
        return this.props.name;
    }

    protected get displayAllAsText(): boolean {
        return this.props.displayAllAsText;
    }


    protected abstract get _isInAll(): boolean;

    protected abstract _renderComponentForAllAsText(): ReactElement;

    protected abstract _renderComponentForAllAsImages(): ReactElement;

    public render(): ReactElement {
        if (this._isInAll) {
            if (this.displayAllAsText)
                return this._renderComponentForAllAsText();
            return this._renderComponentForAllAsImages();
        }
        return this._render();
    }

    protected abstract _render(): ReactElement;

}
