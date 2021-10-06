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
import SMM2NameComponent               from '../entity/lang/SMM2NameComponent';

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
            if (entityLimit != entityLimit.alternativeContainer) {
                content.push([englishName,
                    <>{index}</>,
                    <TextContainer content={EveryLimitsApp.__getAcronym(entityLimit)}/>,
                    <SMM2NameComponent id="name" name={entityLimit} popoverOrientation="bottom"/>,
                    <SMM2NameComponent id="name" name={entityLimit.alternativeContainer} popoverOrientation="bottom"/>,
                    <PossiblyKnownTextContainer content={entityLimit.amount} isKnown={!entityLimit.isAmountUnknown}/>,
                    <GameContentTranslationComponent>{translation => <span>{translation(entityLimit.type.englishCommonText)}</span>}</GameContentTranslationComponent>,
                ]);
                index++;
            }
        }
        return content;
    }

    protected _mainContent(): JSX.Element {
        return <Table
            id="entityLimit_table"
            caption={<GameContentTranslationComponent translationKey="Every entity limits"/>}
            headers={[
                '#',
                {key: 'acronym', element: <ContentTranslationComponent translationKey="Acronym(s)"/>,},
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
                {key: 'alternativeName', element: <ContentTranslationComponent translationKey="Alternative name"/>,},
                {key: 'limit', element: <ContentTranslationComponent translationKey="Limit"/>,},
                {key: 'type', element: <ContentTranslationComponent translationKey="Type"/>,},
            ]}
            content={this.content}/>;
    }

}