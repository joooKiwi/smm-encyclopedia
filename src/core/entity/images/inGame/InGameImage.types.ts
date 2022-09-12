import type {Builder}     from '../../../../util/builder/Builder';
import type {InGameImage} from './InGameImage';

export type ImageName_SMM1 = `MegaKinoko${| '' | 2}` | `Kinoko${| 2 | 'Funny'}`;

export type PossibleImageReceivedOnFactory = | Builder<InGameImage> | null;
