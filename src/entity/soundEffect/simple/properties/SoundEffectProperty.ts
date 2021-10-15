import type {GameProperty} from '../../../properties/GameProperty';

export interface SoundEffectProperty
    extends GameProperty {

    get gameContainer(): GameProperty

}
