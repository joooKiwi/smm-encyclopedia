import React from 'react';

import AbstractApp                from './AbstractApp';
import {EntityLimit}              from '../entity/limit/EntityLimit';
import {EntityLimitLoader}        from '../entity/limit/EntityLimitLoader';
import EveryTranslationsComponent from '../lang/components/EveryTranslationsComponent';
import {SingleTableContent}       from './tools/table/Table';
import TableWithTranslations      from './tools/table/TableWithTranslations';

export default class EveryLimitsApp
    extends AbstractApp {

    #limits?: Map<string, EntityLimit>;


    protected get map() {
        return this.#limits ?? (this.#limits = EntityLimitLoader.get.load());
    }

    private static __getAcronym(entityLimit: EntityLimit,): '' | EntityLimit['acronym'] | `${EntityLimit['acronym']} / ${EntityLimit['alternativeAcronym']}` {
        return entityLimit.alternativeAcronym == null
            ? entityLimit.acronym == null
                ? ''
                : entityLimit.acronym
            : `${entityLimit.acronym} / ${entityLimit.alternativeAcronym}`;
    }

    protected content(translation: EveryTranslationsComponent,) {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const [englishName, entityTheme,] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                <span>{EveryLimitsApp.__getAcronym(entityTheme)}</span>,
                <>{entityTheme.fullName ?? ''}</>,//<>{translation.gameContentTranslation(entityTheme.fullName ?? '')}</>,
                <>{entityTheme.alternativeName ?? ''}</>,//<>{translation.gameContentTranslation(entityTheme.alternativeName ?? '')}</>,
            ]);
            index++;
        }
        return content;
    }

    protected _mainContent(): JSX.Element {
        return <TableWithTranslations renderCallback={translations => ({
            id: 'entityLimit_table',
            caption: translations.gameContentTranslation('Every entity limits'),
            headers: [
                '#',
                translations.contentTranslation('Acronym(s)'),
                translations.contentTranslation('Full name'),
                translations.contentTranslation('Alternative name'),
            ],
            content: this.content(translations),
        })}>
        </TableWithTranslations>;
    }

}