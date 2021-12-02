import type {ClassWithNullObjectPattern, EmptyEntityLimitLinkName} from '../../../util/ClassWithNullObjectPattern';
import type {EntityLimitLink}                                      from './EntityLimitLink';

export class EmptyEntityLimitLink
    implements EntityLimitLink<null, null>, ClassWithNullObjectPattern<EmptyEntityLimitLinkName> {

    static #instance?: EmptyEntityLimitLink;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    public readonly group = null;
    public readonly entity = null;

    public toString(): EmptyEntityLimitLinkName {
        return 'Empty entity limit (link)';
    }

}
