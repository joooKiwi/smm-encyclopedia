import type {Builder}                 from '../../../../util/builder/Builder';
import type {UnusedImage_Regular}     from './UnusedImage_Regular';
import type {UnusedImage_BigMushroom} from './UnusedImage_BigMushroom';

export type PossibleImageReceivedOnFactory = | Builder<UnusedImage_Regular>
                                             | [Builder<UnusedImage_Regular>, Builder<UnusedImage_BigMushroom>,]
                                             | [null, Builder<UnusedImage_BigMushroom>,]
                                             | null;
