import AbstractGroupButton from "./AbstractGroupButton";
import React from "react";

export type Image = { source: string, name: string, isActive: boolean, };

export default class GroupImageButton
    extends AbstractGroupButton<Image> {

    public constructor(props: { elements: readonly Image[]; isChoiceGroup: boolean; }) {
        super(props);
    }

    protected getButtons(): JSX.Element[] {
        return this.elements.map((image, index) => {
            let id = 'imageButton_' + index;
            return <div key={id}>
                <input type={this.isChoiceGroup ? 'radio' : 'checkbox'} className="btn-check" name="btnradio" id={id}
                       autoComplete="off" defaultChecked={image.isActive}/>
                <label className="btn btn-outline-primary" htmlFor={id}><img src={image.source} alt={image.name}/></label>
            </div>;
        });
    }

}