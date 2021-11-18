import type {ReactNode} from 'react';
import {Component}      from 'react';

import type {ActivatableProperties} from './properties/ActivatableProperties';
import type {GroupButtonProperties} from './properties/GroupButtonProperties';
import type {ReactComponent}        from '../../../util/react/ReactComponent';

/**
 * @reactComponent
 */
export default abstract class AbstractGroupButton<T extends ActivatableProperties, >
    extends Component<GroupButtonProperties<T>>
    implements ReactComponent<ReactNode> {

    //region -------------------- Attributes --------------------

    public static DEFAULT_IS_OUTLINE = true;
    public static DEFAULT_IS_VERTICAL = true;
    public static MAXIMUM_HORIZONTAL_LENGTH = 5;

    #isVertical?: GroupButtonProperties<T>['isVertical'];
    #isOutline?: GroupButtonProperties<T>['isOutline'];
    #hasTheConditionToBeVertical?: boolean;

    //endregion -------------------- Attributes --------------------

    protected constructor(props: GroupButtonProperties<T>,) {
        super(props);
    }

    //region -------------------- Getter methods --------------------

    protected get elements(): readonly T[] {
        return this.props.elements;
    }

    protected get isChoiceGroup(): boolean {
        return this.props.isChoiceGroup;
    }

    protected get groupName(): string {
        return this.props.groupName;
    }

    protected get color(): string {
        return this.props.color;
    }

    protected get isVertical(): boolean {
        return this.#isVertical ??= this.props.isVertical ?? AbstractGroupButton.DEFAULT_IS_VERTICAL;
    }

    protected get isOutline(): boolean {
        return this.#isOutline ??= this.props.isOutline ?? AbstractGroupButton.DEFAULT_IS_OUTLINE;
    }

    protected get hasTheConditionToBeVertical(): boolean {
        return this.#hasTheConditionToBeVertical ??= this.isVertical
            ? this.elements.length > AbstractGroupButton.MAXIMUM_HORIZONTAL_LENGTH
            : false;
    }

    //endregion -------------------- Getter methods --------------------

    /**
     * Create the button content used inside a {@link HTMLInputElement Input element}.
     *
     * @protected
     */
    protected abstract _createContent(properties: T,): | JSX.Element | string;

    /**
     * Create multiple buttons composed of an {@link HTMLInputElement Input}
     * and a {@link HTMLLabelElement Label} element.
     *
     * @private
     */
    private __createButtons(): readonly JSX.Element[] {
        return this.elements.map((properties, index) => {
                let id = this.groupName + (index + 1);
                return [
                    <input key={`input_${this.groupName}_${index}`} id={id} className="btn-check" type={this.isChoiceGroup ? 'radio' : 'checkbox'} name={this.groupName}
                           autoComplete="off" defaultChecked={properties.isActive}/>,
                    <label key={`label_${this.groupName}_${index}`} id={`${id}_label`} className={`btn btn${this.isOutline ? '-outline' : ''}-${this.color}`} htmlFor={id}>
                        {this._createContent(properties)}
                    </label>,
                ];
            }
        ).flat();
    }

    public render() {
        return <div key={`groupButton_${this.groupName}`} id={`group-${this.groupName}`} className={'btn-group' + (this.hasTheConditionToBeVertical ? ' btn-group-vertical' : '')} role="group">
            {this.__createButtons()}
        </div>;
    }
}