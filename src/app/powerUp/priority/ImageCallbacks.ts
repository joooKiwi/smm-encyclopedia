import type {ImagesRetrieverCallback} from 'app/powerUp/priority/PowerUpPriority'
import {Themes}                       from 'core/theme/Themes'
import {Times}                        from 'core/time/Times'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

export namespace ImageCallbacks {

    export const FIRST_EDITOR_IMAGE_CALLBACK: ImagesRetrieverCallback = (entity, gameStyle,) => [EDITOR_IMAGE_CALLBACK(entity, gameStyle,)[0]!,]
    export const FIRST_IN_GAME_IMAGE_CALLBACK: ImagesRetrieverCallback = (entity, gameStyle,) => [IN_GAME_IMAGE_CALLBACK(entity, gameStyle,)[0]!,]

    export const EDITOR_IMAGE_CALLBACK: ImagesRetrieverCallback = (entity, gameStyle,) => entity.editorImage.get(gameStyle, Themes.GROUND, Times.DAY,)

    export const IN_GAME_IMAGE_CALLBACK: ImagesRetrieverCallback = (entity, gameStyle,) => entity.inGameImage.get(gameStyle,)

    export const FIRST_EDITOR_IN_NSMBU_AND_IN_GAME_IN_OTHER_IMAGE_CALLBACK: ImagesRetrieverCallback = (entity, gameStyle) =>
        gameStyle === GameStyles.NEW_SUPER_MARIO_BROS_U ? EDITOR_IMAGE_CALLBACK(entity, gameStyle,) : FIRST_IN_GAME_IMAGE_CALLBACK(entity, gameStyle,)

}
