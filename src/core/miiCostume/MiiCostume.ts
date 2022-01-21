import type {NameTrait}                                              from '../../lang/name/NameTrait';
import type {Versions}                                               from '../version/Versions';
import {PossibleCategory, PossibleConditionToUnlockIt, PossibleMode} from './MiiCostume.template';

export interface MiiCostume
    extends NameTrait {

    /*TODO change to a translation key or another kind of object that can use the translation*/
    get mode(): PossibleMode

    /*TODO change to a translation key or another kind of object that can use the translation*/
    get conditionToUnlockId(): PossibleConditionToUnlockIt

    get version(): | Versions | null

    /*TODO change to category object*/
    get category(): |PossibleCategory|null

}
