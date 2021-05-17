import './EveryThemesApp.scss';

import {useTranslation} from 'react-i18next';
import React            from 'react';

import AbstractApp                 from './AbstractApp';
import {CourseTheme}               from '../entity/theme/CourseTheme';
import {EmptyCourseTheme}          from '../entity/theme/EmptyCourseTheme';
import {EmptyWorldTheme}           from '../entity/theme/EmptyWorldTheme';
import {Games}                     from '../entity/game/Games';
import {SMM2NameComponent}         from '../entity/lang/SMM2NameComponent';
import Table, {SingleTableContent} from './tools/Table';
import {ThemeLoader}               from '../entity/theme/ThemeLoader';
import {Themes}                    from '../entity/theme/Themes';
import {WorldTheme}                from '../entity/theme/WorldTheme';
import {YesOrNoResultContainer}    from './tools/text/YesOrNoResultContainer';

export class EveryThemesApp
    extends AbstractApp {

    #themes?: Map<string, [CourseTheme, WorldTheme]>;

    protected get themes() {
        return this.#themes ?? (this.#themes = ThemeLoader.get.load());
    }

    protected get themesEnum() {
        return Themes.values;
    }

    protected _displayTableContent(): JSX.Element {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (let [englishName, [courseTheme, worldTheme]] of this.themes.entries()) {
            const isInCourseTheme = courseTheme !== EmptyCourseTheme.get;
            const isInWorldTheme = worldTheme !== EmptyWorldTheme.get;
            const name = isInCourseTheme ? courseTheme.name : worldTheme.name;
            const isInSMM1 = !isInWorldTheme && courseTheme.isInSuperMarioMaker1;
            const isInSMM2 = courseTheme.isInSuperMarioMaker2 || worldTheme.isInSuperMarioMaker2;

            content.push([englishName,
                <>{index}</>,
                <img src={this.themesEnum[index - 1].longImagePath} alt={englishName}/>,
                <YesOrNoResultContainer boolean={isInCourseTheme}/>,
                <YesOrNoResultContainer boolean={isInWorldTheme}/>,
                <YesOrNoResultContainer boolean={isInSMM1}/>,
                <YesOrNoResultContainer boolean={isInSMM2}/>,
                <SMM2NameComponent id="theme_name" name={name} popoverOrientation="left"/>,
            ]);
            index++;
        }
        return <TableFromTheme content={content}/>;
    }

    protected _mainContent(): JSX.Element {
        // console.log(this.themes);//README this log is there only to help debugging.
        return <>{this._displayTableContent()}</>;
    }

}

function TableFromTheme(props: { content: readonly SingleTableContent[] }): JSX.Element {
    const content_t = useTranslation('content').t;
    const gameContent_t = useTranslation('game').t;

    return <Table
        id="theme_table"
        caption={gameContent_t('every.Themes')}
        headers={[
            '#',
            content_t('Image'),
            gameContent_t('Is in.the course theme'),
            gameContent_t('Is in.the world theme'),
            {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.fullName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
            {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.fullName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
            content_t('Language'),
        ]}
        content={props.content}/>;
}