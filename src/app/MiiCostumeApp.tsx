import './MiiCostumeApp.scss'

import type {CollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {ReactProperties}              from 'util/react/ReactProperties'

import {MiiCostumeAppOption}            from 'app/options/MiiCostumeAppOption'
import Table                            from 'app/tools/table/Table'
import TextComponent                    from 'app/tools/text/TextComponent'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import AppTitle                         from 'app/util/AppTitle'
import CardList                         from 'app/util/CardList'
import List                             from 'app/util/List'
import PageTitle                        from 'app/util/PageTitle'
import PageViewChanger                  from 'app/util/PageViewChanger'
import SubMain                          from 'app/util/SubMain'
import {MiiCostumes}                    from 'core/miiCostume/MiiCostumes'
import MiiCostumeImage                  from 'core/miiCostume/component/MiiCostumeImage'
import {MiiCostumeCategories}           from 'core/miiCostumeCategory/MiiCostumeCategories'
import MiiCostumeCategoryIcon           from 'core/miiCostumeCategory/component/MiiCostumeCategoryIcon'
import {OtherWordInTheGames}            from 'core/otherWordInTheGame/OtherWordInTheGames'
import DisplayButtonGroup               from 'display/DisplayButtonGroup'
import {ViewDisplays}                   from 'display/ViewDisplays'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import NameComponent                    from 'lang/name/component/Name.component'
import {ArrayAsCollection}              from 'util/collection/ArrayAsCollection'

import ALL =               MiiCostumes.ALL
import CategoryCompanion = MiiCostumeCategories.Companion

//region -------------------- Import from deconstruction --------------------

const {MII_COSTUME,} = OtherWordInTheGames
const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

const all = new ArrayAsCollection(ALL,)

const items = all
const options = MiiCostumeAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function MiiCostumeApp({viewDisplay,}: AppWithInterpreterProperties,) {
    const miiCostume = MII_COSTUME.singularNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName,)
    const miiCostumeAsLowerCase = MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName,)
    const miiCostumesAsLowerCase = MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName,)

    return <SubMain partial-id="miiCostume" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('mii costume.all', {singularName: miiCostumeAsLowerCase, pluralName: miiCostumesAsLowerCase,},)}</AppTitle>
        <PageTitle value={miiCostume}/>
        <PageViewChanger>
            <DisplayButtonGroup list="everyMiiCostume (list)" card="everyMiiCostume (card)" table="everyMiiCostume (table)" current={viewDisplay}/>
        </PageViewChanger>
        <UnfinishedText type="paragraph" isHidden>Mii costume description</UnfinishedText>{/*TODO add description*/}
        <section id="miiCostume-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === LIST)
        return <MiiCostumeList items={items}/>
    if (viewDisplay === CARD)
        return <MiiCostumeCardList items={items}/>
    return <MiiCostumeTable items={items}/>
}


interface MiiCostume_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<MiiCostumes>

}

/** @reactComponent */
function MiiCostumeList({items,}: MiiCostume_SubContentProperties,) {
    return <List partial-id="miiCostume" items={items} withSeparator>{it =>
        <div className="d-flex justify-content-between align-items-center">
            <NameComponent id="miiCostume-name" name={it.reference} popoverOrientation="right"/>
            <MiiCostumeImage reference={it}/>
        </div>
    }</List>
}

/** @reactComponent */
function MiiCostumeCardList({items,}: MiiCostume_SubContentProperties,) {
    return <CardList partial-id="miiCostume" items={items} default={1} small={2} medium={3} large={4} extra-large={5} extra-extra-large={6}>{it => {
        const reference = it.reference
        return <>
            <NameComponent id="miiCostume-name" name={reference} popoverOrientation="left"/>
            <div className="d-flex">
                <MiiCostumeImage reference={it}/>
                <MiiCostumeCategoryIcon reference={CategoryCompanion.getValueByName(reference.categoryEnglish,)}/>
            </div>
        </>
    }}</CardList>
}

/** @reactComponent */
function MiiCostumeTable({items,}: MiiCostume_SubContentProperties,) {
    return <Table id="miiCostume-table" items={items} options={options} caption={getCaption()} color="primary" headersColor="info"/>
}

function getCaption() {
    const miiCostume = MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName,)
    const miiCostumes = MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName,)

    return gameContentTranslation('mii costume.all', {
        singularName: <TextComponent key="miiCostume-singularName" content={miiCostume} className="text-decoration-underline"/>,
        pluralName: <TextComponent key="miiCostume-pluralName" content={miiCostumes} className="text-decoration-underline"/>,
    },)
}

//endregion -------------------- Sub content --------------------
