import type {Entity}    from '../entity/Entity';
import type {NameTrait} from '../../lang/name/NameTrait';

export interface Instrument
    extends NameTrait<string> {

    get entities(): readonly Entity[]

}
