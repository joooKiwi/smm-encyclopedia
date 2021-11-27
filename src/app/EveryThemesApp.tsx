import type {CourseAndWorldTheme, PossibleEnglishName} from '../entity/theme/Themes.types';
import type {PossibleEffectInNightTheme}               from '../entity/theme/Theme.template';
import type {SingleTableContent}                       from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EmptyCourseTheme}              from '../entity/theme/EmptyCourseTheme';
import {EmptyWorldTheme}               from '../entity/theme/EmptyWorldTheme';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {Games}                         from '../entity/game/Games';
import NameComponent                   from '../lang/name/Name.component';
import Table                           from './tools/table/Table';
import {ThemeLoader}                   from '../entity/theme/Theme.loader';
import {Themes}                        from '../entity/theme/Themes';
import YesOrNoResultTextComponent      from './tools/text/YesOrNoResultTextComponent';

/**
 * @reactComponent
 */
export default class EveryThemesApp
    extends AbstractApp {

    //region -------------------- Attributes & getter methods --------------------

    #map?: ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme>;

    protected get map() {
        return this.#map ??= ThemeLoader.get.load();
    }

    protected get enum() {
        return Themes.values;
    }

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    private static __getEffect(effect: PossibleEffectInNightTheme,) {
        return <>{effect == null ? '' : `--${effect}--`}</>;
    }

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const [englishName, [courseTheme, worldTheme,],] of this.map.entries()) {
            const isInCourseTheme = courseTheme !== EmptyCourseTheme.get;
            const isInWorldTheme = worldTheme !== EmptyWorldTheme.get;
            const name = isInCourseTheme ? courseTheme : worldTheme;
            const isInSMM1 = !isInWorldTheme && courseTheme.isInSuperMarioMaker1;
            const isInSMM2 = courseTheme.isInSuperMarioMaker2 || worldTheme.isInSuperMarioMaker2;
            const effect: PossibleEffectInNightTheme = isInCourseTheme ? courseTheme.effect : null;

            content.push([englishName,
                <>{index}</>,
                this.enum[index - 1].renderSingleComponent(false),
                <NameComponent id="name" name={name} popoverOrientation="left"/>,
                <YesOrNoResultTextComponent boolean={isInCourseTheme}/>,
                <YesOrNoResultTextComponent boolean={isInWorldTheme}/>,
                <YesOrNoResultTextComponent boolean={isInSMM1}/>,
                <YesOrNoResultTextComponent boolean={isInSMM2}/>,
                EveryThemesApp.__getEffect(effect),
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        return <Table
            id="theme-table"
            caption={<GameContentTranslationComponent translationKey="Every themes"/>}
            headers={[
                [
                    {key: 'originalOrder', height: 2, element: <>#</>,},
                    {key: 'image', height: 2, element: <ContentTranslationComponent translationKey="Image"/>,},
                    {key: 'name', height: 2, element: <ContentTranslationComponent translationKey="Name"/>,},
                    {key: 'isInTheCourseTheme', height: 2, element: <GameContentTranslationComponent translationKey="Is in the course theme"/>,},
                    {key: 'isInTheWorldTheme', height: 2, element: <GameContentTranslationComponent translationKey="Is in the world theme"/>,},
                    {key: 'game', width: 2, element: <GameContentTranslationComponent translationKey="Game"/>,},
                    {key: 'effect', height: 2, element: <GameContentTranslationComponent translationKey="Effect (night)"/>,},
                ],
                [

                    {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                    {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                ],
            ]}
            content={this.content}
        />;
    }

}
