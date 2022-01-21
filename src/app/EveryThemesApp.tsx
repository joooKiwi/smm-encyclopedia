import type {PossibleEffectInNightTheme} from '../core/theme/Theme.template';
import type {SingleTableContent}         from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EmptyCourseTheme}              from '../core/theme/EmptyCourseTheme';
import {EmptyWorldTheme}               from '../core/theme/EmptyWorldTheme';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {Games}                         from '../core/game/Games';
import NameComponent                   from '../lang/name/component/Name.component';
import Table                           from './tools/table/Table';
import {Themes}                        from '../core/theme/Themes';
import YesOrNoResultTextComponent      from './tools/text/YesOrNoResultTextComponent';

/**
 * @reactComponent
 */
export default class EveryThemesApp
    extends AbstractApp {

    //region -------------------- Methods --------------------

    private static __getEffect(effect: PossibleEffectInNightTheme,) {
        return <>{effect == null ? '' : `--${effect}--`}</>;
    }

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const enumerable of Themes) {
            const [courseTheme, worldTheme,] = enumerable.reference;

            const isInCourseTheme = courseTheme !== EmptyCourseTheme.get;
            const isInWorldTheme = worldTheme !== EmptyWorldTheme.get;
            const name = isInCourseTheme ? courseTheme : worldTheme;
            const isInSMM1 = !isInWorldTheme && courseTheme.isInSuperMarioMaker1;
            const isInSMM2 = courseTheme.isInSuperMarioMaker2 || worldTheme.isInSuperMarioMaker2;
            const effect = isInCourseTheme ? courseTheme.effect : null;

            content.push([enumerable.englishName,
                <>{index}</>,
                enumerable.renderSingleComponent(false),
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
                {key: 'originalOrder', element: <>#</>,},
                {key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,},
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
                {
                    key: 'theme', element: <>--course & world theme--</>,
                    subHeaders: [
                        {key: 'isInTheCourseTheme', element: <GameContentTranslationComponent translationKey="Is in the course theme"/>,},
                        {key: 'isInTheWorldTheme', element: <GameContentTranslationComponent translationKey="Is in the world theme"/>,},
                    ],
                },
                {
                    key: 'game', element: <GameContentTranslationComponent translationKey="Game"/>,
                    subHeaders: [
                        {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                        {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                    ],
                },
                {key: 'effect', element: <GameContentTranslationComponent translationKey="Effect (night)"/>,},
            ]}
            content={this.content}
        />;
    }

}
