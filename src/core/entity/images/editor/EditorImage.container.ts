import type {EditorImage} from './EditorImage';

import {AbstractImageWithTimesThemesAndGameStyles} from '../AbstractImageWithTimesThemesAndGameStyles';
import {GameStyles}                                from '../../../gameStyle/GameStyles';
import {Themes}                                    from '../../../theme/Themes';
import {Times}                                     from '../../../time/Times';

export class EditorImageContainer
    extends AbstractImageWithTimesThemesAndGameStyles
    implements EditorImage {

    public constructor(map: ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly string[]>>>, defaultImages: ReadonlyMap<GameStyles, readonly string[]>,) {
        super(map, defaultImages,);
    }

    //region -------------------- Getter methods --------------------

    protected override get _createEveryGameStyles(): readonly GameStyles[] {
        return GameStyles.values;
    }

    protected override get _createEveryThemes(): readonly Themes[] {
        return Themes.courseThemes;
    }

    protected override get _createEveryTimes(): readonly Times[] {
        return Times.values;
    }

    //endregion -------------------- Getter methods --------------------

}
