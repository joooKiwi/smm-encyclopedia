import type {PossibleSMM1ImagePath, PossibleSMM1ImagePathReceived, PossibleSMM2ImagePath, PossibleSMM2ImagePathReceived, SoundEffectImage} from './SoundEffectImage';

import {BASE_PATH} from '../../../variables';

export class AbstractSoundEffectImage
    implements SoundEffectImage {

    //region -------------------- Fields --------------------

    readonly #SMM1ImagePath: PossibleSMM1ImagePath;
    readonly #SMM2ImagePath: PossibleSMM2ImagePath;

    //endregion -------------------- Fields --------------------

    protected constructor(simpleSMM1Images: PossibleSMM1ImagePathReceived, simpleSMM2Image: PossibleSMM2ImagePathReceived,) {
        this.#SMM1ImagePath = simpleSMM1Images == null ? null : typeof simpleSMM1Images == 'string'
            ? [`/${BASE_PATH}/sound effect/Edit_Lyt_P_SE${simpleSMM1Images}.tiff`]
            : [`/${BASE_PATH}/sound effect/Edit_Lyt_P_SE${simpleSMM1Images[0]}.tiff`, `/${BASE_PATH}/sound effect/Edit_Lyt_P_SE${simpleSMM1Images[1]}.tiff`,];
        this.#SMM2ImagePath = simpleSMM2Image == null ? null : `/${BASE_PATH}/sound effect/Lyt_E_P_SE_${simpleSMM2Image}.tiff`;
    }

    //region -------------------- Getter methods --------------------

    public get SMM1ImagePath(): PossibleSMM1ImagePath {
        return this.#SMM1ImagePath;
    }

    public get SMM2ImagePath(): PossibleSMM2ImagePath {
        return this.#SMM2ImagePath;
    }

    //endregion -------------------- Getter methods --------------------

}
