import EveryEntitiesApp              from '../app/EveryEntitiesApp';
import EveryEntityCategoriesApp      from '../app/EveryEntityCategoriesApp';
import EveryEntityGroupApp           from '../app/EveryEntityGroupApp';
import EveryGameStylesApp            from '../app/EveryGameStylesApp';
import EveryLimitsApp                from '../app/EveryLimitsApp';
import EverySoundEffectCategoriesApp from '../app/EverySoundEffectCategoriesApp';
import EverySoundEffectsApp          from '../app/EverySoundEffectsApp';
import EveryThemesApp                from '../app/EveryThemesApp';
import HomeApp                       from '../app/HomeApp';
import {SimpleRouteContainer}        from './SimpleRouteContainer';

export const everySimpleRoutes = [
    SimpleRouteContainer.newInstance('home',                       '/home',                       () => <HomeApp/>,                     ),

    SimpleRouteContainer.newInstance('everyEntities',              '/every/entity',               () => <EveryEntitiesApp/>,            ),
    SimpleRouteContainer.newInstance('everyGameStyles',            '/every/gameStyle',            () => <EveryGameStylesApp/>,          ),
    SimpleRouteContainer.newInstance('everyCategories',            '/every/entity/category',      () => <EveryEntityCategoriesApp/>,    ),
    SimpleRouteContainer.newInstance('everyGroups',                '/every/entity/group',         () => <EveryEntityGroupApp/>,         ),
    SimpleRouteContainer.newInstance('everyLimits',                '/every/limit',                () => <EveryLimitsApp/>,              ),
    SimpleRouteContainer.newInstance('everyThemes',                '/every/theme',                () => <EveryThemesApp/>,              ),

    SimpleRouteContainer.newInstance('everySoundEffects',          '/every/soundEffect',          ()=> <EverySoundEffectsApp/>,         ),
    SimpleRouteContainer.newInstance('everySoundEffectCategories', '/every/soundEffect/category', ()=> <EverySoundEffectCategoriesApp/>,),
] as const;
