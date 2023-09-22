import type {CollectionHolder, CollectionIterator}              from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {ClassWithReference}                   from 'core/ClassWithReference'
import type {CourseTag}                            from 'core/courseTag/CourseTag'
import type {Names, Ordinals, PossibleEnglishName} from 'core/courseTag/CourseTags.types'

import {CourseTagLoader}       from 'core/courseTag/CourseTag.loader'
import {StringContainer}       from 'util/StringContainer'
import {getValueByEnglishName} from 'util/utilitiesMethods'

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

    public static readonly CompanionEnum: CompanionEnumSingleton<CourseTags, typeof CourseTags> = class CompanionEnum_CourseTags
        extends CompanionEnum<CourseTags, typeof CourseTags> {

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
    static #officialCourseTags?: readonly CourseTags[]
    static #unofficialCourseTags?: readonly CourseTags[]
    static #makerCentralCourseTags?: readonly CourseTags[]

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
        return this.#reference ??= CourseTags.REFERENCE_MAP.get(this.englishName)!
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get officialCourseTags(): readonly CourseTags[] {
        return this.#officialCourseTags ??= [
            this.NONE, this.STANDARD, this.PUZZLE_SOLVING, this.SPEEDRUN,
            this.AUTOSCROLL, this.AUTO_MARIO,
            this.SHORT_AND_SWEET, this.SHOOTER,
            this.SINGLE_PLAYER, this.MULTIPLAYER_VERSUS,
            this.THEMED, this.MUSIC, this.ART, this.TECHNICAL,
            this.BOSS_BATTLE, this.LINK,
        ]
    }

    public static get unofficialCourseTags(): readonly CourseTags[] {
        return this.#unofficialCourseTags ??= this.values.filter(it => !this.officialCourseTags.includes(it)).toArray()
    }

    public static get makerCentralCourseTags(): readonly CourseTags[] {
        return this.#makerCentralCourseTags ??= this.values.filter(it => it.reference.makerCentralName != null).toArray()
    }

    public static getValueByName(value: Nullable<| CourseTags | string>,) {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<CourseTags>,): CourseTags {
        return CourseTags.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<CourseTags> {
        return CourseTags.CompanionEnum.get.values
    }

    public static [Symbol.iterator](): CollectionIterator<CourseTags> {
        return CourseTags.CompanionEnum.get[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
