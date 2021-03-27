import {GroupButtonComponents} from "./GroupButtonComponent";
import React, {Component, ReactNode} from "react";
import {ActivatableElement} from "./elements/ActivatableElement";

export default abstract class AbstractGroupButton<T extends ActivatableElement>
    extends Component<GroupButtonComponents<T>, any> {

    public static DEFAULT_IS_OUTLINE = true;
    public static DEFAULT_IS_VERTICAL = true;
    public static MAXIMUM_HORIZONTAL_LENGTH = 5;

    protected constructor(props: GroupButtonComponents<T>) {
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
        return this.elements.length > AbstractGroupButton.MAXIMUM_HORIZONTAL_LENGTH
    }


    /**
     * Return every buttons from the elements stored inside them.
     */
    protected abstract _getContent(t: T): JSX.Element | string;

    private __getButtons(): JSX.Element[] {
        let buttons: JSX.Element[] = [];
        this.elements.forEach((t, index) => {
                let id = this.groupName + (index + 1);
                buttons.push(
                    <input type={this.isChoiceGroup ? 'radio' : 'checkbox'} className="btn-check"
                           name={this.groupName} id={id} autoComplete="off" defaultChecked={t.isActive}/>,
                    <label className={`btn btn${this.isOutline ? '-outline' : ''}-${this.color}`} htmlFor={id}>
                        {this._getContent(t)}
                    </label>,
                );
            }
        );
        return buttons;
    }

    public render(): ReactNode {
        return <div
            className={'btn-group' + (this.hasTheConditionToBeVertical ? ' btn-group-vertical' : '')}
            role="group" aria-label={`Basic ${this.isChoiceGroup ? 'radio' : 'checkbox'} toggle button group`}>
            {this.__getButtons()}
        </div>;
    }
}