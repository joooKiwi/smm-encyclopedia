import {__, Languages}             from '../lang/Languages';
import AbstractApp                 from "./AbstractApp";
import {CourseTheme}               from "../entity/theme/CourseTheme";
import {EmptyCourseTheme}          from "../entity/theme/EmptyCourseTheme";
import {EmptyWorldTheme}           from "../entity/theme/EmptyWorldTheme";
import React                       from "react";
import Table, {SingleTableContent} from "./tools/Table";
import {ThemeLoader}               from "../entity/theme/ThemeLoader";
import {Themes}                    from "../entity/theme/Themes";
import {WorldTheme}                from "../entity/theme/WorldTheme";
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
                <>{Languages.currentLanguage.get(name)}</>,
            ]);
            index++;
        }

        return <Table
            caption={__('every themes')}
            headers={['#', __('Image'), __('Is in course theme'), __('Is in world theme'), __('Is in SMM1'),  __('Is in SMM2') ,__('Language'),]}
            content={content}/>;
    }

    protected _mainContent(): JSX.Element {
        console.log(this.themes);
        return <>{this._displayTableContent()}</>;
    }

}