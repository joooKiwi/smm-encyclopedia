import type {GameStyles}  from '../../../gameStyle/GameStyles';
import type {InGameImage} from '../inGame/InGameImage';

import {AbstractUniqueImage} from './AbstractUniqueImage';
import {Themes}              from '../../../theme/Themes';

export class UniqueImageByInGameImage
    extends AbstractUniqueImage {

    public constructor(inGame: InGameImage | null,) {
        super(null, null, inGame,);
    }

    public override get(gameStyle: GameStyles,): readonly string[] {
        return this.inGameImage.get(false, gameStyle, Themes.GROUND,);
    }

}
