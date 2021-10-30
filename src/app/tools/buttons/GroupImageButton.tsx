import './GroupImageButton.scss';

import type {ActivatableImageProperty} from './properties/ActivatableImageProperty';
import type {GroupButtonProperty}      from './properties/GroupButtonProperty';

import AbstractGroupButton from './AbstractGroupButton';

/**
 * @reactComponent
 */
export default class GroupImageButton
    extends AbstractGroupButton<ActivatableImageProperty> {

    public constructor(props: GroupButtonProperty<ActivatableImageProperty>,) {
        super(props);
    }

    protected _getContent(image: ActivatableImageProperty,) {
        return <img className="btn-image" src={image.source} alt={image.name}/>;
    }

}
