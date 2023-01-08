import type {EditorImageFile} from 'core/entity/file/EditorImageFile'
import type {EditorImage}     from 'core/entity/images/editor/EditorImage'

import {AbstractImageWithTimesThemesAndGameStyles} from 'core/entity/images/AbstractImageWithTimesThemesAndGameStyles'
import {GameStyles}                                from 'core/gameStyle/GameStyles'
import {Themes}                                    from 'core/theme/Themes'
import {Times}                                     from 'core/time/Times'

export class EditorImageContainer
    extends AbstractImageWithTimesThemesAndGameStyles<EditorImageFile>
    implements EditorImage {

    public constructor(map: ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly EditorImageFile[]>>>, defaultImages: ReadonlyMap<GameStyles, readonly EditorImageFile[]>,) {
        super(map, defaultImages,)
    }

    //region -------------------- Getter methods --------------------

    protected override get _createEveryGameStyles(): readonly GameStyles[] {
        return GameStyles.values.toArray()
    }

    protected override get _createEveryThemes(): readonly Themes[] {
        return Themes.courseThemes
    }

    protected override get _createEveryTimes(): readonly Times[] {
        return Times.values.toArray()
    }

    //endregion -------------------- Getter methods --------------------

}
