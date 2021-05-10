import {CourseTheme} from "./CourseTheme";
import {AbstractTheme} from "./AbstractTheme";
import {SMM2Name} from "../lang/SMM2Name";
import {Entity} from "../simple/Entity";
import {CallbackCaller} from "../../util/CallbackCaller";

export class GenericCourseTheme
    extends AbstractTheme
    implements CourseTheme {

    readonly #entities: CallbackCaller<Entity[]>;

    public constructor(name: SMM2Name, entities: () => Entity[]) {
        super(name);
        this.#entities = new CallbackCaller(entities);
    }

    public get entities() {
        return this.#entities.get;
    }

}
