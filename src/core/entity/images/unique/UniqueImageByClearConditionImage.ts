import type {ClearConditionImage} from '../clearCondition/ClearConditionImage';
import type {GameStyles}          from '../../../gameStyle/GameStyles';

import {AbstractUniqueImage} from './AbstractUniqueImage';

export class UniqueImageByClearConditionImage
    extends AbstractUniqueImage {

    public constructor(clearCondition: ClearConditionImage,) {
        super(null, clearCondition, null,);
    }

    public override get(gameStyle: GameStyles,): readonly string[] {
        return this.clearConditionImage.get(gameStyle,);
    }
}