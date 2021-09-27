import React from 'react';

import type {SimpleRoute} from './SimpleRoute';

import EveryEntitiesApp         from '../app/EveryEntitiesApp';
import EveryEntityCategoriesApp from '../app/EveryEntityCategoriesApp';
import EveryEntityGroupApp      from '../app/EveryEntityGroupApp';
import EveryGameStylesApp       from '../app/EveryGameStylesApp';
import EveryLimitsApp           from '../app/EveryLimitsApp';
import EveryThemesApp           from '../app/EveryThemesApp';
import HomeApp                  from '../app/HomeApp';

export const everySimpleRoutes: SimpleRoute[] = [
    {path: '/home',            renderCallback: () => <HomeApp/>,                 },
    {path: '/every/entity',    renderCallback: () => <EveryEntitiesApp/>,        },
    {path: '/every/gameStyle', renderCallback: () => <EveryGameStylesApp/>,      },
    {path: '/every/category',  renderCallback: () => <EveryEntityCategoriesApp/>,},
    {path: '/every/group',     renderCallback: () => <EveryEntityGroupApp/>,     },
    {path: '/every/limit',     renderCallback: () => <EveryLimitsApp/>,          },
    {path: '/every/theme',     renderCallback: () => <EveryThemesApp/>,          },
];
