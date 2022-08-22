import {lazy} from 'react';

import {SimpleRouteContainer} from './SimpleRoute.container';

//region -------------------- Dynamic imports --------------------

const AboutApp =                   lazy(() => import('../app/AboutApp'));
const PredefinedMessageApp =       lazy(() => import('../app/PredefinedMessageApp'));
const CourseTagApp =               lazy(() => import('../app/CourseTagApp'));
const EntityApp =                  lazy(() => import('../app/EntityApp'));
const EntityCategoryApp =          lazy(() => import('../app/EntityCategoryApp'));
const EntityGroupApp =             lazy(() => import('../app/EntityGroupApp'));
const GameStyleApp =               lazy(() => import('../app/GameStyleApp'));
const GameReferenceApp =           lazy(() => import('../app/GameReferenceApp'));
const EntityLimitApp =             lazy(() => import('../app/EntityLimitApp'));
const InstrumentApp =              lazy(() => import('../app/InstrumentApp'));
const MiiCostumeApp =              lazy(() => import('../app/MiiCostumeApp'));
const MiiCostumeCategoryApp =      lazy(() => import('../app/MiiCostumeCategoryApp'));
const MysteryMushroomApp =         lazy(() => import('../app/MysteryMushroomApp'));
const PowerUpAndRidePriorityApp =  lazy(() => import('../app/PowerUpAndRidePriorityApp'));
const SoundEffectCategoryApp =     lazy(() => import('../app/SoundEffectCategoryApp'));
const SoundEffectApp =             lazy(() => import('../app/SoundEffectApp'));
const ThemeApp =                   lazy(() => import('../app/ThemeApp'));
const HomeApp =                    lazy(() => import('../app/HomeApp'));
const SourcesApp =                 lazy(() => import('../app/SourcesApp'));

//endregion -------------------- Dynamic imports --------------------
//region -------------------- Applications parameter --------------------

const COURSE_TAG_PARAMETERS = [['every', 'every', 'all',],
    ['official', 'official', 'official',], ['noOfficial', 'no-official', 'noOfficial',], ['officialExcludingMakerCentral', 'official-excluding-maker-central', 'officialExcludingMakerCentral',],
    ['unofficial', 'unofficial', 'unofficial',], ['noUnofficial', 'no-unofficial', 'noUnofficial',], ['unofficialExcludingMakerCentral', 'unofficial-excluding-maker-central', 'unofficialExcludingMakerCentral',],
    ['makerCentral', 'maker-central', 'makerCentral',], ['noMakerCentral', 'no-maker-central', 'noMakerCentral',],
] as const;

//endregion -------------------- Applications parameter --------------------

export const everySimpleRoutes = [
    SimpleRouteContainer.newInstance(    'home',                       '/home',                        () => <HomeApp/>,                   ),
    SimpleRouteContainer.newInstance(    'about',                      '/about',                       () => <AboutApp/>,                  ),
    SimpleRouteContainer.newInstance(    'sources',                    '/sources',                     () => <SourcesApp/>,                ),

    SimpleRouteContainer.newInstance(    'everyPowerUp&RidePriority',  'every/power-up+ride/priority',  () => <PowerUpAndRidePriorityApp/>, ),
    SimpleRouteContainer.newInstance(    'everyPowerUpPriority',       'every/power-up/priority',       () => <PowerUpAndRidePriorityApp/>, ),//TODO add EveryPowerUpPriorityApp
    SimpleRouteContainer.newInstance(    'everyRidePriority',          'every/ride/priority',           () => <PowerUpAndRidePriorityApp/>, ),//TODO add EveryRidePriorityApp

    SimpleRouteContainer.newInstance(    'everyGameReferences',        '/every/game-reference',         () => <GameReferenceApp/>,           ),
    SimpleRouteContainer.newInstance(    'everyEntities',              '/every/entity',                 () => <EntityApp/>,                  ),
    SimpleRouteContainer.newInstance(    'everyGameStyles',            '/every/gameStyle',              () => <GameStyleApp/>,               ),
    SimpleRouteContainer.newInstance(    'everyCategories',            '/every/entity-category',        () => <EntityCategoryApp/>,          ),
    SimpleRouteContainer.newInstance(    'everyGroups',                '/every/entity-group',           () => <EntityGroupApp/>,             ),
    SimpleRouteContainer.newInstance(    'everyLimits',                '/every/entity-limit',           () => <EntityLimitApp/>,             ),
    SimpleRouteContainer.newInstance(    'everyThemes',                '/every/theme',                  () => <ThemeApp/>,                   ),

    SimpleRouteContainer.newInstance(    'everySoundEffects',          '/every/sound-effect',           () => <SoundEffectApp/>,             ),
    SimpleRouteContainer.newInstance(    'everySoundEffectCategories', '/every/sound-effect-category',  () => <SoundEffectCategoryApp/>,     ),

    SimpleRouteContainer.newInstance(    'everyMiiCostumes',           '/every/mii-costume',            () => <MiiCostumeApp/>,              ),
    SimpleRouteContainer.newInstance(    'everyMiiCostumeCategories',  '/every/mii-costume-category',   () => <MiiCostumeCategoryApp/>,      ),

    SimpleRouteContainer.newInstance(    'everyMysteryMushrooms',      '/every/mystery-mushroom',       () => <MysteryMushroomApp/>,         ),

    SimpleRouteContainer.newInstance(    'everyPredefinedMessages',    '/every/predefined-essage',      () => <PredefinedMessageApp/>,       ),
    ...COURSE_TAG_PARAMETERS.map(([name, routePath,type,]) =>
        SimpleRouteContainer.newInstance(`${name}CourseTags`,          `/${routePath}/course-tag`,      () => <CourseTagApp type={type}/>    )),
    SimpleRouteContainer.newInstance(    'everyInstruments',           '/every/instrument',             () => <InstrumentApp/>,              ),
] as const;
