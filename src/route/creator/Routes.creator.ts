import type {Route}                                                 from 'route/instance/Route'
import type {GroupValidUrlValue as PossibleValidGroupUrlValue_Game} from 'core/game/Games.types'
import type {PossibleUrlValue as PossibleUrl_ViewDisplay}           from 'app/withInterpreter/ViewDisplays.types'

import {ViewDisplays}              from 'app/withInterpreter/ViewDisplays'
import {Games}                     from 'core/game/Games'
import {SimpleRoute}               from 'route/instance/SimpleRoute'
import {RoutesAsAnyGameCreator}    from 'route/creator/RoutesAsAnyGame.creator'
import {RoutesAsCardListCreator}   from 'route/creator/RoutesAsCardList.creator'
import {RoutesAsSimpleListCreator} from 'route/creator/RoutesAsSimpleList.creator'
import {RoutesAsTableCreator}      from 'route/creator/RoutesAsTable.creator'
import {assert}                    from 'util/utilitiesMethods'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_MAKER_1: SMM1, SUPER_MARIO_MAKER_FOR_NINTENDO_3DS: SMM3DS, SUPER_MARIO_MAKER_2: SMM2,} = Games

//endregion -------------------- Import from deconstruction --------------------

/**
 * The first chain of the {@link Route} creation.
 *
 * By default, it returns only 1 {@link Route},
 * but the options can be:
 *  - A selected {@link ViewDisplays}
 *  - One or multiple {@link Games}
 *
 * @chainOfResponsibility
 * @startingChain
 */
export class RoutesCreator<NAME extends string, PATH extends string, > {

    //region -------------------- Fields --------------------

    public static readonly SMM1_ONLY_GAMES = [SMM1,] as const
    public static readonly SMM3DS_ONLY_GAMES = [SMM3DS,] as const
    public static readonly SMM2_ONLY_GAMES = [SMM2,] as const
    public static readonly SMM1_AND_SMM3DS_GAMES = [SMM1, SMM3DS,] as const
    public static readonly SMM1_AND_SMM2_GAMES = [SMM1, SMM2,] as const
    public static readonly SMM3DS_AND_SMM2_GAMES = [SMM3DS, SMM2,] as const
    public static readonly ALL_GAMES = [SMM1, SMM3DS, SMM2,] as const

    public static readonly DEFAULT_GAME_PATH = '2'

    readonly #name
    readonly #path

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: NAME, path: PATH,) {
        this.#name = name
        this.#path = path
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get name(): NAME {
        return this.#name
    }

    public get path(): PATH {
        return this.#path
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Get the url value with development validation for the url value for a "simple list"
     *
     * @throws {AssertionError} The {@link defaultViewDisplay} was not {@link ViewDisplays.SIMPLE_LIST}
     */
    public static getUrlAsSimpleList(viewDisplay: ViewDisplays,): Extract<PossibleUrl_ViewDisplay, 'list'>
    public static getUrlAsSimpleList(viewDisplay: ViewDisplays,): PossibleUrl_ViewDisplay {
        assert(viewDisplay === ViewDisplays.SIMPLE_LIST, `The "view display" ${viewDisplay} is not of a type "SIMPLE_LIST".`)
        return viewDisplay.urlValue
    }

    /**
     * Get the url value with development validation for the url value for a list (simple or card)
     *
     * @throws {AssertionError} The {@link defaultViewDisplay} was not either {@link ViewDisplays.SIMPLE_LIST} or {@link ViewDisplays.CARD_LIST}
     */
    public static getUrlAsCardList(viewDisplay: ViewDisplays,): Exclude<PossibleUrl_ViewDisplay, 'table'>
    public static getUrlAsCardList(viewDisplay: ViewDisplays,): PossibleUrl_ViewDisplay {
        assert(viewDisplay !== ViewDisplays.TABLE, `The "view display" ${viewDisplay} is not of a type "SIMPLE_LIST" or a "CARD_LIST".`)
        return viewDisplay.urlValue
    }

    /** Get the url value for the url value of any "{@link ViewDisplays view display}" possible */
    public static getUrlAsTable(viewDisplay: ViewDisplays,): PossibleUrl_ViewDisplay {
        return viewDisplay.urlValue
    }


    /**
     * Put the routes to be applicable as a {@link ViewDisplays.SIMPLE_LIST simple list}
     *
     * @see asCardList
     * @see asTable
     */
    public asSimpleList(): RoutesAsSimpleListCreator<NAME, PATH> {
        return new RoutesAsSimpleListCreator(this,)
    }

    /**
     * Put the routes to be applicable as a list ({@link ViewDisplays.SIMPLE_LIST simple} or {@link ViewDisplays.CARD_LIST card})
     *
     * @param defaultViewDisplay The default {@link ViewDisplays view display} as a list (simple or card)
     * @see asSimpleList
     * @see asTable
     */
    public asCardList(defaultViewDisplay?: ViewDisplays,): RoutesAsCardListCreator<NAME, PATH> {
        return new RoutesAsCardListCreator(this, defaultViewDisplay,)
    }

    /**
     * Put the routes to be applicable to any {@link ViewDisplays} possible
     * ({@link ViewDisplays.SIMPLE_LIST simple list}, {@link ViewDisplays.CARD_LIST card list} or {@link ViewDisplays.TABLE table})
     *
     * @param defaultViewDisplay The default {@link ViewDisplays view display} as a
     *   {@link ViewDisplays.SIMPLE_LIST simple list}, {@link ViewDisplays.CARD_LIST card list} or {@link ViewDisplays.TABLE table}
     */
    public asTable(defaultViewDisplay?: ViewDisplays,): RoutesAsTableCreator<NAME, PATH> {
        return new RoutesAsTableCreator(this, defaultViewDisplay,)
    }


    /**
     * Put the routes to be applicable to any {@link Games game} by keeping its game paths
     *
     * @param defaultRoutePath The default {@link Games.selectedGames} to be used
     */
    public asAnyGame(defaultRoutePath?: PossibleValidGroupUrlValue_Game,): RoutesAsAnyGameCreator<NAME, PATH> {
        return new RoutesAsAnyGameCreator(this, defaultRoutePath,)
    }


    /**
     * Create a single route encapsulated in an {@link Array}
     *
     * @param renderCallback The callback to render the selected application
     */
    public create(renderCallback: () => JSX.Element,): readonly [Route<NAME, PATH>,] {
        return [new SimpleRoute(this.name, this.path, renderCallback,),]
    }

    //endregion -------------------- Methods --------------------

}
