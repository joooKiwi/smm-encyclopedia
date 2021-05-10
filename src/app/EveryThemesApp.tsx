import AbstractApp from "./AbstractApp";
import React from "react";
import {ThemeLoader} from "../entity/theme/ThemeLoader";

export class EveryThemesApp
    extends AbstractApp {

    protected _mainContent(): JSX.Element {
        console.log(ThemeLoader.get.load());
        return <>every themes</>;
    }

}