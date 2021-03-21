import AbstractGroupButton from "./AbstractGroupButton";

export type Text = { text: string, isActive: boolean, };

export default class GroupTextButton
    extends AbstractGroupButton<Text> {

    public constructor(props: any, ...elements: Text[]) {
        super(props, ...elements);
    }

    protected getButtons(): JSX.Element[] {
        return this.elements.map(image =>
            <button className={'btn btn-primary' + (image.isActive ? ' active' : '')} type="button">
                <span>{image.text}</span>
            </button>);
    }

}