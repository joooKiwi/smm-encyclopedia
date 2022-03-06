import {PureComponent} from 'react';

import type {GlobalAppOption}                                                                                   from '../GlobalAppOption';
import type {GroupProperties, OnClickCallback, PossibleElement, PossibleId, PossibleOptionValue, SingleElement} from './Group.types';
import type {ReactComponent}                                                                                    from '../../../../util/react/ReactComponent';
import type {ReactElement}                                                                                      from '../../../../util/react/ReactProperty';

/**
 * @reactComponent
 */
export default abstract class AbstractGroup<T extends PossibleElement, U extends PossibleOptionValue, >
    extends PureComponent<GroupProperties<T, U>>
    implements ReactComponent {

    //region -------------------- Attributes --------------------

    static readonly #IS_NOT_DISABLED = [false, false,] as const;

    //endregion -------------------- Attributes --------------------
    //region -------------------- Getter methods --------------------

    public get id(): PossibleId {
        return this.props.id;
    }

    public get elements(): readonly SingleElement<T, U>[] {
        return this.props.elements;
    }

    //endregion -------------------- Getter methods --------------------

    protected abstract _renderElement(element: T, option: GlobalAppOption<U>, isDisabled: readonly [boolean, boolean,], onClickCallback: | OnClickCallback | null,): ReactElement

    public render(): ReactElement {
        return <div key={`option container (${this.id})`} id={`${this.id}-option-container`} className="container-fluid">{
            this.elements.map(([element, option, isDisabled, onClickCallback = null,]) => this._renderElement(
                element,
                option,
                isDisabled == null ? AbstractGroup.#IS_NOT_DISABLED : typeof isDisabled == 'boolean' ? [isDisabled, false,] : isDisabled,
                onClickCallback,))
        }</div>;
    }

}