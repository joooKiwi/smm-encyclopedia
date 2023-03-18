import {lazy} from 'react'

import type {Names as ViewDisplayName} from 'app/withInterpreter/ViewDisplays.types'
import type {SimpleRoute}              from 'route/SimpleRoute'

import {SimpleRouteContainer} from 'route/SimpleRoute.container'

//region -------------------- Dynamic imports --------------------

const AboutApp =                  lazy(() => import('app/AboutApp'))
const PredefinedMessageApp =      lazy(() => import('app/PredefinedMessageApp'))
const CharacterNameApp =          lazy(() => import('app/CharacterNameApp'))
const CourseTagApp =              lazy(() => import('app/CourseTagApp'))
const EditorVoiceApp =            lazy(() => import('app/EditorVoiceApp'))
const EntityApp =                 lazy(() => import('app/EntityApp'))
const EntityCategoryApp =         lazy(() => import('app/EntityCategoryApp'))
const EntityGroupApp =            lazy(() => import('app/EntityGroupApp'))
const GameStyleApp =              lazy(() => import('app/GameStyleApp'))
const GameReferenceApp =          lazy(() => import('app/GameReferenceApp'))
const InstrumentApp =             lazy(() => import('app/InstrumentApp'))
const LimitApp =                  lazy(() => import('app/LimitApp'))
const MiiCostumeApp =             lazy(() => import('app/MiiCostumeApp'))
const MiiCostumeCategoryApp =     lazy(() => import('app/MiiCostumeCategoryApp'))
const MysteryMushroomApp =        lazy(() => import('app/MysteryMushroomApp'))
const PowerUpAndRidePriorityApp = lazy(() => import('app/PowerUpAndRidePriorityApp'))
const SoundEffectCategoryApp =    lazy(() => import('app/SoundEffectCategoryApp'))
const SoundEffectApp =            lazy(() => import('app/SoundEffectApp'))
const ThemeApp =                  lazy(() => import('app/ThemeApp'))
const HomeApp =                   lazy(() => import('app/HomeApp'))
const SourcesApp =                lazy(() => import('app/SourcesApp'))

//endregion -------------------- Dynamic imports --------------------
//region -------------------- Deconstruction imports --------------------

const {newInstance: route,} = SimpleRouteContainer
// const {newInstance: redirect,} = RedirectRouteContainer
// const {newInstance: group,} = RouteGroupContainer
// const {newInstance: argument,} = SimpleRouteArgumentContainer

//endregion -------------------- Deconstruction imports --------------------
//region -------------------- Route functions --------------------

/**
 * Create the redirect paths for 2 different paths.
 *
 * One as "entity limit" and the other as "limit".
 *
 * @param limits The limit names & paths
 */
// function createLimitRedirects<NAME extends string, PATH extends string, >(...limits: readonly (readonly [NAME, PATH,])[]): readonly SimpleRouteArgument<`${NAME}${| '' | 'Entity'}Limit`, `/${PATH}/${| '' | 'entity-'}limit`>[] {
//     return limits.map(([name, path,]) => [
//         argument(`${name}Limit`, `/${path}/limit`,),
//         argument(`${name}EntityLimit`, `/${path}/entity-limit`,),
//     ] as const).flat()
// }

//region -------------------- Route with different types functions --------------------

/** Get a name with "list" in parentheses */
const nameAsList = <NAME extends string, >(name: NAME,) => `${name} (list)` as const
/** Get a name with "card" in parentheses */
const nameAsCard = <NAME extends string, >(name: NAME,) => `${name} (card)` as const
/** Get a name with "table" in parentheses */
const nameAsTable = <NAME extends string, >(name: NAME,) => `${name} (table)` as const

/** Get a path with "list" before its path */
const pathAsList = <PATH extends string, >(path: PATH,) => `/list${path}` as const
/** Get a path with "card" before its path */
const pathAsCard = <PATH extends string, >(path: PATH,) => `/card${path}` as const
/** Get a path with "table" before its path */
const pathAsTable = <PATH extends string, >(path: PATH,) => `/table${path}` as const


function simpleListRoute<NAME extends string, PATH extends string, >(name: NAME, path: PATH, renderCallback: RenderCallback, defaultType: Extract<ViewDisplayName, 'SIMPLE_LIST'>,): readonly SimpleRoute<RouteName<NAME, SimpleListTypes>, RoutePath<PATH, SimpleListTypes>>[] {
    return [
        route(name, path, () => renderCallback(defaultType,),),
        route(nameAsList(name), pathAsList(path), () => renderCallback('SIMPLE_LIST',),),
    ]
}

function cardListRoute<NAME extends string, PATH extends string, >(name: NAME, path: PATH, renderCallback: RenderCallback, defaultType: Exclude<ViewDisplayName, 'TABLE'>,): readonly SimpleRoute<RouteName<NAME, CardListTypes>, RoutePath<PATH, CardListTypes>>[] {
    return [
        route(name, path, () => renderCallback(defaultType,),),
        route(nameAsList(name), pathAsList(path), () => renderCallback('SIMPLE_LIST',),),
        route(nameAsCard(name), pathAsCard(path), () => renderCallback('CARD_LIST',),),
    ]
}

function tableRoute<NAME extends string, PATH extends string, >(name: NAME, path: PATH, renderCallback: RenderCallback, defaultType: ViewDisplayName,): readonly SimpleRoute<RouteName<NAME, TableTypes>, RoutePath<PATH, TableTypes>>[] {
    return [
        route(name, path, () => renderCallback(defaultType,),),
        route(nameAsList(name), pathAsList(path), () => renderCallback('SIMPLE_LIST',),),
        route(nameAsCard(name), pathAsCard(path), () => renderCallback('CARD_LIST',),),
        route(nameAsTable(name), pathAsTable(path), () => renderCallback('TABLE',),),
    ]
}


