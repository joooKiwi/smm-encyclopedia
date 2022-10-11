import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                      from '../ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                                                                                                                                                                        from '../ClassWithReference'
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, MakerCentralCourseTags, Names, OfficialCourseTags, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleOfficialEnglishName, PossibleStringValue, PossibleValue, UnofficialCourseTags} from './CourseTags.types'
import type {CourseTag}                                                                                                                                                                                                                                                                                 from './CourseTag'
import type {StaticReference}                                                                                                                                                                                                                                                                           from '../../util/enum/Enum.types'

import {Enum}            from '../../util/enum/Enum'
import {Import}          from '../../util/DynamicImporter'
import {StringContainer} from '../../util/StringContainer'

/**
 * @recursiveReference {@link CourseTagLoader}
 * @classWithDynamicImport {@link CourseTagLoader}
 */
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
    //region -------------------- Enum fields --------------------

    static [index: number]: CourseTags

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, CourseTag>
    static #officialCourseTags?: OfficialCourseTags
    static #unofficialCourseTags?: UnofficialCourseTags
    static #makerCentralCourseTags?: MakerCentralCourseTags

    #reference?: CourseTag
    readonly #englishNameContainer

    //endregion -------------------- Fields --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super()
        this.#englishNameContainer = new StringContainer(englishName)
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP() {
        return this.#REFERENCE_MAP ??= Import.CourseTagLoader.get.load()
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

    public static get everyOfficialEnglishName(): readonly PossibleOfficialEnglishName[] {
        return this.officialCourseTags.map(limit => limit.englishName as PossibleOfficialEnglishName)
    }


    public static get officialCourseTags(): OfficialCourseTags {
        return this.#officialCourseTags ??= [
            this.NONE, this.STANDARD, this.PUZZLE_SOLVING, this.SPEEDRUN,
            this.AUTOSCROLL, this.AUTO_MARIO,
            this.SHORT_AND_SWEET, this.SHOOTER,
            this.SINGLE_PLAYER, this.MULTIPLAYER_VERSUS,
            this.THEMED, this.MUSIC, this.ART, this.TECHNICAL,
            this.BOSS_BATTLE, this.LINK,
        ]
    }

    public static get unofficialCourseTags(): UnofficialCourseTags {
        return this.#unofficialCourseTags ??= this.values.filter(enumerable => !this.officialCourseTags.includes(enumerable)) as unknown as UnofficialCourseTags
    }

    public static get makerCentralCourseTags(): MakerCentralCourseTags {
        return this.#makerCentralCourseTags ??= this.values.filter(enumerable => enumerable.reference.makerCentralName != null) as unknown as MakerCentralCourseTags
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<CourseTags> {
        return CourseTags
    }

    //region -------------------- Enum value methods --------------------

    public static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends CourseTags = CourseTags, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): CourseTags
    public static getValue(value: PossibleValue,): | CourseTags | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this)
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
