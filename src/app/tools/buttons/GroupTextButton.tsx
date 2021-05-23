import React from 'react';

import AbstractGroupButton      from './AbstractGroupButton';
import {ActivatableTextElement} from './elements/ActivatableTextElement';
import {GroupButtonComponents}  from './components/GroupButtonComponent';

export default class GroupTextButton
    extends AbstractGroupButton<ActivatableTextElement> {

    public constructor(props: GroupButtonComponents<ActivatableTextElement>) {
        super(props);
    }

    protected _getContent(text: ActivatableTextElement): JSX.Element {
        return <span>{text.text}</span>;
    }

}