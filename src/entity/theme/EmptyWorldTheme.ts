/**
 * @nullObjectPattern
 * @singleton
 */
import {GenericWorldTheme} from "./GenericWorldTheme";
import {EmptyName} from "../lang/EmptyName";

export class EmptyWorldTheme
    extends GenericWorldTheme {

    private static readonly instance = new EmptyWorldTheme();

    private constructor() {
        super(EmptyName.get)
    }


    public static get get() {
        return this.instance;
    }

    public toString() {
        return 'Empty World Theme';
    }

}
