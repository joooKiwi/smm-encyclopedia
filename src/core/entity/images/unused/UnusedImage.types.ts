import type {UnusedImage_BigMushroom} from 'core/entity/images/unused/UnusedImage_BigMushroom'
import type {UnusedImage_Regular}     from 'core/entity/images/unused/UnusedImage_Regular'
import type {Builder}                 from 'util/builder/Builder'
import type {NullOr}                  from 'util/types/nullable'

export type PossibleImageReceivedOnFactory = NullOr<| Builder<UnusedImage_Regular>
                                                    | [Builder<UnusedImage_Regular>, Builder<UnusedImage_BigMushroom>,]
                                                    | [null, Builder<UnusedImage_BigMushroom>,]>
