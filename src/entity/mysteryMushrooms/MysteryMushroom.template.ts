import type {PossibleConditionToUnlockIt} from './properties/UnlockProperty';
import type {SoundPropertyTemplate}       from './properties/sound/SoundProperty.template';
import type {TemplateWithNameTemplate}    from '../_template/TemplateWithName.template';
import {UniqueEnglishName}                from './MysteryMushrooms.types';

export interface MysteryMushroomTemplate
    extends TemplateWithNameTemplate {

    uniqueName: UniqueEnglishName

    properties: {

        unlock: {
            condition: PossibleConditionToUnlockIt
            amiibo: boolean
        }

        reference: string

        differentSprite: {
            japanese: boolean
            left: boolean
        }

        sound: SoundPropertyTemplate

    }

}
