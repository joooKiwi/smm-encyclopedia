import './GroupImageButton.scss';
import AbstractGroupButton from "./AbstractGroupButton";
import {GroupButtonComponents} from "./components/GroupButtonComponent";
import React from "react";
import {ActivatableImageElement} from "./elements/ActivatableImageElement";

export default class GroupImageButton
    extends AbstractGroupButton<ActivatableImageElement> {

    public constructor(props: GroupButtonComponents<ActivatableImageElement>) {
        super(props);
    }

    protected _getContent(image: ActivatableImageElement): JSX.Element {
        return <img className="btn-image" src={image.source} alt={image.name}/>;
    }

}