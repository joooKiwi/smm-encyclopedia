import {lazy} from 'react';

import {SimpleRouteContainer} from './SimpleRoute.container';

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
const SourceApp =                  lazy(() => import('../app/SourceApp'));

export const everySimpleRoutes = [
    SimpleRouteContainer.newInstance('home',                       '/home',                       () => <HomeApp/>,                    ),
    SimpleRouteContainer.newInstance('about',                      '/about',                      () => <AboutApp/>,                   ),
    SimpleRouteContainer.newInstance('sources',                    '/sources',                    () => <SourceApp/>,                  ),

    SimpleRouteContainer.newInstance('everyPowerUp&RidePriority',  'every/power-up+ride/priority', () => <PowerUpAndRidePriorityApp/>, ),
    SimpleRouteContainer.newInstance('everyPowerUpPriority',       'every/power-up/priority',      () => <PowerUpAndRidePriorityApp/>, ),//TODO add EveryPowerUpPriorityApp
    SimpleRouteContainer.newInstance('everyRidePriority',          'every/ride/priority',          () => <PowerUpAndRidePriorityApp/>, ),//TODO add EveryRidePriorityApp

    SimpleRouteContainer.newInstance('everyGameReferences',        '/every/gameReference',        () => <GameReferenceApp/>,           ),
    SimpleRouteContainer.newInstance('everyEntities',              '/every/entity',               () => <EntityApp/>,                  ),
    SimpleRouteContainer.newInstance('everyGameStyles',            '/every/gameStyle',            () => <GameStyleApp/>,               ),
    SimpleRouteContainer.newInstance('everyCategories',            '/every/entity/category',      () => <EntityCategoryApp/>,          ),
    SimpleRouteContainer.newInstance('everyGroups',                '/every/entity/group',         () => <EntityGroupApp/>,             ),
    SimpleRouteContainer.newInstance('everyLimits',                '/every/entity/limit',         () => <EntityLimitApp/>,             ),
    SimpleRouteContainer.newInstance('everyThemes',                '/every/theme',                () => <ThemeApp/>,                   ),

    SimpleRouteContainer.newInstance('everySoundEffects',          '/every/soundEffect',          () => <SoundEffectApp/>,             ),
    SimpleRouteContainer.newInstance('everySoundEffectCategories', '/every/soundEffect/category', () => <SoundEffectCategoryApp/>,     ),

    SimpleRouteContainer.newInstance('everyMiiCostumes',           '/every/miiCostume',           () => <MiiCostumeApp/>,              ),
    SimpleRouteContainer.newInstance('everyMiiCostumeCategories',  '/every/miiCostume/category',  () => <MiiCostumeCategoryApp/>,      ),

    SimpleRouteContainer.newInstance('everyMysteryMushrooms',      '/every/mysteryMushroom',      () => <MysteryMushroomApp/>,         ),

    SimpleRouteContainer.newInstance('everyPredefinedMessages',    '/every/PredefinedMessage',    () => <PredefinedMessageApp/>,       ),
    SimpleRouteContainer.newInstance('everyCourseTags',            '/every/courseTag',            () => <CourseTagApp/>,               ),
    SimpleRouteContainer.newInstance('everyInstruments',           '/every/instrument',           () => <InstrumentApp/>,              ),
] as const;
