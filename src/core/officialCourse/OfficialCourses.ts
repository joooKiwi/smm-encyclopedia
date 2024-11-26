import {Enum} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {ClassWithReference}                   from 'core/ClassWithReference'
import type {OfficialCourse}                       from 'core/officialCourse/OfficialCourse'
import type {Names, Ordinals, PossibleEnglishName} from 'core/officialCourse/OfficialCourses.types'
import type {CompanionEnumByNameSingleton}         from 'util/enumerable/Singleton.types'

import {OfficialCourseLoader}           from 'core/officialCourse/OfficialCourse.loader'
import {StringContainer}                from 'util/StringContainer'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

/**
 * @todo Add references for the items retrieved
 */
export class OfficialCourses
    extends Enum<Ordinals, Names>
    implements ClassWithReference<OfficialCourse>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly NWC_2017 =                         new OfficialCourses('NWC-2017',)
    public static readonly DR_KAWASHIMA_ATHLETIC_TRAINING =   new OfficialCourses('Dr Kawashima’s Athletic Training',)
    public static readonly WALKIN_WITH_UNDODOG =              new OfficialCourses('Walkin’ with Undodog',)
    public static readonly SQUID_SISTER_VS_BLOOPERS =         new OfficialCourses('Squid Sisters vs. Bloopers',)
    public static readonly SHAUN_MOSSY_MOLE_MISCHIEF =        new OfficialCourses('Shaun’s Mossy Mole Mischief',)
    public static readonly HELLO_KITTY_AND_MY_MELODY =        new OfficialCourses('Hello Kitty & My Melody',)
    public static readonly POPO_AND_NANA_CLIMBING_CHALLENGE = new OfficialCourses('Popo & Nana’s Climbing Challenge',)
    public static readonly METAL_RESISTANCE =                 new OfficialCourses('METAL RESISTANCE',)
    public static readonly STARFY_PRINCE_OF_PUFFTOP =         new OfficialCourses('Starfy: Prince of Pufftop',)
    public static readonly YU_AYASAKI_BIG_ADVENTURE =         new OfficialCourses('♪Yu Ayasaki’s Big Adventure!♪',)
    public static readonly TOADETTE_TREASURE_TRACKER =        new OfficialCourses('Toadette: Treasure Tracker',)
    public static readonly TWILIGHT_PRINCESS_HD =             new OfficialCourses('Twilight Princess HD',)
    public static readonly MARY_O_LUNCH_BREAK =               new OfficialCourses('Mary O.’s Lunch Break',)
    public static readonly SECRETS_OF_STATUE_MARIO =          new OfficialCourses('Secrets of Statue Mario',)
    public static readonly BARBARA_IN_TOMATOLAND =            new OfficialCourses('Barbara in Tomatoland',)
    public static readonly NISEKOI_CHITOGE_AND_KOSAKIO =      new OfficialCourses('Nisekoi: Chitoge & Kosaki',)
    public static readonly NISEKOI_TSGUMI_AND_MARIKA =        new OfficialCourses('Nisekoi: Tsugumi & Marika',)
    public static readonly I_CHOOSE_YOU =                     new OfficialCourses('I Choose You!',)
    public static readonly TOKAIGI_2016_CONTEST_COURSE_1 =    new OfficialCourses('Tokaigi 2016 Contest Course 1',)
    public static readonly TOKAIGI_2016_CONTEST_COURSE_2 =    new OfficialCourses('Tokaigi 2016 Contest Course 2',)
    public static readonly TOKAIGI_2016_CONTEST_COURSE_3 =    new OfficialCourses('Tokaigi 2016 Contest Course 3',)
    public static readonly TOKAIGI_2016_CONTEST_COURSE_4 =    new OfficialCourses('Tokaigi 2016 Contest Course 4',)
    public static readonly PARANORMAL_RESEARCH =              new OfficialCourses('Paranormal Research',)
    public static readonly ADVENTURE_IN_SARASALAND =          new OfficialCourses('Adventure in Sarasaland',)
    public static readonly COOOOOO_FEAT_YAMAMURA =            new OfficialCourses('Cooooo! (Feat. Yamamura)',)
    public static readonly SOUDWEST_AIR_ADVENTURE =           new OfficialCourses('Soudwest Air Adventure',)
    public static readonly NES_REMIX_EXCITE_BIKE =            new OfficialCourses('NES REMIX (Excitebike)',)
    public static readonly NES_REMIX_SUPER_MARIO_BROS_2 =     new OfficialCourses('NES REMIX (Super Mario Bros. 2)',)
    public static readonly CAPTAIN_TOAD_TREASURE_TRACKER =    new OfficialCourses('Captain Toad: Treasure Tracker',)
    public static readonly WELCOME_TO_SATURN_VALLEY =         new OfficialCourses('Welcome to Saturn Valley',)
    public static readonly BELCH_BASE =                       new OfficialCourses('Belch Base',)
    public static readonly NINTENDO_BADGE_ARCADE =            new OfficialCourses('Nintendo Badge Arcade',)
    public static readonly MA_RIO_HILLS =                     new OfficialCourses('Ma Rio Hills',)
    public static readonly MERCEDES_BENZ_JUMP_N_DRIVE =       new OfficialCourses('Mercedes-Benz Jump’n’Drive',)
    public static readonly MARIO_AND_LUIGI_PAPER_JAM =        new OfficialCourses('Mario & Luigi: Paper Jam',)
    public static readonly NES_REMIX =                        new OfficialCourses('NES REMIX',)
    public static readonly PAX_WEST_2015_OMEGATHON_FINAL_RD = new OfficialCourses('PAX West 2015 Omegathon Final Rd',)
    public static readonly YOSHI_IS_AWESOME =                 new OfficialCourses('Yoshi Is Awesome',)
    public static readonly CAT_MARIO_COURSE =                 new OfficialCourses('Cat Mario’s Course',)
    public static readonly CAT_PEACH_COURSE =                 new OfficialCourses('Cat Peach’s Course',)
    public static readonly SUPER_MARIO_KUN_25TH_ANNIVERSARY = new OfficialCourses('SUPER MARIO KUN 25th Anniversary',)
    public static readonly TRI_FORCE_HEROES =                 new OfficialCourses('Tri Force Heroes',)
    public static readonly ARINO_MAKER =                      new OfficialCourses('Arino Maker',)
    public static readonly ARINO_MAKER_RETURNS =              new OfficialCourses('Arino Maker Returns',)
    public static readonly NEW_ARINO_MAKER =                  new OfficialCourses('New! Arino Maker',)
    public static readonly SUPER_BAKARHYTHM_LAND =            new OfficialCourses('Super Bakarhythm Land',)
    public static readonly SHIP_LOVE =                        new OfficialCourses('Ship Love',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<OfficialCourses, typeof OfficialCourses> = class CompanionEnum_OfficialCourses
        extends CompanionEnumByEnglishNameOnly<OfficialCourses, typeof OfficialCourses> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_OfficialCourses

        private constructor() {
            super(OfficialCourses,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_OfficialCourses()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, OfficialCourse>

    #reference?: OfficialCourse
    readonly #englishName

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    constructor(englishName: PossibleEnglishName,) {
        super()
        this.#englishName = new StringContainer(englishName,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, OfficialCourse> {
        return this.#REFERENCE_MAP ??= OfficialCourseLoader.get.load()
    }

    public get reference(): OfficialCourse {
        return this.#reference ??= OfficialCourses.REFERENCE_MAP.get(this.englishName,)!
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace OfficialCourses {

    /** The companion instance of a {@link OfficialCourses} */
    export const Companion = OfficialCourses.CompanionEnum.get

    export const ALL = Companion.values.toArray()

}

// @ts-ignore: TODO remove this test variable when the application will be complete
(window.test ??= {}).OfficialCourses = OfficialCourses
