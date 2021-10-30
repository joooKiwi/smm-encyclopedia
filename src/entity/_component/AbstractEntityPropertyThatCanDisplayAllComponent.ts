import type {Name}           from '../../lang/name/Name';
import type {ReactComponent} from '../../util/react/ReactComponent';
import type {ReactProperty}  from '../../util/react/ReactProperty';

import {PureComponent} from 'react';

export interface EntityPropertyProperties<R>
    extends ReactProperty {

    reference: R

    name: Name

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


    protected abstract get _isInAll(): boolean;

    protected abstract _renderComponentForAll(): JSX.Element;

    public abstract render(): JSX.Element;

}
