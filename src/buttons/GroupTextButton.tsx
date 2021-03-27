import AbstractGroupButton from "./AbstractGroupButton";
import {GroupButtonComponents} from "./GroupButtonComponent";
import React from "react";
import {ActivatableTextElement} from "./elements/ActivatableTextElement";

export default class GroupTextButton
    extends AbstractGroupButton<ActivatableTextElement> {

    public constructor(props: GroupButtonComponents<ActivatableTextElement>) {
        super(props);
    }

    protected getButtons(): JSX.Element[] {
        return this.elements.map((image, index) => {
                let id = 'btnradio' + index;
                return <div key={id}>
                    <input type={this.isChoiceGroup ? 'radio': 'checkbox'} className="btn-check" name="btnradio" id={id} autoComplete="off" defaultChecked={image.isActive}/>
                    <label className="btn btn-outline-primary" htmlFor={id}>{image.text}</label>
                </div>;
            }
        );
    }

}