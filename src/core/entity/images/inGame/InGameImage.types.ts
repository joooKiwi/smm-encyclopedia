import type {InGameImage} from 'core/entity/images/inGame/InGameImage'
import type {Builder}     from 'util/builder/Builder'
import type {NullOr}      from 'util/types/nullable'

export type ImageName_SMM1 = `MegaKinoko${| '' | 2}` | `Kinoko${| 2 | 'Funny'}`

export type PossibleImageReceivedOnFactory = NullOr<Builder<InGameImage>>
