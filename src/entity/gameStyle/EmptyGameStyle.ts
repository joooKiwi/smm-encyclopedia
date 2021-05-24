import {GenericGameStyle} from './GenericGameStyle';
import {EmptyName}        from '../../lang/name/EmptyName';

/**
 * @nullObjectPattern
 * @singleton
 */
export class EmptyGameStyle
    extends GenericGameStyle {

    private static readonly instance = new EmptyGameStyle();
    public static readonly EMPTY_ARRAY = [];
    public static readonly EMPTY_MAP = new Map();

    private constructor() {
        super(EmptyName.get, () => EmptyGameStyle.EMPTY_ARRAY,);
    }


    public static get get() {
        return this.instance;
    }

    public get individualValues() {
        return EmptyGameStyle.EMPTY_ARRAY;
    }

    public toNameMap() {
        return EmptyGameStyle.EMPTY_MAP;
    }

    public toString(): 'Empty game style' {
        return 'Empty game style';
    }

}