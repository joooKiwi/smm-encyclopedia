import './MiiCostumeCategoryApp.scss'

import type {CollectionHolder} from '@joookiwi/collection'

import type {AppProperties}   from 'app/AppProperties.types'
import type {ReactProperties} from 'util/react/ReactProperties'

import {MiiCostumeCategoryAppOption}    from 'app/options/MiiCostumeCategoryAppOption'
import Table                            from 'app/tools/table/Table'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import AppTitle                         from 'app/util/AppTitle'
import CardList                         from 'app/util/CardList'
import List                             from 'app/util/List'
import PageTitle                        from 'app/util/PageTitle'
import PageViewChanger                  from 'app/util/PageViewChanger'
import Smm2OnlyAlert                    from 'app/util/Smm2OnlyAlert'
import SubMain                          from 'app/util/SubMain'
import {MiiCostumeCategories}           from 'core/miiCostumeCategory/MiiCostumeCategories'
import MiiCostumeCategoryIcon           from 'core/miiCostumeCategory/component/MiiCostumeCategoryIcon'
import {OtherWordInTheGames}            from 'core/otherWordInTheGame/OtherWordInTheGames'
import DisplayButtonGroup               from 'display/DisplayButtonGroup'
import {ViewDisplays}                   from 'display/ViewDisplays'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import NameComponent                    from 'lang/name/component/Name.component'
import {ArrayAsCollection}              from 'util/collection/ArrayAsCollection'

import ALL = MiiCostumeCategories.ALL

//region -------------------- Import from deconstruction --------------------

const {MII_COSTUME,} = OtherWordInTheGames
const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

const all = new ArrayAsCollection(ALL,)

const items = all
const options = MiiCostumeCategoryAppOption.CompanionEnum.get.values

type MiiCostumeCategoryAppProperties = AppProperties

/** @reactComponent */
export default function MiiCostumeCategoryApp({viewDisplay, games,}: MiiCostumeCategoryAppProperties,) {
    const miiCostume = MII_COSTUME.singularNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName,)
    const miiCostumeAsLowerCase = MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName,)
    const miiCostumes = MII_COSTUME.pluralNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName,)
    const miiCostumesAsLowerCase = MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName,)

    return <SubMain partial-id="miiCostumeCategory" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('mii costume category.all', {singularName: miiCostumeAsLowerCase, pluralName: miiCostumesAsLowerCase,},)}</AppTitle>
        <PageTitle value={gameContentTranslation('mii costume category.singular', {SingularName: miiCostume, singularName: miiCostumeAsLowerCase, PluralName: miiCostumes, pluralName: miiCostumesAsLowerCase,},)}/>
        <Smm2OnlyAlert value={games}/>
        <PageViewChanger>
            <DisplayButtonGroup list="everyMiiCostumeCategory (list)" card="everyMiiCostumeCategory (card)" table="everyMiiCostumeCategory (table)" current={viewDisplay}/>
        </PageViewChanger>
        <UnfinishedText type="paragraph" isHidden>Mii costume category description</UnfinishedText>{/*TODO add description*/}
        <section id="miiCostumeCategory-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: Pick<MiiCostumeCategoryAppProperties, 'viewDisplay'>,) {
    if (viewDisplay === LIST)
        return <MiiCostumeCategoryList items={items}/>
    if (viewDisplay === CARD)
        return <MiiCostumeCategoryCardList items={items}/>
    return <MiiCostumeCategoryTable items={items}/>
}


interface MiiCostumeCategory_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<MiiCostumeCategories>

}

/** @reactComponent */
function MiiCostumeCategoryList({items,}: MiiCostumeCategory_SubContentProperties,) {
    return <List partial-id="miiCostumeCategory" items={items}>{it =>
        <div className="d-flex justify-content-between align-items-center">
            <NameComponent id="miiCostumeCategory-name" name={it.reference} popoverOrientation="right"/>
            <MiiCostumeCategoryIcon reference={it}/>
        </div>
    }</List>
}

/** @reactComponent */
function MiiCostumeCategoryCardList({items}: MiiCostumeCategory_SubContentProperties,) {
    return <CardList partial-id="miiCostumeCategory" items={items} default={1} small={2} medium={4}>{it =>
        <>
            <NameComponent id="miiCostumeCategory-name" name={it.reference} popoverOrientation="left"/>
            <MiiCostumeCategoryIcon reference={it}/>
        </>
    }</CardList>
}

/** @reactComponent */
function MiiCostumeCategoryTable({items,}: MiiCostumeCategory_SubContentProperties,) {
    return <Table id="miiCostumeCategory-table" items={items} options={options} caption={getCaption()} color="primary" headersColor="info"/>
}

function getCaption() {
    const miiCostume = MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName,)
    const miiCostumes = MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName,)

    return gameContentTranslation('mii costume category.all', {singularName: miiCostume, pluralName: miiCostumes,},)
}

//endregion -------------------- Sub content --------------------
