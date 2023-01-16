import {lazy} from 'react'

import {RouteGroupContainer}    from 'routes/RouteGroup.container'
import {SimpleRouteContainer}   from 'routes/SimpleRoute.container'

//region -------------------- Dynamic imports --------------------

const AboutApp =                  lazy(() => import('app/AboutApp'))
const PredefinedMessageApp =      lazy(() => import('app/PredefinedMessageApp'))
const CourseTagApp =              lazy(() => import('app/CourseTagApp'))
const EntityApp =                 lazy(() => import('app/EntityApp'))
const EntityCategoryApp =         lazy(() => import('app/EntityCategoryApp'))
const EntityGroupApp =            lazy(() => import('app/EntityGroupApp'))
const GameStyleApp =              lazy(() => import('app/GameStyleApp'))
const GameReferenceApp =          lazy(() => import('app/GameReferenceApp'))
const EntityLimitApp =            lazy(() => import('app/EntityLimitApp'))
const InstrumentApp =             lazy(() => import('app/InstrumentApp'))
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
const {newInstance: group,} = RouteGroupContainer

//endregion -------------------- Deconstruction imports --------------------
//region -------------------- Route functions --------------------

/**
 * Create the redirect paths for 2 different paths.
 *
 * One as "entity limit" and the other as "limit".
 *
 * @param limits The limit names & paths
 */
function createLimitRedirects<NAME extends string, PATH extends string, >(...limits: readonly (readonly [NAME, PATH,])[]): readonly (readonly [`${NAME}${| '' | 'Entity'}Limit`, `/${PATH}/${| '' | 'entity-'}limit`,])[] {
    return limits.map(([name, path,]) => [
        [`${name}Limit`, `/${path}/limit`,],
        [`${name}EntityLimit`, `/${path}/entity-limit`,],
    ] as const).flat()
}

//endregion -------------------- Route functions --------------------

export const everySimpleRoutes = [
    route(    'home',                       '/home',                        () => <HomeApp/>,),
    route(    'about',                      '/about',                       () => <AboutApp/>,),
    route(    'sources',                    '/sources',                     () => <SourcesApp/>,),


    route(    'everyPowerUp&RidePriority',  'every/power-up+ride/priority', () => <PowerUpAndRidePriorityApp/>,),
    route(    'everyPowerUpPriority',       'every/power-up/priority',      () => <PowerUpAndRidePriorityApp/>,),//TODO add EveryPowerUpPriorityApp
    route(    'everyRidePriority',          'every/ride/priority',          () => <PowerUpAndRidePriorityApp/>,),//TODO add EveryRidePriorityApp


    route(    'everyGameReferences',        '/every/game-reference',        () => <GameReferenceApp/>,),
    route(    'everyEntities',              '/every/entity',                () => <EntityApp/>,),
    route(    'everyGameStyles',            '/every/gameStyle',             () => <GameStyleApp/>,),
    route(    'everyCategories',            '/every/entity-category',       () => <EntityCategoryApp/>,),
    route(    'everyGroups',                '/every/entity-group',          () => <EntityGroupApp/>,),

    ...group( 'everyLimits',                '/every/limit',                 () => <EntityLimitApp type="all"/>,    ['everyEntityLimits', '/every/entity-limit',],).all,
    ...group( 'playLimits',                 '/play/limit',                  () => <EntityLimitApp type="play"/>,   ['playEntityLimits', '/play/entity-limit',], ...createLimitRedirects(['playing', 'playing',], ['whilePlaying', 'while-playing',],),).all,
    ...group( 'editorLimits',               '/editor/limit',                () => <EntityLimitApp type="editor"/>, ['playEntityLimits', '/play/entity-limit',],...createLimitRedirects(['inEditor', 'in-editor',], ['inTheEditor', 'in-the-editor',],),).all,

    route(    'everyThemes',                '/every/theme',                 () => <ThemeApp/>,),


    route(    'everySoundEffects',          '/every/sound-effect',          () => <SoundEffectApp/>,),
    route(    'everySoundEffectCategories', '/every/sound-effect-category', () => <SoundEffectCategoryApp/>,),


    route(    'everyMiiCostumes',           '/every/mii-costume',           () => <MiiCostumeApp/>,),
    route(    'everyMiiCostumeCategories',  '/every/mii-costume-category',  () => <MiiCostumeCategoryApp/>,),


    route(    'everyMysteryMushrooms',      '/every/mystery-mushroom',      () => <MysteryMushroomApp/>,),


    route(    'everyPredefinedMessages',    '/every/predefined-message',    () => <PredefinedMessageApp/>,),

    route(    'everyCourseTags',            'every/course-tag',             () => <CourseTagApp type="all"/>,),
    route(    'officialCourseTags',         'official/course-tag',          () => <CourseTagApp type="official"/>,),
    route(    'unofficialCourseTags',       'unofficial/course-tag',        () => <CourseTagApp type="unofficial"/>,),
    route(    'makerCentralCourseTags',     'maker-central/course-tag',     () => <CourseTagApp type="makerCentral"/>,),

    route(    'everyInstruments',           '/every/instrument',            () => <InstrumentApp/>,),
] as const
