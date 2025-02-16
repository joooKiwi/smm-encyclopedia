import './PredefinedMessageApp.scss'

import type {CollectionHolder} from '@joookiwi/collection'

import type {AppProperties}   from 'app/AppProperties.types'
import type {ReactProperties} from 'util/react/ReactProperties'

import Table                            from 'app/tools/table/Table'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import {PredefinedMessageAppOption}     from 'app/options/PredefinedMessageAppOption'
import AppTitle                         from 'app/util/AppTitle'
import CardList                         from 'app/util/CardList'
import List                             from 'app/util/List'
import PageTitle                        from 'app/util/PageTitle'
import PageViewChanger                  from 'app/util/PageViewChanger'
import Smm2OnlyAlert                    from 'app/util/Smm2OnlyAlert'
import SubMain                          from 'app/util/SubMain'
import {PredefinedMessages}             from 'core/predefinedMessage/PredefinedMessages'
import DisplayButtonGroup               from 'display/DisplayButtonGroup'
import {ViewDisplays}                   from 'display/ViewDisplays'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import NameComponent                    from 'lang/name/component/Name.component'
import {ArrayAsCollection}              from 'util/collection/ArrayAsCollection'

import ALL = PredefinedMessages.ALL

//region -------------------- Import from deconstruction --------------------

const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

const all = new ArrayAsCollection(ALL,)

const items = all
const options = PredefinedMessageAppOption.CompanionEnum.get.values

type PredefinedMessageAppProperties = AppProperties

/** @reactComponent */
export default function PredefinedMessageApp({viewDisplay, games,}: PredefinedMessageAppProperties,) {
    return <SubMain partial-id="predefinedMessage" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('predefined message.all', {
            singularName: unfinishedText('predefined message',),//TODO add predefined reference (singular form)
            pluralName: unfinishedText('predefined messages',),//TODO add predefined reference (plural form)
        },)}</AppTitle>
        <PageTitle value={unfinishedText('Predefined message',)}/>
        <Smm2OnlyAlert value={games}/>
        <PageViewChanger>
            <DisplayButtonGroup list="everyPredefinedMessage (list)" card="everyPredefinedMessage (card)" table="everyPredefinedMessage (table)" current={viewDisplay}/>
        </PageViewChanger>
        <UnfinishedText type="paragraph" isHidden>predefined message description</UnfinishedText>{/*TODO add description*/}
        <section id="predefinedMessage-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: Pick<PredefinedMessageAppProperties, 'viewDisplay'>,) {
    if (viewDisplay === LIST)
        return <PredefinedMessageList items={items}/>
    if (viewDisplay === CARD)
        return <PredefinedMessageCardList items={items}/>
    return <PredefinedMessageTable items={items}/>
}


interface PredefinedMessage_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<PredefinedMessages>

}

/** @reactComponent */
function PredefinedMessageList({items,}: PredefinedMessage_SubContentProperties,) {
    return <List partial-id="predefinedMessage" items={items}>{it =>
        <NameComponent id="predefinedMessage-name" name={it.reference} popoverOrientation="right"/>
    }</List>
}

/** @reactComponent */
function PredefinedMessageCardList({items,}: PredefinedMessage_SubContentProperties,) {
    return <CardList partial-id="predefinedMessage" items={items} default={1} small={2} medium={3} large={5} extra-large={6}>{it =>
        <NameComponent id="predefinedMessage-name" name={it.reference} popoverOrientation="left"/>
    }</CardList>
}

/** @reactComponent */
function PredefinedMessageTable({items,}: PredefinedMessage_SubContentProperties,) {
    return <Table id="predefinedMessage-table" items={items} options={options} caption={getCaption()} headersColor="info"/>
}

function getCaption() {
    return gameContentTranslation('predefined message.all', {
        singularName: unfinishedText('predefined message',),//TODO add predefined reference (singular form)
        pluralName: unfinishedText('predefined messages',),//TODO add predefined reference (plural form)
    },)
}

//endregion -------------------- Sub content --------------------
