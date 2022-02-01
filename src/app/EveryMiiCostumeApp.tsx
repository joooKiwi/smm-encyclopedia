import './EveryMiiCostumeApp.scss';

import type {MiiCostume} from '../core/miiCostume/MiiCostume';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Image                           from './tools/images/Image';
import {MiiCostumes}                   from '../core/miiCostume/MiiCostumes';
import NameComponent                   from '../lang/name/component/Name.component';
import Table                           from './tools/table/Table';
import {SingleTableContent}            from './tools/table/Table.types';
import {TranslationUtility}            from '../lang/components/TranslationUtility';
import TextComponent                   from './tools/text/TextComponent';

export default class EveryMiiCostumeApp
    extends AbstractApp {

    //region -------------------- Methods --------------------

    private static __createConditionToUnlockIt(miiCostume: MiiCostume,) {
        if (miiCostume.conditionToUnlockId == null)
            return EMPTY_REACT_ELEMENT;

        if (miiCostume.mode == null)
            return <TextComponent content={miiCostume.conditionToUnlockId}/>;

        return <TextComponent classes={['miiCostume-mode',]} style={({'--mode-name': `"${miiCostume.mode}"`})} content={miiCostume.conditionToUnlockId}/>;
    }

    protected get content() {
        const content = [] as SingleTableContent[];

        let index = 1;
        for (const enumerable of MiiCostumes) {
            const miiCostume = enumerable.reference;

            content.push([enumerable.englishName,
                <>{index}</>,
                <Image source={enumerable.imagePath} fallbackName={`${enumerable.englishName} - image`}/>,
                <NameComponent id="name" name={miiCostume} popoverOrientation="left"/>,
                EveryMiiCostumeApp.__createConditionToUnlockIt(miiCostume),
                miiCostume.category == null ? EMPTY_REACT_ELEMENT : <NameComponent id={`name-${enumerable.englishNameInHtml}`} name={miiCostume.category} popoverOrientation="left"/>,
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
                {key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,},
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
                {key: 'conditionToUnlockIt', element: <>--Condition to unlock it--</>,},
                {key: 'category', element: <GameContentTranslationComponent translationKey="Category"/>,},
            ]}
            content={this.content}
        />;
    }

}
