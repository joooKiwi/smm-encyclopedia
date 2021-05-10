import {__} from "../lang/Languages";
import AbstractApp from "./AbstractApp";
import BooleanResultContainer from "./tools/BooleanResultContainer";
import {CourseTheme} from "../entity/theme/CourseTheme";
import {EmptyCourseTheme} from "../entity/theme/EmptyCourseTheme";
import {EmptyWorldTheme} from "../entity/theme/EmptyWorldTheme";
import React from "react";
import Table, {SingleTableContent} from "./tools/Table";
import {ThemeLoader} from "../entity/theme/ThemeLoader";
import {Themes} from "../entity/theme/Themes";
import {WorldTheme} from "../entity/theme/WorldTheme";

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
            const hasCourseTheme = courseTheme !== EmptyCourseTheme.get;
            const name = hasCourseTheme ? courseTheme.name : worldTheme.name;

            content.push([englishName,
                <>{index}</>,
                <img src={this.themesEnum[index - 1].longImagePath} alt={englishName}/>,
                <BooleanResultContainer boolean={courseTheme !== EmptyCourseTheme.get} trueValue={__('Yes')} falseValue={__('No')}/>,
                <BooleanResultContainer boolean={worldTheme !== EmptyWorldTheme.get} trueValue={__('Yes')} falseValue={__('No')}/>,
                <>{name.english}</>,
            ]);
            index++;
        }

        return <Table
            caption={__('every themes')}
            headers={['#', __('Image'), __('Is in course theme'), __('Is in world theme'), __('Language'),]}
            content={content}/>;
    }

    protected _mainContent(): JSX.Element {
        console.log(this.themes);
        return <>{this._displayTableContent()}</>;
    }

}