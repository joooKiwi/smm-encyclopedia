import type {ClassWithEnglishName}                                                                                                                                                                       from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                         from '../ClassWithReference';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './CourseTags.types';
import type {CourseTag}                                                                                                                                                                                  from './CourseTag';
import type {StaticReference}                                                                                                                                                                            from '../../util/enum/Enum.types';

import {Enum}            from '../../util/enum/Enum';
import {Import}          from '../../util/DynamicImporter';
import {StringContainer} from '../../util/StringContainer';

/**
 * @recursiveReference {@link CourseTagLoader}
 * @classWithDynamicImport {@link CourseTagLoader}
 */
export class CourseTags
    extends Enum<Ordinals, Names>
    implements ClassWithReference<CourseTag>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static/* readonly*/ NONE;
    public static/* readonly*/ STANDARD;
    public static/* readonly*/ PUZZLE_SOLVING;
    public static/* readonly*/ SPEEDRUN;

    public static/* readonly*/ AUTOSCROLL;
    public static/* readonly*/ AUTO_MARIO;

    public static/* readonly*/ ONE_SCREEN;
    public static/* readonly*/ SHORT_AND_SWEET;
    public static/* readonly*/ PRECISION;
    public static/* readonly*/ SHOOTER;

    public static/* readonly*/ SINGLE_PLAYER;
    public static/* readonly*/ MULTIPLAYER_VERSUS;
    public static/* readonly*/ MULTIPLAYER_COOP;

    public static/* readonly*/ THEMED;
    public static/* readonly*/ MUSIC;
    public static/* readonly*/ ART;
    public static/* readonly*/ SHOWCASE;
    public static/* readonly*/ STORY;
    public static/* readonly*/ EXPLORATION;
    public static/* readonly*/ TECHNICAL;

    public static/* readonly*/ BOSS_BATTLE;
    public static/* readonly*/ LINK;

    public static/* readonly*/ GLITCH;
    public static/* readonly*/ TROLL;
    public static/* readonly*/ KAIZO;

    static {
        this.NONE =               new CourseTags('None',);
        this.STANDARD =           new CourseTags('Standard',);
        this.PUZZLE_SOLVING =     new CourseTags('Puzzle-solving',);
        this.SPEEDRUN =           new CourseTags('Speedrun',);

        this.AUTOSCROLL =         new CourseTags('Autoscroll',);
        this.AUTO_MARIO =         new CourseTags('Auto-Mario',);

        this.ONE_SCREEN =         new CourseTags('One screen',);
        this.SHORT_AND_SWEET =    new CourseTags('Short and sweet',);
        this.PRECISION =          new CourseTags('Precision',);
        this.SHOOTER =            new CourseTags('Shooter',);

        this.SINGLE_PLAYER =      new CourseTags('Single player',);
        this.MULTIPLAYER_VERSUS = new CourseTags('Multiplayer Versus',);
        this.MULTIPLAYER_COOP =   new CourseTags('Multiplayer Co-op',);

        this.THEMED =             new CourseTags('Themed',);
        this.MUSIC =              new CourseTags('Music',);
        this.ART =                new CourseTags('Art',);
        this.SHOWCASE =           new CourseTags('Showcase',);
        this.STORY =              new CourseTags('Story',);
        this.EXPLORATION =        new CourseTags('Exploration',);
        this.TECHNICAL =          new CourseTags('Technical',);

        this.BOSS_BATTLE =        new CourseTags('Boss battle',);
        this.LINK =               new CourseTags('Link',);

        this.GLITCH =             new CourseTags('Glitch',);
        this.TROLL =              new CourseTags('Troll',);
        this.KAIZO =              new CourseTags('Kaizo',);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: CourseTags;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, CourseTag>;

    #reference?: CourseTag;
    readonly #englishNameContainer;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super();
        this.#englishNameContainer = new StringContainer(englishName);
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP() {
        return this.#REFERENCE_MAP ??= Import.CourseTagLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): CourseTag {
        return this.#reference ??= CourseTags.REFERENCE_MAP.get(this.englishName)!;
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishName(): readonly PossibleEnglishName[] {
        return this.values.map(limit => limit.englishName);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<CourseTags> {
        return CourseTags;
    }

    //region -------------------- Enum value methods --------------------

    public static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null;
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
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
