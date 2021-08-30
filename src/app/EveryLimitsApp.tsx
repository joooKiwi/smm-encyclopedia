import React from 'react';

import type {SingleTableContent} from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EntityLimit}                   from '../entity/limit/EntityLimit';
import {EntityLimitLoader}             from '../entity/limit/EntityLimitLoader';
import {EntityLimits}                  from '../entity/limit/EntityLimits';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import PossiblyKnownTextContainer      from './tools/text/PossiblyKnownTextContainer';
import Table                           from './tools/table/Table';
import TextContainer                   from './tools/text/TextContainer';

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

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const [englishName, entityLimit,] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                <TextContainer content={EveryLimitsApp.__getAcronym(entityLimit)}/>,
                <GameContentTranslationComponent translationCallback={translation => translation(entityLimit.fullName)}/>,
                entityLimit.alternativeName == null ? <></> : <GameContentTranslationComponent translationCallback={translation => translation(entityLimit.alternativeName!)}/>,
                <PossiblyKnownTextContainer content={entityLimit.amount} isKnown={!entityLimit.isAmountUnknown}/>,
                <GameContentTranslationComponent isInSpan={true} translationCallback={translation => translation(entityLimit.type.englishCommonText)}/>,
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
                {key: 'type', element: <ContentTranslationComponent translationCallback={translation => translation('Type')}/>,},
            ]}
            content={this.content}/>;
    }

}