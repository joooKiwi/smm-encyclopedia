import {lazy} from 'react';

import {SimpleRouteContainer} from './SimpleRoute.container';

const AboutApp =                        lazy(() => import('../app/AboutApp'));
const EveryPredefinedMessagesApp =      lazy(() => import('../app/EveryPredefinedMessagesApp'));
const EveryCourseTagsApp =              lazy(() => import('../app/EveryCourseTagsApp'));
const EveryEntitiesApp =                lazy(() => import('../app/EveryEntitiesApp'));
const EveryEntityCategoriesApp =        lazy(() => import('../app/EveryEntityCategoriesApp'));
const EveryEntityGroupApp =             lazy(() => import('../app/EveryEntityGroupApp'));
const EveryGameStylesApp =              lazy(() => import('../app/EveryGameStylesApp'));
const EveryGameReferencesApp =          lazy(() => import('../app/EveryGameReferencesApp'));
const EveryEntityLimitsApp =            lazy(() => import('../app/EveryEntityLimitsApp'));
const EveryInstrumentsApp =             lazy(() => import('../app/EveryInstrumentsApp'));
const EveryMiiCostumeApp =              lazy(() => import('../app/EveryMiiCostumeApp'));
const EveryMiiCostumeCategoriesApp =    lazy(() => import('../app/EveryMiiCostumeCategoriesApp'));
const EveryMysteryMushroomsApp =        lazy(() => import('../app/EveryMysteryMushroomsApp'));
const EveryPowerUpAndRidePriorityApp =  lazy(() => import('../app/EveryPowerUpAndRidePriorityApp'));
const EverySoundEffectCategoriesApp =   lazy(() => import('../app/EverySoundEffectCategoriesApp'));
const EverySoundEffectsApp =            lazy(() => import('../app/EverySoundEffectsApp'));
const EveryThemesApp =                  lazy(() => import('../app/EveryThemesApp'));
const HomeApp =                         lazy(() => import('../app/HomeApp'));
const SourcesApp =                      lazy(() => import('../app/SourcesApp'));

export const everySimpleRoutes = [
    SimpleRouteContainer.newInstance('home',                       '/home',                       () => <HomeApp/>,                      ),
    SimpleRouteContainer.newInstance('about',                      '/about',                      () => <AboutApp/>,                     ),
    SimpleRouteContainer.newInstance('sources',                    '/sources',                    () => <SourcesApp/>,                   ),

    SimpleRouteContainer.newInstance('everyPowerUp&RidePriority',  'every/power-up+ride/priority', () => <EveryPowerUpAndRidePriorityApp/>, ),
    SimpleRouteContainer.newInstance('everyPowerUpPriority',       'every/power-up/priority',      () => <EveryPowerUpAndRidePriorityApp/>, ),//TODO add EveryPowerUpPriorityApp
    SimpleRouteContainer.newInstance('everyRidePriority',          'every/ride/priority',          () => <EveryPowerUpAndRidePriorityApp/>, ),//TODO add EveryRidePriorityApp

    SimpleRouteContainer.newInstance('everyGameReferences',        '/every/gameReference',        () => <EveryGameReferencesApp/>,       ),
    SimpleRouteContainer.newInstance('everyEntities',              '/every/entity',               () => <EveryEntitiesApp/>,             ),
    SimpleRouteContainer.newInstance('everyGameStyles',            '/every/gameStyle',            () => <EveryGameStylesApp/>,           ),
    SimpleRouteContainer.newInstance('everyCategories',            '/every/entity/category',      () => <EveryEntityCategoriesApp/>,     ),
    SimpleRouteContainer.newInstance('everyGroups',                '/every/entity/group',         () => <EveryEntityGroupApp/>,          ),
    SimpleRouteContainer.newInstance('everyLimits',                '/every/entity/limit',         () => <EveryEntityLimitsApp/>,        ),
    SimpleRouteContainer.newInstance('everyThemes',                '/every/theme',                () => <EveryThemesApp/>,               ),

    SimpleRouteContainer.newInstance('everySoundEffects',          '/every/soundEffect',          () => <EverySoundEffectsApp/>,         ),
    SimpleRouteContainer.newInstance('everySoundEffectCategories', '/every/soundEffect/category', () => <EverySoundEffectCategoriesApp/>,),

    SimpleRouteContainer.newInstance('everyMiiCostumes',           '/every/miiCostume',           () => <EveryMiiCostumeApp/>,           ),
    SimpleRouteContainer.newInstance('everyMiiCostumeCategories',  '/every/miiCostume/category',  () => <EveryMiiCostumeCategoriesApp/>, ),

    SimpleRouteContainer.newInstance('everyMysteryMushrooms',      '/every/mysteryMushroom',      () => <EveryMysteryMushroomsApp/>,     ),

    SimpleRouteContainer.newInstance('everyPredefinedMessages',    '/every/PredefinedMessage',    () => <EveryPredefinedMessagesApp/>,   ),
    SimpleRouteContainer.newInstance('everyCourseTags',            '/every/courseTag',            () => <EveryCourseTagsApp/>,           ),
    SimpleRouteContainer.newInstance('everyInstruments',           '/every/instrument',           () => <EveryInstrumentsApp/>,          ),
] as const;
