import './EveryThemesApp.scss';

import React from 'react';

import type {CourseAndWorldTheme} from '../entity/theme/Themes.types';
import type {SingleTableContent}  from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import {EmptyCourseTheme}              from '../entity/theme/EmptyCourseTheme';
import {EmptyWorldTheme}               from '../entity/theme/EmptyWorldTheme';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {Games}                         from '../entity/game/Games';
import SMM2NameComponent               from '../entity/lang/SMM2NameComponent';
import Table                           from './tools/table/Table';
import {ThemeLoader}                   from '../entity/theme/ThemeLoader';
import {Themes}                        from '../entity/theme/Themes';
import YesOrNoResultContainer          from './tools/text/YesOrNoResultContainer';

export default class EveryThemesApp
    extends AbstractApp {

    #themes?: Map<string, CourseAndWorldTheme>;

    protected get map() {
        return this.#themes ??= ThemeLoader.get.load();
    }

    protected get enum() {
        return Themes.values;
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
        return content;
    }


    protected _mainContent(): JSX.Element {
        console.log(this.enum);//README this log is there only to help debugging.

        return <Table
            id="theme_table"
            caption={<GameContentTranslationComponent translationKey="Every themes"/>}
            headers={[
                '#',
                {key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,},
                {key: 'isInTheCourseTheme', element: <GameContentTranslationComponent translationKey="Is in the course theme"/>,},
                {key: 'isInTheWorldTheme', element: <GameContentTranslationComponent translationKey="Is in the world theme"/>,},
                {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                {key: 'language', element: <ContentTranslationComponent translationKey="Language"/>,},
            ]}
            content={this.content}
        />;
    }

}
