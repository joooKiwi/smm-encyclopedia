import type {AppOptionWithTable}  from './AppOptionWithTable';
import type {SingleHeaderContent} from '../../tools/table/SimpleHeader';

import {AbstractAppOptionWithSomething} from './AbstractAppOptionWithSomething';

export class AppOptionWithTableComponent
    extends AbstractAppOptionWithSomething<SingleHeaderContent>
    implements AppOptionWithTable {

    public constructor(callbackToRender: () => SingleHeaderContent,) {
        super(callbackToRender,);
    }

    public get renderTableHeader(): SingleHeaderContent {
        return this._callbackToRender();
    }

}
