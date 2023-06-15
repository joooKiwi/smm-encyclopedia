import type {ClassWithEntityEnglishName} from 'core/ClassWithEnglishName'

import {InGameSMM2ImageFileContainer} from 'core/entity/file/InGameSMM2ImageFile.container'
import {InGameImage_SMM2Container}    from 'core/entity/images/inGame/InGameImage_SMM2.container'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

/** The {@link InGameImage} for the {@link Entities.MAGIC_BALL_THROWN_BY_A_LEMMY magic ball} {@link Entities entity} */
export class InGameImage_MagicBall
    extends InGameImage_SMM2Container {

    constructor(entity: ClassWithEntityEnglishName,) {
        super(new Map([
            [GameStyles.SUPER_MARIO_BROS, [new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS, entity, 'Enemy', 'ball.0', 'Lemmy',),],],
            [GameStyles.SUPER_MARIO_BROS_3, [new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_BROS_3, entity, 'Enemy', 'ball.0', 'Lemmy',),],],
            [GameStyles.SUPER_MARIO_WORLD, [
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Enemy', 'ball.0', 'Lemmy',),
                new InGameSMM2ImageFileContainer(GameStyles.SUPER_MARIO_WORLD, entity, 'Enemy', 'ball_specular', 'Lemmy',),
            ],],
            // [GameStyles.NEW_SUPER_MARIO_BROS_U, [new InGameSMM2ImageFileContainer(GameStyles.NEW_SUPER_MARIO_BROS_U, entity, 'Enemy', 'lemmy_ball', 'Lemmy',),],],
        ],),)
    }
}