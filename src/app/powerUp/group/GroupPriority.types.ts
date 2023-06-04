import type {Arrows} from 'app/tools/arrow/Arrows'

export interface GroupOf6PowerUpPriorityArrowProperties {

    topLeftTo?: {
        topRight?: Arrows
        centerLeft?: Arrows
        centerRight?: Arrows
        bottomLeft?: Arrows
        bottomRight?: Arrows
    }
    topRightTo?: {
        centerLeft?: Arrows
        centerRight?: Arrows
        bottomLeft?: Arrows
        bottomRight?: Arrows
    }
    centerLeftTo?: {
        centerRight?: Arrows
        bottomLeft?: Arrows
        bottomRight?: Arrows
    }
    centerRightTo?: {
        bottomLeft?: Arrows
        bottomRight?: Arrows
    }
    bottomLeftTo?: {
        bottomRight?: Arrows
    }

}

export interface GroupOf5PowerUpPriorityArrowProperties {

    topTo?: {
        centerLeft?: Arrows
        centerRight?: Arrows
        bottomLeft?: Arrows
        bottomRight?: Arrows
    }
    centerLeftTo?: {
        centerRight?: Arrows
        bottomLeft?: Arrows
        bottomRight?: Arrows
    }
    centerRightTo?: {
        bottomLeft?: Arrows
        bottomRight?: Arrows
    }
    bottomLeftTo?: {
        bottomRight?: Arrows
    }

}
