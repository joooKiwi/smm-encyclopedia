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

    public static DEFAULT_IS_OUTLINE = true;
    public static DEFAULT_IS_VERTICAL = true;
    public static MAXIMUM_HORIZONTAL_LENGTH = 5;

    protected constructor(props: GroupButtonProperties<T>,) {
        super(props);
    }


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
        return this.props.isVertical == null
            ? AbstractGroupButton.DEFAULT_IS_VERTICAL
            : this.props.isVertical;
    }

    protected get isOutline(): boolean {
        return this.props.isOutline == null
            ? AbstractGroupButton.DEFAULT_IS_OUTLINE
            : this.props.isOutline;
    }

    protected get hasTheConditionToBeVertical(): boolean {
        if (!this.isVertical)
            return false;
        return this.elements.length > AbstractGroupButton.MAXIMUM_HORIZONTAL_LENGTH;
    }


    /**
     * Return every buttons from the elements stored inside them.
     */
    protected abstract _getContent(t: T,): | JSX.Element | string;

    private __getButtons(): readonly JSX.Element[] {
        let buttons: JSX.Element[] = [];
        this.elements.forEach((t, index) => {
                let id = this.groupName + (index + 1);
                buttons.push(
                    <input key={`input_${this.groupName}_${index}`} type={this.isChoiceGroup ? 'radio' : 'checkbox'} className="btn-check" name={this.groupName} id={id} autoComplete="off"
                           defaultChecked={t.isActive}/>,
                    <label key={`label_${this.groupName}_${index}`} className={`btn btn${this.isOutline ? '-outline' : ''}-${this.color}`} htmlFor={id}>
                        {this._getContent(t)}
                    </label>,
                );
            }
        );
        return buttons;
    }

    public render() {
        return <div key={`groupButton_${this.groupName}`} className={'btn-group' + (this.hasTheConditionToBeVertical ? ' btn-group-vertical' : '')} role="group">
            {this.__getButtons()}
        </div>;
    }
}