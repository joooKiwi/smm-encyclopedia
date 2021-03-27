import AbstractGroupButton from "./AbstractGroupButton";
import {GroupButtonComponents} from "./components/GroupButtonComponent";
import React from "react";
import {ActivatableTextElement} from "./elements/ActivatableTextElement";

export default class GroupTextButton
    extends AbstractGroupButton<ActivatableTextElement> {

    public constructor(props: GroupButtonComponents<ActivatableTextElement>) {
        super(props);
    }

    protected _getContent(text: ActivatableTextElement): string {
        return text.text;
    }

}