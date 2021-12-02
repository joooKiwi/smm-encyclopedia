import type {Builder}                               from '../../util/Builder';
import type {MysteryMushroomTemplate}               from './MysteryMushroom.template';
import type {MysteryMushroom, MysteryMushroomGames} from './MysteryMushroom';
import type {Name}                                  from '../../lang/name/Name';

import {DifferentSpritePropertyContainer} from './properties/DifferentSpriteProperty.container';
import {GameReferences}                   from '../gameReference/GameReferences';
import {Games}                            from '../game/Games';
import {MysteryMushroomContainer}         from './MysteryMushroom.container';
import {MysteryMushroomPropertyContainer} from './properties/MysteryMushroomProperty.container';
import {SoundPropertyContainer}           from './properties/sound/SoundProperty.container';
import {TemplateWithNameBuilder}          from '../_template/TemplateWithName.builder';
import {UnlockPropertyContainer}          from './properties/UnlockProperty.container';

export class MysteryMushroomBuilder
    extends TemplateWithNameBuilder<MysteryMushroomTemplate, MysteryMushroom> {

    //region -------------------- External object references --------------------

    public static gameReferencesMap: ReadonlyMap<string, GameReferences>;

    //region -------------------- External object references --------------------

    public constructor(templateBuilder: Builder<MysteryMushroomTemplate>,) {
        super(templateBuilder, Games.SUPER_MARIO_MAKER_1, false,);//TODO change the false to true since it is a complete SMM1 name
    }

    //region -------------------- Build helper methods --------------------

    protected /*static*/ get _static() {
        return MysteryMushroomBuilder;
    }

    protected _uniqueName(template: MysteryMushroomTemplate,): string | null {
        return template.uniqueName;
    }

    //region -------------------- Property helper methods --------------------

    private __createSoundPropertyAttributes() {
        const propertyTemplate = this.template.properties.sound;
        const {movement,} = propertyTemplate.soundEffect;
        const {
            collected: collectedTemplate, taunt: tauntTemplate, jump: {value: jumpTemplate, ground: groundAfterJumpTemplate},
            turn: turnAfterRun, goalPole: goalPoleTemplate, death: deathTemplate,
        } = propertyTemplate.hasSoundEffect;
        const {starMode: starModeTemplate,} = propertyTemplate.hasSpecialMusic;

        return [
            collectedTemplate.value, collectedTemplate.game,
            tauntTemplate.value, tauntTemplate.game,
            movement,
            jumpTemplate.value, jumpTemplate.game, groundAfterJumpTemplate.value, groundAfterJumpTemplate.game,
            turnAfterRun,
            starModeTemplate.value, starModeTemplate.game,
            goalPoleTemplate.value, goalPoleTemplate.type, goalPoleTemplate.game, goalPoleTemplate.smallDefinition,
            deathTemplate.value, deathTemplate.type, deathTemplate.game, deathTemplate.smallDefinition,
        ] as const;
    }

    private __createProperty() {
        const propertyTemplate = this.template.properties;
        const unlockTemplate = propertyTemplate.unlock;
        const differentSpriteTemplate = propertyTemplate.differentSprite;

        return new MysteryMushroomPropertyContainer(
            UnlockPropertyContainer.get(unlockTemplate.condition, unlockTemplate.amiibo,),
            DifferentSpritePropertyContainer.get(differentSpriteTemplate.japanese, differentSpriteTemplate.left,),
            new SoundPropertyContainer(...this.__createSoundPropertyAttributes(),),
        );
    }

    //endregion -------------------- Property helper methods --------------------

    protected _getGames(): MysteryMushroomGames {
        const reference = this.template.gameReference;

        switch (reference) {
            case 'Pokémon gen 1':
                return [GameReferences.POKEMON_RED, GameReferences.POKEMON_GREEN, GameReferences.POKEMON_BLUE, GameReferences.POKEMON_YELLOW,];
            case 'Pokémon gen 4':
                return [GameReferences.POKEMON_DIAMOND, GameReferences.POKEMON_PEARL,];
            case 'Pokémon gen 6':
                return [GameReferences.POKEMON_X, GameReferences.POKEMON_Y,];
            default:
                return [GameReferences.getValue(reference)];
        }
    }

    //region -------------------- Build helper methods --------------------

    protected _build(name: Name,): MysteryMushroom {
        return new MysteryMushroomContainer(name, this._getGames(), this.__createProperty());
    }
}
