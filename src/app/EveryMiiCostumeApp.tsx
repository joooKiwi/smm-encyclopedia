import './EveryMiiCostumeApp.scss';

import type {MiiCostumeAppStates}  from './AppStates.types';
import type {SingleHeadersContent} from './tools/table/SimpleHeader';
import type {SingleTableContent}   from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {MiiCostumes}                   from '../core/miiCostume/MiiCostumes';
import Table                           from './tools/table/Table';
import {TranslationUtility}            from '../lang/components/TranslationUtility';
import {MiiCostumeAppOption}           from './options/MiiCostumeAppOption';

export default class EveryMiiCostumeApp
    extends AbstractApp<{}, MiiCostumeAppStates> {


    public constructor(props: {},) {
        super(props,);
        MiiCostumeAppOption.REFERENCE = this;
        this.state = MiiCostumeAppOption.createDefaultState;
    }

    //region -------------------- Methods --------------------

    protected get content() {
        const content = [] as SingleTableContent[];

        let index = 1;
        for (const enumeration of MiiCostumes) {
            MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION = () => enumeration;

            content.push([enumeration.englishName,
                <>{index}</>,
                ...[
                    MiiCostumeAppOption.IMAGE.renderContent,
                    MiiCostumeAppOption.NAME.renderContent,
                    MiiCostumeAppOption.CONDITION_TO_UNLOCK_IT.renderContent,
                    MiiCostumeAppOption.CATEGORY.renderContent,
                ].flat(),
            ]);
            index++;
        }

        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        return <Table
            id="miiCostume-table"
            caption={<GameContentTranslationComponent>{translation => TranslationUtility.replaceAndInterpretTranslation(translation, 'Every Mii costumes', {
                pluralName: <span key="miiCostume-pluralName2" className="text-decoration-underline">Mii costumes{/*TODO add Mii costumes, but the plural name*/}</span>,
            })}</GameContentTranslationComponent>}
            headers={[
                '#',
                MiiCostumeAppOption.IMAGE.renderTableHeader,
                MiiCostumeAppOption.NAME.renderTableHeader,
                MiiCostumeAppOption.CONDITION_TO_UNLOCK_IT.renderTableHeader,
                MiiCostumeAppOption.CATEGORY.renderTableHeader,
            ].filter(header => header != null) as SingleHeadersContent}
            content={this.content}
        />;
    }

}
