import type {PossibleStraightRouteName} from 'route/EveryRoutes.types'
import type {ReactProperties}           from 'util/react/ReactProperties'

import LinkText             from 'app/tools/text/LinkText'
import {ViewDisplays}       from 'display/ViewDisplays'
import {contentTranslation} from 'lang/components/translationMethods'

//region -------------------- Import from deconstruction --------------------

const {LIST, CARD, TABLE,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

type ExcludedRouteName = | 'home' | 'about' | 'sources' | 'everyMusic'
                         | 'everyPowerUp&Ride&HatPriority'
                         | 'everyPowerUp&RidePriority' | 'everyPowerUp&HatPriority' | 'everyRide&HatPriority'
                         | 'everyPowerUpPriority' | 'everyHatPriority' | 'everyRidePriority' | 'noPriority'
                         | 'everyGameReference' | 'everyGroup' | 'everyRoute'

interface ContentBeingDisplayedProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly routeName: Exclude<PossibleStraightRouteName, ExcludedRouteName>


}

/** @reactComponent */
export default function ContentBeingDisplayed({viewDisplay, routeName,}: ContentBeingDisplayedProperties,) {
    const listLink = viewDisplay === LIST ? null : `${routeName} (list)` as const
    const cardLink = viewDisplay === CARD ? null : `${routeName} (card)` as const
    const tableLink = viewDisplay === TABLE ? null : `${routeName} (table)` as const

    return <p>{contentTranslation('description.viewable', {
        listLink: <LinkText key="listLink" partial-id="listLink" routeName={listLink} color="primary">{contentTranslation('view type.list.singular',).toLowerCase()}</LinkText>,
        cardLink: <LinkText key="cardLink" partial-id="cardLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.singular',).toLowerCase()}</LinkText>,
        cardsLink: <LinkText key="cardsLink" partial-id="cardsLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.plural',).toLowerCase()}</LinkText>,
        tableLink: <LinkText key="tableLink" partial-id="tableLink" routeName={tableLink} color="primary">{contentTranslation('view type.table.singular',).toLowerCase()}</LinkText>,
    },)}</p>
}
