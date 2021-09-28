import React from 'react';

import EveryEntitiesApp         from '../app/EveryEntitiesApp';
import EveryEntityCategoriesApp from '../app/EveryEntityCategoriesApp';
import EveryEntityGroupApp      from '../app/EveryEntityGroupApp';
import EveryGameStylesApp       from '../app/EveryGameStylesApp';
import EveryLimitsApp           from '../app/EveryLimitsApp';
import EveryThemesApp           from '../app/EveryThemesApp';
import HomeApp                  from '../app/HomeApp';
import {SimpleRouteContainer}   from './SimpleRouteContainer';

export const everySimpleRoutes = [
    SimpleRouteContainer.newInstance('home',            '/home',            () => <HomeApp/>,                 ),
    SimpleRouteContainer.newInstance('everyEntities',   '/every/entity',    () => <EveryEntitiesApp/>,        ),
    SimpleRouteContainer.newInstance('everyGameStyles', '/every/gameStyle', () => <EveryGameStylesApp/>,      ),
    SimpleRouteContainer.newInstance('everyCategories', '/every/category',  () => <EveryEntityCategoriesApp/>,),
    SimpleRouteContainer.newInstance('everyGroups',     '/every/group',     () => <EveryEntityGroupApp/>,     ),
    SimpleRouteContainer.newInstance('everyLimits',     '/every/limit',     () => <EveryLimitsApp/>,          ),
    SimpleRouteContainer.newInstance('everyThemes',     '/every/theme',     () => <EveryThemesApp/>,          ),
];
