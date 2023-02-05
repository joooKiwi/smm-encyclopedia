import type {MysteryMushroom, MysteryMushroomGames} from 'core/mysteryMushroom/MysteryMushroom'
import type {MysteryMushroomTemplate}               from 'core/mysteryMushroom/MysteryMushroom.template'
import type {Name}                                  from 'lang/name/Name'

import {TemplateWithNameCreator} from 'core/_template/TemplateWithName.creator'
import {GameReferences}          from 'core/gameReference/GameReferences'
import {MysteryMushroomContainer}         from 'core/mysteryMushroom/MysteryMushroom.container'
import {MysteryMushroomPropertyContainer} from 'core/mysteryMushroom/properties/MysteryMushroomProperty.container'
import {UnlockPropertyProvider}           from 'core/mysteryMushroom/properties/UnlockProperty.provider'
import {SoundPropertyContainer}           from 'core/mysteryMushroom/properties/sound/SoundProperty.container'

//region -------------------- Import from deconstruction --------------------

const {POKEMON_RED, POKEMON_GREEN, POKEMON_BLUE, POKEMON_YELLOW, POKEMON_DIAMOND, POKEMON_PEARL, POKEMON_X, POKEMON_Y,} = GameReferences

//endregion -------------------- Import from deconstruction --------------------

export class MysteryMushroomCreator
    extends TemplateWithNameCreator<MysteryMushroomTemplate, MysteryMushroom> {

    //region -------------------- External object references --------------------

    public static gameReferencesMap: ReadonlyMap<string, GameReferences>

    //endregion -------------------- External object references --------------------

    public constructor(template: MysteryMushroomTemplate,) {
        super(template, 1, false,)//TODO change the false to true since it is a complete SMM1 name
    }

    //region -------------------- Build helper methods --------------------

    //region -------------------- Property helper methods --------------------

    #createSoundPropertyFields() {
        const propertyTemplate = this.template.properties.sound
        const {movement,} = propertyTemplate.soundEffect
        const {
            collected: collectedTemplate, taunt: tauntTemplate, jump: {value: jumpTemplate, ground: groundAfterJumpTemplate},
            turn: turnAfterRun, goalPole: goalPoleTemplate, death: deathTemplate,
        } = propertyTemplate.hasSoundEffect
        const {starMode: starModeTemplate,} = propertyTemplate.hasSpecialMusic

        return [
            collectedTemplate.value, collectedTemplate.game,
            tauntTemplate.value, tauntTemplate.game,
            movement,
            jumpTemplate.value, jumpTemplate.game, groundAfterJumpTemplate.value, groundAfterJumpTemplate.game,
            turnAfterRun,
            starModeTemplate.value, starModeTemplate.game,
            goalPoleTemplate.value, goalPoleTemplate.type, goalPoleTemplate.game, goalPoleTemplate.smallDefinition,
            deathTemplate.value, deathTemplate.type, deathTemplate.game, deathTemplate.smallDefinition,
        ] as const
    }

    #createProperty() {
        const propertyTemplate = this.template.properties
        const unlockTemplate = propertyTemplate.unlock

        return new MysteryMushroomPropertyContainer(
            UnlockPropertyProvider.get.get(unlockTemplate.condition, unlockTemplate.amiibo,),
            new SoundPropertyContainer(...this.#createSoundPropertyFields(),),
        )
    }

    //endregion -------------------- Property helper methods --------------------

    protected _getGames(): MysteryMushroomGames {
        const reference = this.template.gameReference

        switch (reference) {
            case 'Pokémon gen 1':
                return [POKEMON_RED, POKEMON_GREEN, POKEMON_BLUE, POKEMON_YELLOW,]
            case 'Pokémon gen 4':
                return [POKEMON_DIAMOND, POKEMON_PEARL,]
            case 'Pokémon gen 6':
                return [POKEMON_X, POKEMON_Y,]
            default:
                return [GameReferences.getValueByNameOrAcronym(reference),]
        }
    }

    //endregion -------------------- Build helper methods --------------------

    protected _create(name: Name<string>,): MysteryMushroom {
        return new MysteryMushroomContainer(name, this._getGames(), this.#createProperty())
    }
}
