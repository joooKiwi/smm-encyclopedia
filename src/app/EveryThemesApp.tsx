import './EveryThemesApp.scss';
import React from 'react';

import AbstractApp              from './AbstractApp';
import {CourseTheme}            from '../entity/theme/CourseTheme';
import {EmptyCourseTheme}       from '../entity/theme/EmptyCourseTheme';
import {EmptyWorldTheme}        from '../entity/theme/EmptyWorldTheme';
import {Games}                  from '../entity/game/Games';
import SMM2NameComponent        from '../entity/lang/SMM2NameComponent';
import {SingleTableContent}     from './tools/table/Table';
import TableWithTranslations    from './tools/table/TableWithTranslations';
import {ThemeLoader}            from '../entity/theme/ThemeLoader';
import {Themes}                 from '../entity/theme/Themes';
import {WorldTheme}             from '../entity/theme/WorldTheme';
import {YesOrNoResultContainer} from './tools/text/YesOrNoResultContainer';

export class EveryThemesApp
    extends AbstractApp {

    #themes?: Map<string, [CourseTheme, WorldTheme]>;

    protected get map() {
        return this.#themes ?? (this.#themes = ThemeLoader.get.load());
    }

    protected get enum() {
        return Themes.values;
    }


    protected _mainContent(): JSX.Element {
        // console.log(this.enum);//README this log is there only to help debugging.

        const content = [] as SingleTableContent[];
        let index = 1;
        for (let [englishName, [courseTheme, worldTheme]] of this.map.entries()) {
            const isInCourseTheme = courseTheme !== EmptyCourseTheme.get;
            const isInWorldTheme = worldTheme !== EmptyWorldTheme.get;
            const name = isInCourseTheme ? courseTheme.name : worldTheme.name;
            const isInSMM1 = !isInWorldTheme && courseTheme.isInSuperMarioMaker1;
            const isInSMM2 = courseTheme.isInSuperMarioMaker2 || worldTheme.isInSuperMarioMaker2;

            content.push([englishName,
                <>{index}</>,
                <img src={this.enum[index - 1].longImagePath} alt={englishName}/>,
                <YesOrNoResultContainer boolean={isInCourseTheme}/>,
                <YesOrNoResultContainer boolean={isInWorldTheme}/>,
                <YesOrNoResultContainer boolean={isInSMM1}/>,
                <YesOrNoResultContainer boolean={isInSMM2}/>,
                <SMM2NameComponent id="theme_name" name={name} popoverOrientation="left"/>,
            ]);
            index++;
        }

        return <TableWithTranslations renderCallback={(translations) => ({
            id: 'theme_table',
            caption: translations.gameContentTranslation('Every themes'),
            headers: [
                '#',
                translations.contentTranslation('Image'),
                translations.gameContentTranslation('Is in the course theme'),
                translations.gameContentTranslation('Is in the world theme'),
                {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.fullName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.fullName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                translations.contentTranslation('Language'),

            ],
            content: content,
        })}/>;
    }

}
