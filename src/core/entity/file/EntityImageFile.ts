import type {UnusedBigMushroomEntityImages} from 'core/entity/UnusedBigMushroomEntityImages'
import type {UnusedEntityImages}            from 'core/entity/UnusedEntityImages'
import type {EditorImageFile}               from 'core/entity/file/EntityImageFile.editor'
import type {ClearConditionImageFile}       from 'core/entity/file/EntityImageFile.clearCondition'
import type {InGameImageFile}               from 'core/entity/file/EntityImageFile.inGame'
import type {UnusedSMM1ImageFile}           from 'core/entity/file/EntityImageFile.unused'

/**
 * An {@link ImageFile} made to be related to an {@link Entities}
 *
 * @see EditorImageFile
 * @see GenericEditorImageFile
 * @see PowerUpEditorImageFile
 * @see ClearConditionImageFile
 * @see InGameImageFile
 * @see InGameSMM1ImageFile
 * @see InGameSMM2ImageFile
 * @see UnusedImageFile
 * @see UnusedSmm1ImageFile_BigMushroom
 */
export type EntityImageFile = | EditorImageFile | ClearConditionImageFile | InGameImageFile | UnusedSMM1ImageFile


/** The possible {@link ImageFile} that are unused */
export type PossibleUnusedEntityImageFiles = NonNullable<ReturnType<typeof UnusedEntityImages[| 'STRETCH' | 'KOOPA_CLOWN_CAR' | 'WENDY_PROJECTILE' | 'LEMMY_PROJECTILE' | 'MORTON_GROUND_PROJECTILE' | 'VINE' | 'GOAL_POLE' | 'P_SWITCH']['image']['all']['get']>>[number][number]

/** The possible {@link ImageFile} that are unused as a Big Mushroom ({@link Entities.BIG_MUSHROOM_MODERN modern} / {@link Entities.BIG_MUSHROOM_CLASSIC classic}) */
export type PossibleUnusedBigMushroomEntityImageFiles = typeof UnusedBigMushroomEntityImages[| 'GOOMBA' | 'STRETCH' | 'CANNONBALL' | 'KOOPA_CLOWN_CAR' | 'BOWSER' | 'BOWSER_JR']['image']['all'][number]
