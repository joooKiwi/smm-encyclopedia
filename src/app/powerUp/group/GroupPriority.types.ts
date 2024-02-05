import type {Arrows} from 'app/tools/arrow/Arrows'

export interface GroupOf6PowerUpPriorityArrowProperties {

    readonly topLeftTo?: {
        readonly topRight?: Arrows
        readonly centerLeft?: Arrows
        readonly centerRight?: Arrows
        readonly bottomLeft?: Arrows
        readonly bottomRight?: Arrows
    }
    readonly topRightTo?: {
        readonly centerLeft?: Arrows
        readonly centerRight?: Arrows
        readonly bottomLeft?: Arrows
        readonly bottomRight?: Arrows
    }
    readonly centerLeftTo?: {
        readonly centerRight?: Arrows
        readonly bottomLeft?: Arrows
        readonly bottomRight?: Arrows
    }
    readonly centerRightTo?: {
        readonly bottomLeft?: Arrows
        readonly bottomRight?: Arrows
    }
    readonly bottomLeftTo?: {
        readonly bottomRight?: Arrows
    }

}

export interface GroupOf5PowerUpPriorityArrowProperties {

    readonly topTo?: {
        readonly centerLeft?: Arrows
        readonly centerRight?: Arrows
        readonly bottomLeft?: Arrows
        readonly bottomRight?: Arrows
    }
    readonly centerLeftTo?: {
        readonly centerRight?: Arrows
        readonly bottomLeft?: Arrows
        readonly bottomRight?: Arrows
    }
    readonly centerRightTo?: {
        readonly bottomLeft?: Arrows
        readonly bottomRight?: Arrows
    }
    readonly bottomLeftTo?: {
        readonly bottomRight?: Arrows
    }

}
