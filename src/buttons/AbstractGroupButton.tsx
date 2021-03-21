import {Component, ReactNode} from "react";
import {Image} from "./GroupImageButton";


export default abstract class AbstractGroupButton<T extends { isActive: boolean }>
    extends Component<{ elements: readonly T[], isChoiceGroup: boolean }, any> {

    public static MAXIMUM_HORIZONTAL_LENGTH = 5;

    protected constructor(props: { elements: readonly T[]; isChoiceGroup: boolean; }) {
        super(props);
    }


    protected get elements(): readonly T[] {
        return this.props.elements;
    }

    protected get isChoiceGroup(): boolean {
        return this.props.isChoiceGroup;
    }

    /**
     * Return every buttons from the elements stored inside them.
     */
    protected abstract getButtons(): JSX.Element[];

    public render(): ReactNode {
        return <div
            className={'btn-group' + (this.elements.length > AbstractGroupButton.MAXIMUM_HORIZONTAL_LENGTH ? ' btn-group-vertical' : '')}
            role="group" aria-label="Basic radio toggle button group">
            {this.getButtons()}
        </div>;
    }
}