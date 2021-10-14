import './GroupImageButton.scss';

import type {ActivatableImageElement} from './elements/ActivatableImageElement';
import type {GroupButtonComponents}   from './properties/GroupButtonProperty';

import AbstractGroupButton from './AbstractGroupButton';

/**
 * @reactComponent
 */
export default class GroupImageButton
    extends AbstractGroupButton<ActivatableImageElement> {

    public constructor(props: GroupButtonComponents<ActivatableImageElement>,) {
        super(props);
    }

    protected _getContent(image: ActivatableImageElement,): JSX.Element {
        return <img className="btn-image" src={image.source} alt={image.name}/>;
    }

}
