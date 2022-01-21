import type {EntityLimit}        from '../core/entityLimit/EntityLimit';
import type {SingleTableContent} from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EntityLimits}                  from '../core/entityLimit/EntityLimits';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import NameComponent                   from '../lang/name/component/Name.component';
import Table                           from './tools/table/Table';
import TextComponent                   from './tools/text/TextComponent';

/**
 * @reactComponent
 */
export default class EveryLimitsApp
    extends AbstractApp {

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
        for (const enumerable of EntityLimits) {
            const entityLimit = enumerable.reference;
            if (entityLimit !== entityLimit.alternativeContainer) {
                content.push([enumerable.englishName,
                    <>{index}</>,
                    <TextComponent content={EveryLimitsApp.__getAcronym(entityLimit)}/>,
                    <NameComponent id="name" name={entityLimit} popoverOrientation="bottom"/>,
                    <NameComponent id="alternativeName" name={entityLimit.alternativeContainer} popoverOrientation="bottom"/>,
                    <TextComponent content={entityLimit.amount} isUnknown={entityLimit.isAmountUnknown}/>,
                    <GameContentTranslationComponent>{translation => <TextComponent content={translation(entityLimit.type.englishCommonText)}/>}</GameContentTranslationComponent>,
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
                {key: 'originalOrder', element: <>#</>,},
                {key: 'acronym', element: <ContentTranslationComponent translationKey="Acronym(s)"/>,},
                {
                    key: 'names', element: <ContentTranslationComponent translationKey="Name"/>,
                    subHeaders: [
                        {key: 'name', element: EMPTY_REACT_ELEMENT,},
                        {key: 'alternativeName', element: <ContentTranslationComponent translationKey="Alternative name"/>,},
                    ],
                },
                {key: 'limit', element: <ContentTranslationComponent translationKey="Limit"/>,},
                {key: 'type', element: <ContentTranslationComponent translationKey="Type"/>,},
            ]}
            content={this.content}/>;
    }

}
