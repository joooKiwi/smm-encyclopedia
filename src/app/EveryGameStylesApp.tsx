import './GameStylesApp.scss';

import type {SingleTableContent} from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {GameStyles}                    from '../core/gameStyle/GameStyles';
import {Games}                         from '../core/game/Games';
import NameComponent                   from '../lang/name/component/Name.component';
import NightEffectComponent            from '../core/gameStyle/NightEffect.component';
import {ProjectLanguages}              from '../lang/ProjectLanguages';
import Table                           from './tools/table/Table';
import {Themes}                        from '../core/theme/Themes';
import {Times}                         from '../core/time/Times';
import YesOrNoResultTextComponent      from './tools/text/YesOrNoResultTextComponent';

/**
 * @reactComponent
 */
export default class EveryGameStylesApp
    extends AbstractApp {

    //region -------------------- Methods --------------------

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const enumerable of GameStyles) {
            const gameStyle = enumerable.reference;

            content.push([enumerable.englishName,
                <>{index}</>,
                enumerable.renderSingleComponent,
                <NameComponent id="name" name={gameStyle} popoverOrientation="left"/>,
                <YesOrNoResultTextComponent boolean={gameStyle.isInSuperMarioMaker1}/>,
                <YesOrNoResultTextComponent boolean={gameStyle.isInSuperMarioMaker2}/>,
                <NightEffectComponent gameStyle={gameStyle}/>,
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        return <GameContentTranslationComponent>{translation =>
            <Table
                id="gameStyle-table"
                caption={<GameContentTranslationComponent translationKey="Every game styles"/>}
                headers={[
                    {key: 'originalOrder', element: <>#</>,},
                    {key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,},
                    {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
                    {
                        key: 'game', element: <GameContentTranslationComponent translationKey="Game"/>,
                        subHeaders: [
                            {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                            {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                        ],
                    },
                    {
                        key: 'nightDesertWind',
                        element: <div className="night-desert-wind-effect-container">{Themes.DESERT.renderSingleComponent(false)}{Times.NIGHT.renderSingleComponent}</div>,
                        tooltip: {
                            namespace: 'gameContent', translationKey: 'Wind effect (night desert)',
                            replace: {
                                night: translation('Night').toLowerCase(),
                                desert: ProjectLanguages.currentLanguage.get(Themes.DESERT.reference[0]).toLowerCase(),
                            },
                        },
                    }
                ]}
                content={this.content}
            />
        }</GameContentTranslationComponent>;
    }

}
