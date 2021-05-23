import React from 'react';

import AbstractApp    from './AbstractApp';
import {EntityLoader} from '../entity/simple/EntityLoader';

export default class EveryEntitiesApp
    extends AbstractApp {

    protected _mainContent(): JSX.Element {
        console.log(EntityLoader.get.load());
        return <>every entities</>;
    }

}