import {lazy} from 'react'

import {CourseTagTypes}       from 'app/property/CourseTagTypes'
import {LimitTypes}           from 'app/property/LimitTypes'
import {PowerUpPriorityTypes} from 'app/property/PowerUpPriorityTypes'
import {ThemeTypes}           from 'app/property/ThemeTypes'
import {ViewDisplays}         from 'app/withInterpreter/ViewDisplays'
import {RoutesCreator}        from 'route/creator/Routes.creator'

//region -------------------- Dynamic imports --------------------

const AboutApp =                     lazy(() => import('app/AboutApp'))
const PredefinedMessageApp =         lazy(() => import('app/PredefinedMessageApp'))
const CharacterNameApp =             lazy(() => import('app/CharacterNameApp'))
const CourseTagApp =                 lazy(() => import('app/CourseTagApp'))
const EditorVoiceApp =               lazy(() => import('app/EditorVoiceApp'))
const EntityApp =                    lazy(() => import('app/EntityApp'))
const EntityCategoryApp =            lazy(() => import('app/EntityCategoryApp'))
const EntityGroupApp =               lazy(() => import('app/EntityGroupApp'))
const GameStyleApp =                 lazy(() => import('app/GameStyleApp'))
const GameReferenceApp =             lazy(() => import('app/GameReferenceApp'))
const InstrumentApp =                lazy(() => import('app/InstrumentApp'))
const LimitApp =                     lazy(() => import('app/LimitApp'))
const MiiCostumeApp =                lazy(() => import('app/MiiCostumeApp'))
const MiiCostumeCategoryApp =        lazy(() => import('app/MiiCostumeCategoryApp'))
const MysteryMushroomApp =           lazy(() => import('app/MysteryMushroomApp'))
const PowerUpRideAndHatPriorityApp = lazy(() => import('app/PowerUpRideAndHatPriorityApp'))
const SoundEffectCategoryApp =       lazy(() => import('app/SoundEffectCategoryApp'))
const SoundEffectApp =               lazy(() => import('app/SoundEffectApp'))
const ThemeApp =                     lazy(() => import('app/ThemeApp'))
const HomeApp =                      lazy(() => import('app/HomeApp'))
const SourcesApp =                   lazy(() => import('app/SourcesApp'))

//endregion -------------------- Dynamic imports --------------------
//region -------------------- Import from deconstruction --------------------

