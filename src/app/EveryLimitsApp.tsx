import type {EntityLimit}          from '../entity/limit/EntityLimit';
import type {PossibleEntityLimits} from '../entity/limit/EntityLimits.types';
import type {SingleTableContent}   from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EntityLimitLoader}             from '../entity/limit/EntityLimit.loader';
import {EntityLimits}                  from '../entity/limit/EntityLimits';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import PossiblyKnownTextContainer      from './tools/text/PossiblyKnownTextContainer';
import Table                           from './tools/table/Table';
import TextComponent                   from './tools/text/TextComponent';
import SMM2NameComponent               from '../entity/lang/SMM2Name.component';

/**
 * @reactComponent
 */
export default class EveryLimitsApp
    extends AbstractApp {

    //region -------------------- Attributes & getter methods --------------------

    #map?: ReadonlyMap<PossibleEntityLimits, EntityLimit>;

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

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
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
