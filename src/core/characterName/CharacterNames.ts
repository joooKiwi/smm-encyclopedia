import type {Nullable, NullOr} from '@joookiwi/type'
import {hasByArray}            from '@joookiwi/collection'
import {Enum}                  from '@joookiwi/enumerable'

import type {ClassWithReference}                                              from 'core/ClassWithReference'
import type {CharacterName}                                                   from 'core/characterName/CharacterName'
import type {ClassWithEnglishName}                                            from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName, PossibleUniqueEnglishName} from 'core/characterName/CharacterNames.types'
import type {ClassWithNullableEditorVoiceSoundFileHolder}                     from 'core/editorVoice/ClassWithEditorVoiceSoundFileHolder'
import type {EditorVoiceSound}                                                from 'core/editorVoice/sound/EditorVoiceSound'
import type {CompanionEnumByNameWithValidationSingleton}                      from 'util/enumerable/Singleton.types'

import {CharacterNameLoader}               from 'core/characterName/CharacterName.loader'
import {EditorVoices}                      from 'core/editorVoice/EditorVoices'
import {StringContainer}                   from 'util/StringContainer'
import {getValueByEnglishName}             from 'util/utilitiesMethods'
import {CompanionEnumByNameWithValidation} from 'util/enumerable/companion/CompanionEnumByNameWithValidation'

import EditorVoiceCompanion = EditorVoices.Companion

/**
 * @recursiveReference<{@link EditorVoices}>
 */
