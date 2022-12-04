import type {TemplateWithNameTemplate}                     from 'core/_template/TemplateWithName.template'
import type {EveryPossibleName_Version_SMM}                from 'core/_util/loader/HeaderTypesForConvertorDefinition'
import type {PossibleEnglishName as PossibleGameReference} from 'core/gameReference/GameReferences.types'
import type {PossibleUniqueEnglishName}                    from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {PossibleConditionToUnlockIt}                  from 'core/mysteryMushroom/properties/UnlockProperty'
import type {SoundPropertyTemplate}                        from 'core/mysteryMushroom/properties/sound/SoundProperty.template'

export interface MysteryMushroomTemplate
    extends TemplateWithNameTemplate {

    uniqueName: PossibleUniqueEnglishName

    gameReference: | PossibleGameReference | PokemonGeneration

    properties: {

        firstAppearance: EveryPossibleName_Version_SMM

        unlock: {
            condition: PossibleConditionToUnlockIt
            amiibo: boolean
        }

        sound: SoundPropertyTemplate

    }

}

export type PokemonGeneration = `Pokémon gen ${| 1 | 4 | 6}`
