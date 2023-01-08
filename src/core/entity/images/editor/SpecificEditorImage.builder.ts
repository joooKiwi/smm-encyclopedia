import type {ClassWithEntityEnglishName}              from 'core/ClassWithEnglishName'
import type {EditorImageFile}                         from 'core/entity/file/EditorImageFile'
import type {PossibleAmountOfImages, SimpleImageName} from 'core/entity/images/editor/EditorImage.types'
import type {GameStyles}                              from 'core/gameStyle/GameStyles'

import {AbstractEditorImageBuilder} from 'core/entity/images/editor/AbstractEditorImage.builder'

/** A {@link EditorImage} that is separated between multiple instances, but with a same name */
export class SpecificEditorImageBuilder<NAME extends NonNullable<SimpleImageName> = NonNullable<SimpleImageName>, >
    extends AbstractEditorImageBuilder<NAME> {

    public constructor(entity: ClassWithEntityEnglishName, simpleImageName: NAME, imageNumber: PossibleAmountOfImages,) {
        super(entity, simpleImageName, imageNumber,)
    }

    protected override _createDefaultImages(): ReadonlyMap<GameStyles, readonly EditorImageFile[]> {
        const imageNumber = this.imageNumber!

        return new Map(this._gameStyles.map(gameStyle => [
            gameStyle,
            [this._createImageFile(gameStyle, null, false, imageNumber,),],
        ]))
    }

    protected override _createImages() {
        return this._createNewMap(() => [this.imageNumber!,])
    }

}
