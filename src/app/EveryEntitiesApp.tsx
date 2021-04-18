import AbstractApp from "./AbstractApp";
import React from "react";
import {loadEveryEntities} from "../entity/simple/entityLoader";

export class EveryEntitiesApp
    extends AbstractApp {

    protected _mainContent(): JSX.Element {
        console.log(loadEveryEntities()());
        return <>every entities</>;
    }

}