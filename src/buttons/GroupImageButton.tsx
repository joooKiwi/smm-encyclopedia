import AbstractGroupButton from "./AbstractGroupButton";

export type Image = { source: string, name: string, isActive: boolean, };

export default class GroupImageButton
    extends AbstractGroupButton<Image> {

    public constructor(...elements: Image[]) {
        super(...elements);
    }

    protected getButtons(): JSX.Element[] {
        return this.elements.map(image =>
            <button className={'btn btn-primary' + (image.isActive ? ' active' : '')} type="button">
                <img src={image.source} alt={image.name}/>
            </button>);
    }

}