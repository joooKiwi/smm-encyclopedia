import type {Times}      from '../../../time/Times';
import type {GameStyles} from '../../../gameStyle/GameStyles';
import type {Themes}     from '../../../theme/Themes';

import {AbstractImageContainer} from '../AbstractImageContainer';

export class ClearConditionImageContainer
    extends AbstractImageContainer {

    public constructor(map: ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly string[]>>>, defaultImages: ReadonlyMap<GameStyles, readonly string[]>,) {
        super(map, defaultImages,);
    }

}
