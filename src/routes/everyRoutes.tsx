import {lazy} from 'react';

import {SimpleRouteContainer} from './SimpleRoute.container';

const AboutApp =                       lazy(() => import('../app/AboutApp'));
const EveryEntitiesApp =               lazy(() => import('../app/EveryEntitiesApp'));
const EveryEntityCategoriesApp =       lazy(() => import('../app/EveryEntityCategoriesApp'));
const EveryEntityGroupApp =            lazy(() => import('../app/EveryEntityGroupApp'));
const EveryGameStylesApp =             lazy(() => import('../app/EveryGameStylesApp'));
const EveryGameReferencesApp =         lazy(() => import('../app/EveryGameReferencesApp'));
const EveryLimitsApp =                 lazy(() => import('../app/EveryLimitsApp'));
const EveryMiiCostumeApp =             lazy(() => import('../app/EveryMiiCostumeApp'));
const EveryMysteryMushroomsApp =       lazy(() => import('../app/EveryMysteryMushroomsApp'));
const EverySoundEffectCategoriesApp =  lazy(() => import('../app/EverySoundEffectCategoriesApp'));
const EverySoundEffectsApp =           lazy(() => import('../app/EverySoundEffectsApp'));
const EveryThemesApp =                 lazy(() => import('../app/EveryThemesApp'));
const HomeApp =                        lazy(() => import('../app/HomeApp'));
const SourcesApp =                     lazy(() => import('../app/SourcesApp'));

export const everySimpleRoutes = [
    SimpleRouteContainer.newInstance('home',                       '/home',                       () => <HomeApp/>,                     ),
    SimpleRouteContainer.newInstance('about',                      '/about',                      () => <AboutApp/>,                    ),
    SimpleRouteContainer.newInstance('sources',                    '/sources',                    () => <SourcesApp/>,                  ),

    SimpleRouteContainer.newInstance('everyGameReferences',        '/every/gameReference',        () => <EveryGameReferencesApp/>,      ),
    SimpleRouteContainer.newInstance('everyEntities',              '/every/entity',               () => <EveryEntitiesApp/>,            ),
    SimpleRouteContainer.newInstance('everyGameStyles',            '/every/gameStyle',            () => <EveryGameStylesApp/>,          ),
    SimpleRouteContainer.newInstance('everyCategories',            '/every/entity/category',      () => <EveryEntityCategoriesApp/>,    ),
    SimpleRouteContainer.newInstance('everyGroups',                '/every/entity/group',         () => <EveryEntityGroupApp/>,         ),
    SimpleRouteContainer.newInstance('everyLimits',                '/every/limit',                () => <EveryLimitsApp/>,              ),
    SimpleRouteContainer.newInstance('everyThemes',                '/every/theme',                () => <EveryThemesApp/>,              ),

    SimpleRouteContainer.newInstance('everySoundEffects',          '/every/soundEffect',          ()=> <EverySoundEffectsApp/>,         ),
    SimpleRouteContainer.newInstance('everySoundEffectCategories', '/every/soundEffect/category', ()=> <EverySoundEffectCategoriesApp/>,),

    SimpleRouteContainer.newInstance('everyMiiCostumes',           '/every/miiCostume',           ()=> <EveryMiiCostumeApp/>,           ),

    SimpleRouteContainer.newInstance('everyMysteryMushrooms',      '/every/mysteryMushroom',      ()=> <EveryMysteryMushroomsApp/>,     ),
] as const;
