import type {PossibleMusicArray, PossibleSoundEffectName, SingleSoundEffectMusic} from './SingleSoundEffectMusic';

import {AbstractSoundEffectMusic} from './AbstractSoundEffectMusic';

export class SingleSoundEffectMusicContainer<NAME extends PossibleSoundEffectName, >
    extends AbstractSoundEffectMusic<PossibleMusicArray<NAME>, NAME, NAME>
    implements SingleSoundEffectMusic<NAME> {

    public constructor(name: NAME,) {
        super(name, name,);
    }

    protected override _createEveryMusics(): PossibleMusicArray<NAME> {
        return [this.soundEffect,];
    }

}