const {ALL: ALL_COURSE_TAG, OFFICIAL, UNOFFICIAL, MAKER_CENTRAL,} = CourseTagTypes
const {ALL: ALL_LIMIT, PLAY, EDITOR,} = LimitTypes
const {ALL: ALL_POWER_UP_PRIORITY, POWER_UP_AND_RIDE, POWER_UP_AND_HAT, RIDE_AND_HAT, POWER_UP, RIDE, HAT, NONE: NO_POWER_UP_PRIORITY,} = PowerUpPriorityTypes
const {ALL: ALL_THEME, COURSE, WORLD,} = ThemeTypes
const {CARD_LIST,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

export const everySimpleRoutes = [
    new RoutesCreator('home',                          '/home',).asAnyGame().create(() =>                                                                                    <HomeApp/>,),
    new RoutesCreator('about',                         '/about',).asAnyGame().create(() =>                                                                                   <AboutApp/>,),
    new RoutesCreator('sources',                       '/source',).asAnyGame().create(() =>                                                                                  <SourcesApp/>,),


    new RoutesCreator('everyPowerUp&Ride&HatPriority', '/every/power-up+ride+hat/priority',).asAnyGame().create(games =>                              <PowerUpRideAndHatPriorityApp games={games} type={ALL_POWER_UP_PRIORITY}/>,),
    new RoutesCreator('everyPowerUp&RidePriority',     '/every/power-up+ride/priority',).asAnyGame().create(games =>                                  <PowerUpRideAndHatPriorityApp games={games} type={POWER_UP_AND_RIDE}/>,),
    new RoutesCreator('everyPowerUp&HatPriority',      '/every/power-up+hat/priority',).asAnyGame().create(games =>                                   <PowerUpRideAndHatPriorityApp games={games} type={POWER_UP_AND_HAT}/>,),
    new RoutesCreator('everyRide&HatPriority',         '/every/ride+hat/priority',).asAnyGame().create(games =>                                       <PowerUpRideAndHatPriorityApp games={games} type={RIDE_AND_HAT}/>,),
    new RoutesCreator('everyPowerUpPriority',          '/every/power-up/priority',).asAnyGame().create(games =>                                       <PowerUpRideAndHatPriorityApp games={games} type={POWER_UP}/>,),
    new RoutesCreator('everyRidePriority',             '/every/ride/priority',).asAnyGame().create(games =>                                           <PowerUpRideAndHatPriorityApp games={games} type={RIDE}/>,),
    new RoutesCreator('everyHatPriority',              '/every/hat/priority',).asAnyGame().create(games =>                                            <PowerUpRideAndHatPriorityApp games={games} type={HAT}/>,),
    new RoutesCreator('noPriority',                    '/no/priority',).asAnyGame().create(games =>                                                   <PowerUpRideAndHatPriorityApp games={games} type={NO_POWER_UP_PRIORITY}/>,),


    new RoutesCreator('everyCharacterName',            '/every/character-name',).asCardList().asAnyGame().create(viewDisplay =>                                 <CharacterNameApp                           viewDisplay={viewDisplay}/>,),

    new RoutesCreator('everyGameReference',            '/every/game-reference',).asAnyGame().create(() =>                                                                    <GameReferenceApp/>,),
    new RoutesCreator('everyGameStyle',                '/every/game-style',).asTable().asAnyGame().create((viewDisplay, games,) =>       <GameStyleApp                 games={games} viewDisplay={viewDisplay}/>,),

    new RoutesCreator('everyEntity',                   '/every/entity',).asTable().asAnyGame().create(viewDisplay =>                                            <EntityApp                                  viewDisplay={viewDisplay}/>,),
    new RoutesCreator('everyEntityCategory',           '/every/entity-category',).asCardList().asAnyGame().create(viewDisplay =>                                <EntityCategoryApp                          viewDisplay={viewDisplay}/>,),
    new RoutesCreator('everyGroup',                    '/every/entity-group',).asAnyGame().create(() =>                                                                      <EntityGroupApp/>,),

    new RoutesCreator('everyLimit',                    '/every/limit',).asTable().asAnyGame().create((viewDisplay, games,) =>            <LimitApp                     games={games} viewDisplay={viewDisplay} type={ALL_LIMIT}/>,),
    new RoutesCreator('playLimit',                     '/play/limit',).asTable().asAnyGame().create((viewDisplay, games,) =>             <LimitApp                     games={games} viewDisplay={viewDisplay} type={PLAY}/>,),
    new RoutesCreator('editorLimit',                   '/editor/limit',).asTable().asAnyGame().create((viewDisplay, games,) =>           <LimitApp                     games={games} viewDisplay={viewDisplay} type={EDITOR}/>,),

    new RoutesCreator('everyTheme',                    '/every/theme',).asTable(CARD_LIST,).asAnyGame().create((viewDisplay, games,) =>  <ThemeApp                     games={games} viewDisplay={viewDisplay} type={ALL_THEME}/>,),
    new RoutesCreator('courseTheme',                   '/course/theme',).asTable(CARD_LIST,).asAnyGame().create((viewDisplay, games,) => <ThemeApp                     games={games} viewDisplay={viewDisplay} type={COURSE}/>,),
    new RoutesCreator('worldTheme',                    '/world/theme',).asTable(CARD_LIST,).asAnyGame().create((viewDisplay, games,) =>  <ThemeApp                     games={games} viewDisplay={viewDisplay} type={WORLD}/>,),


    new RoutesCreator('everySoundEffect',              '/every/sound-effect',).asTable().asAnyGame().create((viewDisplay, games,) =>     <SoundEffectApp               games={games} viewDisplay={viewDisplay}/>,),
    new RoutesCreator('everySoundEffectCategory',      '/every/sound-effect-category',).asCardList().asSMM2Game().create(viewDisplay =>                         <SoundEffectCategoryApp                     viewDisplay={viewDisplay}/>,),


    new RoutesCreator('everyMiiCostume',               '/every/mii-costume',).asTable().asSMM2Game().create(viewDisplay =>                                      <MiiCostumeApp                              viewDisplay={viewDisplay}/>,),
    new RoutesCreator('everyMiiCostumeCategory',       '/every/mii-costume-category',).asCardList().asSMM2Game().create(viewDisplay =>                          <MiiCostumeCategoryApp                      viewDisplay={viewDisplay}/>,),


    new RoutesCreator('everyMysteryMushroom',          '/every/mystery-mushroom',).asTable(CARD_LIST,).asSMM1Game().create(viewDisplay =>                       <MysteryMushroomApp                         viewDisplay={viewDisplay}/>,),


    new RoutesCreator('everyPredefinedMessage',        '/every/predefined-message',).asSimpleList().asSMM2Game().create(viewDisplay =>                          <PredefinedMessageApp                       viewDisplay={viewDisplay}/>,),

    new RoutesCreator('everyCourseTag',                '/every/course-tag',).asCardList().asSMM2Game().create(viewDisplay =>                                    <CourseTagApp                               viewDisplay={viewDisplay} type={ALL_COURSE_TAG}/>,),
    new RoutesCreator('officialCourseTag',             '/official/course-tag',).asCardList().asSMM2Game().create(viewDisplay =>                                 <CourseTagApp                               viewDisplay={viewDisplay} type={OFFICIAL}/>,),
    new RoutesCreator('unofficialCourseTag',           '/unofficial/course-tag',).asCardList().asSMM2Game().create(viewDisplay =>                               <CourseTagApp                               viewDisplay={viewDisplay} type={UNOFFICIAL}/>,),
    new RoutesCreator('makerCentralCourseTag',         '/maker-central/course-tag',).asCardList().asSMM2Game().create(viewDisplay =>                            <CourseTagApp                               viewDisplay={viewDisplay} type={MAKER_CENTRAL}/>,),

    new RoutesCreator('everyInstrument',               '/every/instrument',).asCardList().asAnyGame().create(viewDisplay =>                                     <InstrumentApp                              viewDisplay={viewDisplay}/>,),

    new RoutesCreator('everyEditorVoice',              '/every/editor-voice',).asCardList().asAnyGame().create((viewDisplay, games,) =>  <EditorVoiceApp               games={games} viewDisplay={viewDisplay}/>,),
].flat()

// @ts-ignore
// console.table(everySimpleRoutes.map(it => ({name:it.name,path:it.path,redirection:it.redirectPath,})))