type RouteName<NAME extends string, TYPE extends string, > = | NAME | `${NAME} (${TYPE})`
type RoutePath<PATH extends string, TYPE extends string, > = | PATH | `/${TYPE}${PATH}`
type SimpleListTypes = 'list'
type CardListTypes = | SimpleListTypes | 'card'
type TableTypes = | CardListTypes | 'table'
type RenderCallback = (type: ViewDisplayName,) => JSX.Element

//endregion -------------------- Route with different types functions --------------------
//endregion -------------------- Route functions --------------------

export const everySimpleRoutes = [
    route(          'home',                       '/home',                         () =>   <HomeApp/>,),
    route(          'about',                      '/about',                        () =>   <AboutApp/>,),
    route(          'sources',                    '/source',                       () =>   <SourcesApp/>,),


    route(          'everyPowerUp&RidePriority',  '/every/power-up+ride/priority', () =>   <PowerUpAndRidePriorityApp/>,),
    route(          'everyPowerUpPriority',       '/every/power-up/priority',      () =>   <PowerUpAndRidePriorityApp/>,),//TODO add EveryPowerUpPriorityApp
    route(          'everyRidePriority',          '/every/ride/priority',          () =>   <PowerUpAndRidePriorityApp/>,),//TODO add EveryRidePriorityApp


    cardListRoute(  'everyCharacterName',         '/every/character-name',         type => <CharacterNameApp typeDisplayed={type}/>,                         'CARD_LIST',),

    route(          'everyGameReference',         '/every/game-reference',         () =>   <GameReferenceApp/>,),
    tableRoute(     'everyEntity',                '/every/entity',                 type => <EntityApp              typeDisplayed={type}/>,                     'TABLE',),
    tableRoute(     'everyGameStyle',             '/every/game-style',             type => <GameStyleApp           typeDisplayed={type}/>,                     'TABLE',),
    cardListRoute(  'everyEntityCategory',        '/every/entity-category',        type => <EntityCategoryApp      typeDisplayed={type}/>,                     'CARD_LIST',),
    route(          'everyGroup',                 '/every/entity-group',           () =>   <EntityGroupApp/>,),

    tableRoute(     'everyLimit',                 '/every/limit',                  type => <LimitApp               typeDisplayed={type} type="all"/>,          'TABLE',),//argument('everyEntityLimits', '/entity-limit',)
    tableRoute(     'playLimit',                  '/play/limit',                   type => <LimitApp               typeDisplayed={type} type="play"/>,         'TABLE',),//argument('playEntityLimits', '/play/entity-limit',), ...createLimitRedirects(['playing', 'playing',], ['whilePlaying', 'while-playing',],)
    tableRoute(     'editorLimit',                '/editor/limit',                 type => <LimitApp               typeDisplayed={type} type="editor"/>,       'TABLE',),//argument('playEntityLimits', '/play/entity-limit',),...createLimitRedirects(['inEditor', 'in-editor',], ['inTheEditor', 'in-the-editor',],)

    tableRoute(     'everyTheme',                 '/every/theme',                  type => <ThemeApp               typeDisplayed={type} type="all"/>,          'CARD_LIST',),
    tableRoute(     'courseTheme',                '/course/theme',                 type => <ThemeApp               typeDisplayed={type} type="course"/>,       'CARD_LIST',),
    tableRoute(     'worldTheme',                 '/world/theme',                  type => <ThemeApp               typeDisplayed={type} type="world"/>,        'CARD_LIST',),


    tableRoute(     'everySoundEffect',           '/every/sound-effect',           type => <SoundEffectApp         typeDisplayed={type}/>,                     'TABLE',),
    cardListRoute(  'everySoundEffectCategory',   '/every/sound-effect-category',  type => <SoundEffectCategoryApp typeDisplayed={type}/>,                     'CARD_LIST',),


    tableRoute(     'everyMiiCostume',            '/every/mii-costume',            type => <MiiCostumeApp          typeDisplayed={type}/>,                     'TABLE',),
    cardListRoute(  'everyMiiCostumeCategory',    '/every/mii-costume-category',   type => <MiiCostumeCategoryApp  typeDisplayed={type}/>,                     'CARD_LIST',),


    tableRoute(     'everyMysteryMushroom',       '/every/mystery-mushroom',       type => <MysteryMushroomApp     typeDisplayed={type}/>,                     'CARD_LIST',),


    simpleListRoute('everyPredefinedMessage',     '/every/predefined-message',     type => <PredefinedMessageApp   typeDisplayed={type}/>,                     'SIMPLE_LIST',),

    cardListRoute(  'everyCourseTag',             '/every/course-tag',             type => <CourseTagApp           typeDisplayed={type} type="all"/>,          'CARD_LIST',),
    cardListRoute(  'officialCourseTag',          '/official/course-tag',          type => <CourseTagApp           typeDisplayed={type} type="official"/>,     'CARD_LIST',),
    cardListRoute(  'unofficialCourseTag',        '/unofficial/course-tag',        type => <CourseTagApp           typeDisplayed={type} type="unofficial"/>,   'CARD_LIST',),
    cardListRoute(  'makerCentralCourseTag',      '/maker-central/course-tag',     type => <CourseTagApp           typeDisplayed={type} type="makerCentral"/>, 'CARD_LIST',),

    cardListRoute(  'everyInstrument',            '/every/instrument',             type => <InstrumentApp          typeDisplayed={type}/>,                     'CARD_LIST',),

    cardListRoute(  'everyEditorVoice',           '/every/editor-voice',           type => <EditorVoiceApp         typeDisplayed={type}/>,                     'CARD_LIST',),
].flat()