export class CharacterNames
    extends Enum<Ordinals, Names>
    implements ClassWithReference<CharacterName>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithNullableEditorVoiceSoundFileHolder {

    //region -------------------- Enum instances --------------------

    public static readonly MARIO =                    new CharacterNames('Mario',)
    public static readonly SMALL_MARIO =              new CharacterNames('Small Mario',)
    public static readonly SUPER_MARIO =              new CharacterNames('Super Mario',)
    public static readonly WEIRD_MARIO =              new CharacterNames('Weird Mario',)
    public static readonly COSTUME_MARIO =            new CharacterNames('Costume Mario',)
    public static readonly FIRE_MARIO =               new CharacterNames('Fire Mario',)
    public static readonly SUPERBALL_MARIO =          new CharacterNames('Superball Mario',)
    public static readonly GIANT_MARIO =              new CharacterNames('Giant Mario',)
    public static readonly SMB2_MARIO =               new CharacterNames('SMB2 Mario',)
    public static readonly RACCOON_MARIO =            new CharacterNames('Raccoon Mario')
    public static readonly FROG_MARIO =               new CharacterNames('Frog Mario',)
    public static readonly CAPE_MARIO =               new CharacterNames('Cape Mario',)
    public static readonly BALLOON_MARIO =            new CharacterNames('Balloon Mario',)
    public static readonly PROPELLER_MARIO =          new CharacterNames('Propeller Mario',)
    public static readonly FLYING_SQUIRREL_MARIO =    new CharacterNames('Flying Squirrel Mario',)
    public static readonly CAT_MARIO =                new CharacterNames('Cat Mario',)
    public static readonly BUILDER_MARIO =            new CharacterNames('Builder Mario',)
    public static readonly BOOMERANG_MARIO =          new CharacterNames('Boomerang Mario',)
    public static readonly BUZZY_MARIO =              new CharacterNames('Buzzy Mario',)
    public static readonly SPINY_MARIO =              new CharacterNames('Spiny Mario',)

    public static readonly LUIGI =                    new CharacterNames('Luigi',)
    public static readonly SMALL_LUIGI =              new CharacterNames('Small Luigi',)
    public static readonly SUPER_LUIGI =              new CharacterNames('Super Luigi',)
    public static readonly FIRE_LUIGI =               new CharacterNames('Fire Luigi',)
    public static readonly SUPERBALL_LUIGI =          new CharacterNames('Superball Luigi',)
    public static readonly GIANT_LUIGI =              new CharacterNames('Giant Luigi',)
    public static readonly SMB2_LUIGI =               new CharacterNames('SMB2 Luigi',)
    public static readonly RACCOON_LUIGI =            new CharacterNames('Raccoon Luigi',)
    public static readonly FROG_LUIGI =               new CharacterNames('Frog Luigi',)
    public static readonly CAPE_LUIGI =               new CharacterNames('Cape Luigi',)
    public static readonly BALLOON_LUIGI =            new CharacterNames('Balloon Luigi',)
    public static readonly PROPELLER_LUIGI =          new CharacterNames('Propeller Luigi',)
    public static readonly FLYING_SQUIRREL_LUIGI =    new CharacterNames('Flying Squirrel Luigi',)
    public static readonly CAT_LUIGI =                new CharacterNames('Cat Luigi',)
    public static readonly BUILDER_LUIGI =            new CharacterNames('Builder Luigi',)
    public static readonly BOOMERANG_LUIGI =          new CharacterNames('Boomerang Luigi',)
    public static readonly BUZZY_LUIGI =              new CharacterNames('Buzzy Luigi',)
    public static readonly SPINY_LUIGI =              new CharacterNames('Spiny Luigi',)

    public static readonly TOAD =                     new CharacterNames('Toad',)
    public static readonly SMALL_TOAD =               new CharacterNames('Small Toad',)
    public static readonly SUPER_TOAD =               new CharacterNames('Super Toad',)
    public static readonly FIRE_TOAD =                new CharacterNames('Fire Toad',)
    public static readonly SUPERBALL_TOAD =           new CharacterNames('Superball Toad',)
    public static readonly GIANT_TOAD =               new CharacterNames('Giant Toad',)
    public static readonly SMB2_TOAD =                new CharacterNames('SMB2 Toad',)
    public static readonly RACCOON_TOAD =             new CharacterNames('Raccoon Toad',)
    public static readonly FROG_TOAD =                new CharacterNames('Frog Toad',)
    public static readonly CAPE_TOAD =                new CharacterNames('Cape Toad',)
    public static readonly BALLOON_TOAD =             new CharacterNames('Balloon Toad',)
    public static readonly PROPELLER_TOAD =           new CharacterNames('Propeller Toad',)
    public static readonly FLYING_SQUIRREL_TOAD =     new CharacterNames('Flying Squirrel Toad',)
    public static readonly CAT_TOAD =                 new CharacterNames('Cat Toad',)
    public static readonly BUILDER_TOAD =             new CharacterNames('Builder Toad',)
    public static readonly BOOMERANG_TOAD =           new CharacterNames('Boomerang Toad',)
    public static readonly BUZZY_TOAD =               new CharacterNames('Buzzy Toad',)
    public static readonly SPINY_TOAD =               new CharacterNames('Spiny Toad',)

    public static readonly TOADETTE =                 new CharacterNames('Toadette',)
    public static readonly SMALL_TOADETTE =           new CharacterNames('Small Toadette',)
    public static readonly SUPER_TOADETTE =           new CharacterNames('Super Toadette',)
    public static readonly FIRE_TOADETTE =            new CharacterNames('Fire Toadette',)
    public static readonly SUPERBALL_TOADETTE =       new CharacterNames('Superball Toadette',)
    public static readonly GIANT_TOADETTE =           new CharacterNames('Giant Toadette',)
    public static readonly SMB2_TOADETTE =            new CharacterNames('SMB2 Toadette',)
    public static readonly RACCOON_TOADETTE =         new CharacterNames('Raccoon Toadette',)
    public static readonly FROG_TOADETTE =            new CharacterNames('Frog Toadette',)
    public static readonly CAPE_TOADETTE =            new CharacterNames('Cape Toadette',)
    public static readonly BALLOON_TOADETTE =         new CharacterNames('Balloon Toadette',)
    public static readonly PROPELLER_TOADETTE =       new CharacterNames('Propeller Toadette',)
    public static readonly FLYING_SQUIRREL_TOADETTE = new CharacterNames('Flying Squirrel Toadette',)
    public static readonly CAT_TOADETTE =             new CharacterNames('Cat Toadette',)
    public static readonly BUILDER_TOADETTE =         new CharacterNames('Builder Toadette',)
    public static readonly BOOMERANG_TOADETTE =       new CharacterNames('Boomerang Toadette',)
    public static readonly BUZZY_TOADETTE =           new CharacterNames('Buzzy Toadette',)
    public static readonly SPINY_TOADETTE =           new CharacterNames('Spiny Toadette',)


    public static readonly LINK =                     new CharacterNames('Link',)
    public static readonly ZELDA =                    new CharacterNames('Zelda',)

    public static readonly PEACH =                    new CharacterNames('Peach',)
    public static readonly DAISY =                    new CharacterNames('Daisy',)
    public static readonly YOSHI =                    new CharacterNames('Yoshi',)

    public static readonly DONKEY_KONG =              new CharacterNames('Donkey Kong',)

    public static readonly PRINCESS_PEACH =           new CharacterNames('Princess Peach',)
    public static readonly RED_TOAD =                 new CharacterNames('Red Toad',)
    public static readonly GREEN_TOAD =               new CharacterNames('Green Toad',)
    public static readonly BLUE_TOAD =                new CharacterNames('Blue Toad',)
    public static readonly PURPLE_TOAD =              new CharacterNames('Purple Toad',)
    public static readonly YELLOW_TOAD =              new CharacterNames('Yellow Toad',)


    public static readonly UNDODOG_SMM =              new CharacterNames('Undodog', 'Undodog (SMM)',)
    public static readonly UNDODOG_SMM2 =             new CharacterNames('Undodog', 'Undodog (SMM2)',)
    public static readonly YAMAMURA =                 new CharacterNames('Yamamura',)
    public static readonly MARY_O =                   new CharacterNames('Mary O.',)
    public static readonly NINA =                     new CharacterNames('Nina',)
    public static readonly PARAKEET =                 new CharacterNames('Parakeet',)
    public static readonly MR_ERASER =                new CharacterNames('Mr. Eraser',)
    public static readonly SOUND_FROG_SMM =           new CharacterNames('Soundfrog', 'Soundfrog (SMM)')
    public static readonly SOUND_FROG_SMM2 =          new CharacterNames('Soundfrog', 'Soundfrog (SMM2)',)
    public static readonly PARTRICK =                 new CharacterNames('Partrick',)

    public static readonly THE_TASKMASTER =           new CharacterNames('The Taskmaster',)
    public static readonly THE_GAMEMASTER =           new CharacterNames('The Gamemaster',)
    public static readonly LEGENDARY_EXPLORER =       new CharacterNames('Legendary Explorer',)
    public static readonly STARGAZER =                new CharacterNames('Stargazer',)

    public static readonly FATHER_OF_NAME_WITHHELD =  new CharacterNames('Father of Name Withheld',)
    public static readonly NAME_WITHHELF_BY_REQUEST = new CharacterNames('Name Withheld by Request',)
    public static readonly A_CERTAIN_MAGE =           new CharacterNames('A Certain Mage',)
    public static readonly MISCHIVEOUS_MOLE =         new CharacterNames('Mischievous Mole',)

    public static readonly AGENT_1 =                  new CharacterNames('Agent 1',)
    public static readonly AGENT_2 =                  new CharacterNames('Agent 2',)
    public static readonly CELEBRITY_MC =             new CharacterNames('Celebrity MC',)
    public static readonly CELEBRITY_DJ =             new CharacterNames('Celebrity DJ',)

    public static readonly DOCTOR_GIZMO =             new CharacterNames('Doctor Gizmo',)
    public static readonly YOUTHFUL_RESEARCHER =      new CharacterNames('Youthful Researcher',)

    public static readonly GOOMBA_LOVER =             new CharacterNames('Goomba Lover',)
    public static readonly SNAKE_BLOCK_ENTHUSIAST =   new CharacterNames('Snake Block Enthusiast',)
    public static readonly LONELY_FARMER =            new CharacterNames('Lonely Farmer',)
    public static readonly AMATEUR_METEOROLOGIST =    new CharacterNames('Amateur Meteorologist',)
    public static readonly ECCENTRIC_MILLIONAIRE =    new CharacterNames('Eccentric Millionaire',)
    public static readonly P_E_TEACHER =              new CharacterNames('P.E. Teacher',)
    public static readonly ROOKIE_CARPENTER =         new CharacterNames('Rookie Carpenter',)
    public static readonly VETERAN_CARPENTER =        new CharacterNames('Veteran Carpenter',)
    public static readonly OCEAN_AFICIONADO =         new CharacterNames('Ocean Aficionado',)
    public static readonly WARRIOR_DAD =              new CharacterNames('Warrior Dad',)
    public static readonly FIRED_UP_ANNOUNCER =       new CharacterNames('Fired-Up Announcer',)
    public static readonly WORLD_RENOWNED_CHEF =      new CharacterNames('World-Renowned Chef',)
    public static readonly BASEMENT_MUSICIAN =        new CharacterNames('Basement Musician',)
    public static readonly YOUNG_DREAMER =            new CharacterNames('Young Dreamer',)
    public static readonly RULER_OF_THE_SKIES =       new CharacterNames('Ruler of the Skies',)
    public static readonly GENERAL_CONTRACTOR =       new CharacterNames('General Contractor',)


    public static readonly COURSEBOT =                new CharacterNames('Coursebot',)
    public static readonly WORLDBOT =                 new CharacterNames('Worldbot',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    public static readonly CompanionEnum: CompanionEnumByNameWithValidationSingleton<CharacterNames, typeof CharacterNames> = class CompanionEnum_CharacterNames
        extends CompanionEnumByNameWithValidation<CharacterNames, typeof CharacterNames> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_CharacterNames

        private constructor() {
            super(CharacterNames,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_CharacterNames()
        }

        //endregion -------------------- Singleton usage --------------------

        public override getValueByName(value: Nullable<| CharacterNames | string>,): CharacterNames {
            return getValueByEnglishName(value, this,)
        }

        public override hasValueByName(value: Nullable<| CharacterNames | string>,): boolean {
            if (value == null)
                return false
            if (value instanceof this.instance)
                return true
            return hasByArray(this.instance.everyEnglishNames, value,)
        }

    }

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleUniqueEnglishName, CharacterName>

    #reference?: CharacterName
    readonly #englishName
    readonly #uniqueEnglishName
    #editorVoiceSound?: NullOr<EditorVoiceSound>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName,)
    private constructor(englishName: PossibleEnglishName, uniqueEnglishName: PossibleUniqueEnglishName,)
    private constructor(englishName: PossibleEnglishName, uniqueEnglishName: PossibleUniqueEnglishName = englishName as PossibleUniqueEnglishName,) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#uniqueEnglishName = uniqueEnglishName
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleUniqueEnglishName, CharacterName> {
        return this.#REFERENCE_MAP ??= CharacterNameLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): CharacterName {
        return this.#reference ??= CharacterNames.REFERENCE_MAP.get(this.uniqueEnglishName)!
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get uniqueEnglishName(): PossibleUniqueEnglishName {
        return this.#uniqueEnglishName
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    //region -------------------- editor sound --------------------

    public get editorVoiceSoundFileHolder(): NullOr<EditorVoiceSound> {
        if (this.#editorVoiceSound !== undefined)
            return this.#editorVoiceSound
        if (EditorVoiceCompanion.hasReference(this,))
            return this.#editorVoiceSound = EditorVoiceCompanion.getValueByCharacterName(this,).editorVoiceSoundFileHolder
        return this.#editorVoiceSound = null
    }

    //endregion -------------------- editor sound --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace CharacterNames {

    /** The companion instance of a {@link CharacterNames} */
    export const Companion = CharacterNames.CompanionEnum.get

    export const everyEnglishNames = Companion.values.map(it => it.englishName,).toArray()

    export const ALL = Companion.values.toArray()

}

// @ts-ignore: TODO remove this test variable when the application will be complete
(window.test ??= {}).CharacterNames = CharacterNames
