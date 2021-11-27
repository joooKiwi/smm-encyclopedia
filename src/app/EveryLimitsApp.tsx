import type {EntityLimit}         from '../entity/limit/EntityLimit';
import type {PossibleEnglishName} from '../entity/limit/EntityLimits.types';
import type {SingleTableContent}  from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EntityLimitLoader}             from '../entity/limit/EntityLimit.loader';
import {EntityLimits}                  from '../entity/limit/EntityLimits';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import NameComponent                   from '../lang/name/Name.component';
import Table                           from './tools/table/Table';
import TextComponent                   from './tools/text/TextComponent';

/**
 * @reactComponent
 */
export default class EveryLimitsApp
    extends AbstractApp {

    //region -------------------- Attributes & getter methods --------------------

    #map?: ReadonlyMap<PossibleEnglishName, EntityLimit>;

    protected get map() {
        return this.#map ??= EntityLimitLoader.get.load();
    }

    protected get enum() {
        return EntityLimits.values;
    }

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

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
            if (entityLimit !== entityLimit.alternativeContainer) {
                content.push([englishName,
                    <>{index}</>,
                    <TextComponent content={EveryLimitsApp.__getAcronym(entityLimit)}/>,
                    <NameComponent id="name" name={entityLimit} popoverOrientation="bottom"/>,
                    <NameComponent id="alternativeName" name={entityLimit.alternativeContainer} popoverOrientation="bottom"/>,
                    <TextComponent content={entityLimit.amount} isUnknown={entityLimit.isAmountUnknown}/>,
                    <GameContentTranslationComponent>{translation => <span>{translation(entityLimit.type.englishCommonText)}</span>}</GameContentTranslationComponent>,
                ]);
                index++;
            }
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        return <Table
            id="entityLimit-table"
            caption={<GameContentTranslationComponent translationKey="Every entity limits"/>}
            headers={[
                [
                    {key: 'originalOrder', height: 2, element: <>#</>,},
                    {key: 'acronym', height: 2, element: <ContentTranslationComponent translationKey="Acronym(s)"/>,},
                    {key: 'names', width: 2, element: <ContentTranslationComponent translationKey="Name"/>,},
                    {key: 'limit', height: 2, element: <ContentTranslationComponent translationKey="Limit"/>,},
                    {key: 'type', height: 2, element: <ContentTranslationComponent translationKey="Type"/>,},
                ],
                [
                    {key: 'name', element: EMPTY_REACT_ELEMENT,},
                    {key: 'alternativeName', element: <ContentTranslationComponent translationKey="Alternative name"/>,},
                ]
            ]}
            content={this.content}/>;
    }

}
