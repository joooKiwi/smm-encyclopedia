import AbstractGroupButton from "./AbstractGroupButton";
import {GroupButtonComponents} from "./GroupButtonComponent";
import React from "react";
import {ActivatableImageElement} from "./elements/ActivatableImageElement";

export default class GroupImageButton
    extends AbstractGroupButton<ActivatableImageElement> {

    public constructor(props: GroupButtonComponents<ActivatableImageElement>) {
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