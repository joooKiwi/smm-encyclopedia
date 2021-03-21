import AbstractGroupButton from "./AbstractGroupButton";
import React from "react";

export type Text = { text: string, isActive: boolean, };

export default class GroupTextButton
    extends AbstractGroupButton<Text> {

    public constructor(props: { elements: readonly Text[]; isChoiceGroup: boolean; }) {
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