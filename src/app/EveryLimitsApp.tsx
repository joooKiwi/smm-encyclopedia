import React from 'react';

import type{SingleTableContent} from './tools/table/Table';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EntityLimit}                   from '../entity/limit/EntityLimit';
import {EntityLimitLoader}             from '../entity/limit/EntityLimitLoader';
import {EntityLimits}                  from '../entity/limit/EntityLimits';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Table                           from './tools/table/Table';

export default class EveryLimitsApp
    extends AbstractApp {

    #limits?: Map<string, EntityLimit>;


    protected get map() {
        return this.#limits ??= EntityLimitLoader.get.load();
    }

    protected get enum() {
        return EntityLimits.values;
    }

    private static __getAcronym(entityLimit: EntityLimit,): '' | EntityLimit['acronym'] | `${EntityLimit['acronym']} / ${EntityLimit['alternativeAcronym']}` {
        return entityLimit.alternativeAcronym == null
            ? entityLimit.acronym == null
                ? ''
                : entityLimit.acronym
            : `${entityLimit.acronym} / ${entityLimit.alternativeAcronym}`;
    }

    private static __getLimit(entityLimit: EntityLimit): JSX.Element {
        const amount = String(entityLimit.amount ?? '') + (entityLimit.isAmountUnknown ? '?' : '');
        if (entityLimit.isAmountUnknown)
            return <span className="text-danger">{amount}</span>;
        return <span>{amount}</span>;
    }

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const [englishName, entityTheme,] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                <span>{EveryLimitsApp.__getAcronym(entityTheme)}</span>,
                <GameContentTranslationComponent translationCallback={translation => translation(entityTheme.fullName)}/>,
                entityTheme.alternativeName == null ? <></> : <GameContentTranslationComponent translationCallback={translation => translation(entityTheme.alternativeName!)}/>,
                EveryLimitsApp.__getLimit(entityTheme),
            ]);
            index++;
        }
        return content;
    }

    protected _mainContent(): JSX.Element {
        return <Table
            id="entityLimit_table"
            caption={<GameContentTranslationComponent translationCallback={translation => translation('Every entity limits')}/>}
            headers={[
                '#',
                {key: 'acronym', element: <ContentTranslationComponent translationCallback={translation => translation('Acronym(s)')}/>,},
                {key: 'fullName', element: <ContentTranslationComponent translationCallback={translation => translation('Full name')}/>,},
                {key: 'alternativeName', element: <ContentTranslationComponent translationCallback={translation => translation('Alternative name')}/>,},
                {key: 'limit', element: <ContentTranslationComponent translationCallback={translation => translation('Limit')}/>,},
            ]}
            content={this.content}/>;
    }

}