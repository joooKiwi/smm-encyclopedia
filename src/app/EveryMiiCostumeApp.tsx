import './EveryMiiCostumeApp.scss';

import AbstractApp                     from './AbstractApp';
import type {PossibleEnglishName}      from '../core/miiCostume/MiiCostumes.types';
import type {MiiCostume}               from '../core/miiCostume/MiiCostume';
import {MiiCostumeLoader}              from '../core/miiCostume/MiiCostume.loader';
import {MiiCostumes}                   from '../core/miiCostume/MiiCostumes';
import {SingleTableContent}            from './tools/table/Table.types';
import Image                           from './tools/images/Image';
import NameComponent                   from '../lang/name/component/Name.component';
import Table                           from './tools/table/Table';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import {TranslationUtility}            from '../lang/components/TranslationUtility';
import TextComponent                   from './tools/text/TextComponent';

export default class EveryMiiCostumeApp
    extends AbstractApp {

    //region -------------------- Attributes & getter methods --------------------

    #map?: ReadonlyMap<PossibleEnglishName, MiiCostume>;

    protected get map() {
        return this.#map ??= MiiCostumeLoader.get.load();
    }

    protected get enum() {
        return MiiCostumes.values;
    }

    //endregion -------------------- Attributes & getter methods --------------------
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
        for (const [englishName, miiCostume,] of this.map) {
            content.push([englishName,
                <>{index}</>,
                <Image source={this.enum[index - 1].imagePath} fallbackName={`${englishName} - image`}/>,
                <NameComponent id="name" name={miiCostume} popoverOrientation="left"/>,
                EveryMiiCostumeApp.__createConditionToUnlockIt(miiCostume),
                miiCostume.category == null ? EMPTY_REACT_ELEMENT : <>--{miiCostume.category}--</>,// <NameComponent id="name" name={miiCostume.category} popoverOrientation="left"/>,
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
