import {EmptyName}         from '../../lang/name/EmptyName';
import {GenericWorldTheme} from './GenericWorldTheme';

/**
 * @nullObjectPattern
 * @singleton
 */
export class EmptyWorldTheme
    extends GenericWorldTheme {

    private static readonly instance = new EmptyWorldTheme();
    public static readonly EMPTY_MAP = new Map();

    private constructor() {
        super(EmptyName.get);
    }


    public static get get() {
        return this.instance;
    }

    public toNameMap() {
        return EmptyWorldTheme.EMPTY_MAP;
    }

    public toString() {
        return 'Empty World Theme';
    }

}
