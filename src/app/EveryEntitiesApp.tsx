import AbstractApp from "./AbstractApp";
import React from "react";
import {EntityLoader} from "../entity/simple/EntityLoader";

export class EveryEntitiesApp
    extends AbstractApp {

    protected _mainContent(): JSX.Element {
        console.log(EntityLoader.get.load());
        return <>every entities</>;
    }

}