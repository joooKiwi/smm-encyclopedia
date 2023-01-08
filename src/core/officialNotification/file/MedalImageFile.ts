import {AbstractImageFile} from 'util/file/image/AbstractImageFile'

export class MedalImageFile<NUMBER extends | 0 | 1 | 2 | 3 | 4 | 5, FALLBACK_NAME extends PossibleFallbackName, >
    extends AbstractImageFile<'others/medal', `BadgeS_0${NUMBER}^u`, 'tiff', FALLBACK_NAME> {

    public constructor(number: NUMBER, fallbackName: FALLBACK_NAME,) {
        super('others/medal', `BadgeS_0${number}^u`, 'tiff', fallbackName,)
    }

}

type PossibleFallbackName = | `${| '1st' | '2nd' | '3rd'} place image (medal)`
                            | `${| 'Gold' | 'Silver' | 'Bronze'} medal image`
