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
    SimpleRouteContainer.newInstance('/home',            () => <HomeApp/>,                 ),
    SimpleRouteContainer.newInstance('/every/entity',    () => <EveryEntitiesApp/>,        ),
    SimpleRouteContainer.newInstance('/every/gameStyle', () => <EveryGameStylesApp/>,      ),
    SimpleRouteContainer.newInstance('/every/category',  () => <EveryEntityCategoriesApp/>,),
    SimpleRouteContainer.newInstance('/every/group',     () => <EveryEntityGroupApp/>,     ),
    SimpleRouteContainer.newInstance('/every/limit',     () => <EveryLimitsApp/>,          ),
    SimpleRouteContainer.newInstance('/every/theme',     () => <EveryThemesApp/>,          ),
];
