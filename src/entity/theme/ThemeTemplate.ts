import {SMM2NameTemplate} from "../lang/SMM2NameTemplate";

export interface ThemeTemplate {

    isIn: {
        courseTheme: boolean
        worldTheme: boolean
    }

    name: SMM2NameTemplate

}
