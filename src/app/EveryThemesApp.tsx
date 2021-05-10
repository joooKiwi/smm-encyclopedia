import AbstractApp from "./AbstractApp";
import React from "react";
import {ThemeLoader} from "../entity/theme/ThemeLoader";
import Table, {SingleTableContent} from "./tools/Table";
import {CourseTheme} from "../entity/theme/CourseTheme";
import {WorldTheme} from "../entity/theme/WorldTheme";
import {__} from "../lang/Languages";
import {EmptyCourseTheme} from "../entity/theme/EmptyCourseTheme";
import {EmptyWorldTheme} from "../entity/theme/EmptyWorldTheme";
import BooleanResultContainer from "./tools/BooleanResultContainer";

export class EveryThemesApp
    extends AbstractApp {

    #themes?: Map<string, [CourseTheme, WorldTheme]>;

    protected get themes() {
        return this.#themes ?? (this.#themes = ThemeLoader.get.load());
    }

    protected _displayTableContent(): JSX.Element {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (let [englishName, [courseTheme, worldTheme]] of this.themes.entries()) {
            const hasCourseTheme = courseTheme !== EmptyCourseTheme.get;
            const name = hasCourseTheme ? courseTheme.name : worldTheme.name;

            content.push([englishName,
                <>{index++}</>,
                <BooleanResultContainer boolean={courseTheme !== EmptyCourseTheme.get} trueValue={__('Yes')} falseValue={__('No')}/>,
                <BooleanResultContainer boolean={worldTheme !== EmptyWorldTheme.get} trueValue={__('Yes')} falseValue={__('No')}/>,
                <>{name.english}</>,
            ]);
        }

        return <Table
            caption="every themes"
            headers={['#', __('Is in course theme'), __('Is in world theme'), __('Language'),]}
            content={content}/>;
    }

    protected _mainContent(): JSX.Element {
        console.log(this.themes);
        return <>{this._displayTableContent()}</>;
    }

}