import type {SingleTableContent} from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import {EmptyCourseTheme}              from '../core/theme/EmptyCourseTheme';
import {EmptyWorldTheme}               from '../core/theme/EmptyWorldTheme';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {Games}                         from '../core/game/Games';
import Image                           from './tools/images/Image';
import NameComponent                   from '../lang/name/component/Name.component';
import NightEffectComponent            from '../core/nightEffect/NightEffect.component';
import Table                           from './tools/table/Table';
import {Themes}                        from '../core/theme/Themes';
import {Times}                         from '../core/time/Times';
import YesOrNoResultTextComponent      from './tools/text/YesOrNoResultTextComponent';
import {BASE_PATH}                     from '../variables';

/**
 * @reactComponent
 */
export default class EveryThemesApp
    extends AbstractApp {

    //region -------------------- Methods --------------------

    protected get _content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const enumerable of Themes) {
            const [courseTheme, worldTheme,] = enumerable.reference;

            const isInCourseTheme = courseTheme !== EmptyCourseTheme.get;
            const isInWorldTheme = worldTheme !== EmptyWorldTheme.get;
            const name = isInCourseTheme ? courseTheme : worldTheme;
            const isInSMM1 = !isInWorldTheme && courseTheme.isInSuperMarioMaker1;
            const isInSMM2 = courseTheme.isInSuperMarioMaker2 || worldTheme.isInSuperMarioMaker2;

            content.push([enumerable.englishName,
                <>{index}</>,
                enumerable.renderSingleComponent(false),
                enumerable.endlessMarioImagePath == null ? EMPTY_REACT_ELEMENT :
                    <Image source={enumerable.endlessMarioImagePath} fallbackName={`Endless Mario Image (${enumerable.englishName})`}/>,
                <NameComponent id="name" name={name} popoverOrientation="left"/>,
                <YesOrNoResultTextComponent boolean={isInCourseTheme}/>,
                <YesOrNoResultTextComponent boolean={isInWorldTheme}/>,
                <YesOrNoResultTextComponent boolean={isInSMM1}/>,
                <YesOrNoResultTextComponent boolean={isInSMM2}/>,
                <NightEffectComponent theme={courseTheme}/>,
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected override _mainContent() {
        return <GameContentTranslationComponent>{translation =>
            <Table
                id="theme-table"
                caption={<GameContentTranslationComponent translationKey="Every themes"/>}
                headers={[
                    {key: 'originalOrder', element: <>#</>,},
                    {
                        key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,
                        subHeaders: [
                            {key: 'image-empty', element: EMPTY_REACT_ELEMENT,},
                            {key: 'image-endless-mario', element: <>--Endless Mario--</>}
                        ],
                    },
                    {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
                    {
                        key: 'theme', element: <>--course & world theme--</>,
                        subHeaders: [
                            {
                                key: 'isInTheCourseTheme', element: <Image source={`/${BASE_PATH}/theme/Course theme.tiff`} fallbackName="Course theme"/>,
                                tooltip: {namespace: 'gameContent', translationKey: 'Is in the course theme',},
                            },
                            {
                                key: 'isInTheWorldTheme', element: <Image source={`/${BASE_PATH}/theme/World theme.tiff`} fallbackName="World theme"/>,
                                tooltip: {namespace: 'gameContent', translationKey: 'Is in the world theme',},
                            },
                        ],
                    },
                    {
                        key: 'game', element: <GameContentTranslationComponent translationKey="Game"/>,
                        subHeaders: [
                            {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                            {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                        ],
                    },
                    {
                        key: 'effect', element: <Image source={Times.NIGHT.imagePath} fallbackName={`effect - ${Times.NIGHT.englishName}`}/>,
                        tooltip: {
                            namespace: 'gameContent', translationKey: 'Effect (night)',
                            replace: {night: translation(Times.NIGHT.englishName).toLowerCase(),},
                        },
                    },
                ]}
                content={this._content}
            />
        }</GameContentTranslationComponent>;
    }

}
