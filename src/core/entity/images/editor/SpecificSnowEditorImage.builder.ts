import type {ClassWithEntityEnglishName}              from 'core/ClassWithEnglishName'
import type {EditorImageFile}                         from 'core/entity/file/EditorImageFile'
import type {PossibleAmountOfImages, SimpleImageName} from 'core/entity/images/editor/EditorImage.types'
import type {GameStyles}                              from 'core/gameStyle/GameStyles'

import {SpecificEditorImageBuilder} from 'core/entity/images/editor/SpecificEditorImage.builder'
import {Themes}                     from 'core/theme/Themes'

//region -------------------- Import from deconstruction --------------------

const {SNOW,} = Themes

//endregion -------------------- Import from deconstruction --------------------

/** A {@link EditorImage} that is only usable in the {@link Themes.SNOW snow theme} */
export class SpecificSnowEditorImageBuilder<NAME extends NonNullable<SimpleImageName> = NonNullable<SimpleImageName>, >
    extends SpecificEditorImageBuilder<NAME> {

    public constructor(entity: ClassWithEntityEnglishName, simpleImageName: NAME, imageNumber: PossibleAmountOfImages,) {
        super(entity, simpleImageName, imageNumber,)
    }

    protected override _createDefaultImages(): ReadonlyMap<GameStyles, readonly EditorImageFile[]> {
        const imageNumber = this.imageNumber!

        return new Map(this._gameStyles.map(gameStyle => [gameStyle, [this._createImageFile(gameStyle, SNOW, true, imageNumber,),],]))
    }

}
