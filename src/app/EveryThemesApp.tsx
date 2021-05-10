import AbstractApp from "./AbstractApp";
import React from "react";
import {ThemeLoader} from "../entity/theme/ThemeLoader";
import Table from "./tools/Table";
import {CourseTheme} from "../entity/theme/CourseTheme";
import {WorldTheme} from "../entity/theme/WorldTheme";

export class EveryThemesApp
    extends AbstractApp {

    #themes?: Map<string, [CourseTheme, WorldTheme]>;

    protected get themes() {
        return this.#themes ?? (this.#themes = ThemeLoader.get.load());
    }

    protected _displayTableContent(): JSX.Element {
        return <Table
            caption="every themes"
            headers={['#', 'test header',]}
            content={[
                ['1', <>1</>, <div>test content 1</div>,],
                ['2', <>2</>, <div>test content 2</div>,],
                ['3', <>3</>, <div>test content 3</div>,],
            ]}/>;
    }

    protected _mainContent(): JSX.Element {
        console.log(this.themes);
        return <>{this._displayTableContent()}</>;
    }

}