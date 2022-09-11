import type {GameStyles}        from '../../../gameStyle/GameStyles';
import type {WhilePlayingImage} from '../whilePlaying/WhilePlayingImage';

import {AbstractUniqueImage} from './AbstractUniqueImage';
import {Themes}              from '../../../theme/Themes';

export class UniqueImageByInGameImage
    extends AbstractUniqueImage {

    public constructor(whilePlaying: WhilePlayingImage | null,) {
        super(null, null, whilePlaying,);
    }

    public override get(gameStyle: GameStyles,): readonly string[] {
        return this.whilePlayingImage.get(false, gameStyle, Themes.GROUND,);
    }

}
