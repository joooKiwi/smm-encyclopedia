import {PureComponent} from 'react';

import type {GlobalAppOption}                                                                                   from '../GlobalAppOption';
import type {GroupProperties, OnClickCallback, PossibleElement, PossibleId, PossibleOptionValue, SingleElement} from './Group.types';
import type {ReactComponent}                                                                                    from '../../../../util/react/ReactComponent';
import type {ReactElement}                                                                                      from '../../../../util/react/ReactProperty';

import {EMPTY_REACT_ELEMENT} from '../../../../util/emptyReactVariables';

/**
 * @reactComponent
 */
export default abstract class AbstractGroup<T extends PossibleElement, U extends PossibleOptionValue, >
    extends PureComponent<GroupProperties<T, U>>
    implements ReactComponent {

    //region -------------------- Fields --------------------

    static readonly #IS_NOT_DISABLED = [false, false,] as const;

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    public get id(): PossibleId {
        return this.props.id;
    }

    public get isHidden(): boolean {
        return this.props.isHidden ?? false;
    }

    public get elements(): readonly SingleElement<T, U>[] {
        return this.props.elements;
    }

    //endregion -------------------- Getter methods --------------------

    protected abstract _renderElement(element: T, option: GlobalAppOption<U>, isDisabled: readonly [boolean, boolean,], onClickCallback: | OnClickCallback | null,): ReactElement

    public override render(): ReactElement {
        return this.isHidden
            ? EMPTY_REACT_ELEMENT
            : <div key={`option container (${this.id})`} id={`${this.id}-option-container`} className="container-fluid">{
                this.elements.map(([element, option, isDisabled, isHidden, onClickCallback = null,]) =>
                    isHidden
                        ? EMPTY_REACT_ELEMENT
                        : this._renderElement(
                            element,
                            option,
                            isDisabled == null ? AbstractGroup.#IS_NOT_DISABLED : typeof isDisabled == 'boolean' ? [isDisabled, false,] : isDisabled,
                            onClickCallback,))
            }</div>;
    }

}