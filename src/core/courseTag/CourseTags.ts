import {Enum} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {ClassWithReference}                   from 'core/ClassWithReference'
import type {CourseTag}                            from 'core/courseTag/CourseTag'
import type {Names, Ordinals, PossibleEnglishName} from 'core/courseTag/CourseTags.types'
import type {CompanionEnumByNameSingleton}         from 'util/enumerable/Singleton.types'

import {CourseTagLoader}                from 'core/courseTag/CourseTag.loader'
import {StringContainer}                from 'util/StringContainer'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

export class CourseTags
    extends Enum<Ordinals, Names>
    implements ClassWithReference<CourseTag>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly NONE =               new CourseTags('None',)
    public static readonly STANDARD =           new CourseTags('Standard',)
    public static readonly PUZZLE_SOLVING =     new CourseTags('Puzzle-solving',)
    public static readonly SPEEDRUN =           new CourseTags('Speedrun',)

    public static readonly AUTOSCROLL =         new CourseTags('Autoscroll',)
    public static readonly AUTO_MARIO =         new CourseTags('Auto-Mario',)

    public static readonly ONE_SCREEN =         new CourseTags('One screen',)
    public static readonly SHORT_AND_SWEET =    new CourseTags('Short and sweet',)
    public static readonly PRECISION =          new CourseTags('Precision',)
    public static readonly SHOOTER =            new CourseTags('Shooter',)

    public static readonly SINGLE_PLAYER =      new CourseTags('Single player',)
    public static readonly MULTIPLAYER =        new CourseTags('Multiplayer',)
    public static readonly LOCAL_MULTIPLAYER =  new CourseTags('Local Multiplayer',)
    public static readonly ONLINE_MULTIPLAYER = new CourseTags('Online Multiplayer',)
    public static readonly MULTIPLAYER_VERSUS = new CourseTags('Multiplayer Versus',)
    public static readonly MULTIPLAYER_COOP =   new CourseTags('Multiplayer Co-op',)

    public static readonly THEMED =             new CourseTags('Themed',)
    public static readonly MUSIC =              new CourseTags('Music',)
    public static readonly ART =                new CourseTags('Art',)
    public static readonly PIXEL_ART =          new CourseTags('Pixel art',)
    public static readonly SHOWCASE =           new CourseTags('Showcase',)
    public static readonly STORY =              new CourseTags('Story',)
    public static readonly EXPLORATION =        new CourseTags('Exploration',)
    public static readonly TECHNICAL =          new CourseTags('Technical',)

    public static readonly BOSS_BATTLE =        new CourseTags('Boss battle',)
    public static readonly LINK =               new CourseTags('Link',)

    public static readonly GLITCH =             new CourseTags('Glitch',)
    public static readonly TROLL =              new CourseTags('Troll',)
    public static readonly KAIZO =              new CourseTags('Kaizo',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<CourseTags, typeof CourseTags> = class CompanionEnum_CourseTags
        extends CompanionEnumByEnglishNameOnly<CourseTags, typeof CourseTags> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_CourseTags

        private constructor() {
            super(CourseTags,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_CourseTags()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, CourseTag>

    #reference?: CourseTag
    readonly #englishNameContainer

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super()
        this.#englishNameContainer = new StringContainer(englishName)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP() {
        return this.#REFERENCE_MAP ??= CourseTagLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): CourseTag {
        return this.#reference ??= CourseTags.REFERENCE_MAP.get(this.englishName,)!
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace CourseTags {// eslint-disable-line @typescript-eslint/no-namespace

    /** The companion instance of a {@link CourseTags} */
    export const Companion = CourseTags.CompanionEnum.get

    export const ALL = Companion.values.toArray()

    export const OFFICIALS = [
        CourseTags.NONE, CourseTags.STANDARD, CourseTags.PUZZLE_SOLVING, CourseTags.SPEEDRUN,
        CourseTags.AUTOSCROLL, CourseTags.AUTO_MARIO,
        CourseTags.SHORT_AND_SWEET, CourseTags.SHOOTER,
        CourseTags.SINGLE_PLAYER, CourseTags.MULTIPLAYER_VERSUS,
        CourseTags.THEMED, CourseTags.MUSIC, CourseTags.ART, CourseTags.TECHNICAL,
        CourseTags.BOSS_BATTLE, CourseTags.LINK,
    ] as const

    export const UNOFFICIALS = [
        CourseTags.ONE_SCREEN,
        CourseTags.PRECISION,
        CourseTags.MULTIPLAYER, CourseTags.LOCAL_MULTIPLAYER, CourseTags.ONLINE_MULTIPLAYER, CourseTags.MULTIPLAYER_COOP,
        CourseTags.PIXEL_ART, CourseTags.SHOWCASE, CourseTags.STORY, CourseTags.EXPLORATION,
        CourseTags.GLITCH, CourseTags.TROLL, CourseTags.KAIZO,
    ] as const

    export const MAKER_CENTRAL = [
        CourseTags.STANDARD, CourseTags.PUZZLE_SOLVING, CourseTags.SPEEDRUN,
        CourseTags.AUTOSCROLL, CourseTags.AUTO_MARIO,
        CourseTags.SHORT_AND_SWEET, CourseTags.SHOOTER,
        CourseTags.SINGLE_PLAYER, CourseTags.MULTIPLAYER,
        CourseTags.THEMED, CourseTags.MUSIC, CourseTags.PIXEL_ART, CourseTags.TECHNICAL,
        CourseTags.BOSS_BATTLE, CourseTags.LINK,
    ] as const

}

// @ts-ignore: TODO remove this test variable when the application will be complete
(window.test ??= {}).CourseTags = CourseTags
