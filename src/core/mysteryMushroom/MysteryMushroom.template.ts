import type {TemplateWithUniqueNameTemplate}                   from 'core/_template/TemplateWithUniqueName.template'
import type {PossibleAcronym as PossibleAcronym_GameReference} from 'core/gameReference/GameReferences.types'
import type {PossibleUniqueEnglishName}                        from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {PossibleConditionToUnlockIt}                      from 'core/mysteryMushroom/properties/UnlockProperty'
import type {SoundPropertyTemplate}                            from 'core/mysteryMushroom/properties/sound/SoundProperty.template'
import type {PossibleName_SMM1 as PossibleVersionNameInSMM}    from 'core/version/Versions.types'

export interface MysteryMushroomTemplate
    extends TemplateWithUniqueNameTemplate<PossibleUniqueEnglishName> {

    gameReference: | PossibleAcronym_GameReference | PokemonGeneration

    properties: {

        firstAppearance: PossibleVersionNameInSMM

        unlock: {
            condition: PossibleConditionToUnlockIt
            amiibo: boolean
        }

        sound: SoundPropertyTemplate

    }

}

export type PokemonGeneration = `Pokémon gen ${| 1 | 4 | 6}`
