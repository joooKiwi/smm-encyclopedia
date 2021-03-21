import {Component, ReactNode} from "react";
import {Image} from "./GroupImageButton";

export default abstract class AbstractGroupButton<T>
    extends Component<any, { elements: readonly T[] }> {

    public static MAXIMUM_HORIZONTAL_LENGTH = 5;

    readonly #elements: T[];


    protected constructor(props: any, ...elements: T[]) {
        super(props);
        this.#elements = elements;
    }


    protected get elements(): readonly T[] {
        return this.#elements;
    }

    /**
     * Return every buttons from the elements stored inside them.
     */
    protected abstract getButtons(): JSX.Element[];

    public render(): ReactNode {
        console.log(this);
        console.log(this.elements);
        return <div
            className={'btn-group btn-group-toggle' + (this.elements.length > AbstractGroupButton.MAXIMUM_HORIZONTAL_LENGTH ? ' btn-group-vertical' : '')}
            data-toggle="buttons">
            {this.getButtons()}
        </div>;
    }
}