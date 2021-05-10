import {AbstractTheme} from "./AbstractTheme";
import {WorldTheme} from "./WorldTheme";
import {SMM2Name} from "../lang/SMM2Name";

export class GenericWorldTheme
    extends AbstractTheme
    implements WorldTheme {

    public constructor(name: SMM2Name) {
        super(name);
    }

}
