import type {Builder}     from '../../../../util/builder/Builder'
import type {InGameImage} from './InGameImage'
import type {NullOr}      from '../../../../util/types'

export type ImageName_SMM1 = `MegaKinoko${| '' | 2}` | `Kinoko${| 2 | 'Funny'}`

export type PossibleImageReceivedOnFactory = NullOr<Builder<InGameImage>>
