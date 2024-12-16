import './MysteryMushroomApp.scss'

import type {Array}            from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {ViewAndRouteName}             from 'app/withInterpreter/ViewDisplays.types'
import type {ReactProperties}              from 'util/react/ReactProperties'

import SubMainContainer                      from 'app/_SubMainContainer'
import {MysteryMushroomAppOption}            from 'app/options/MysteryMushroomAppOption'
import Table                                 from 'app/tools/table/Table'
import {unfinishedText}                      from 'app/tools/text/UnfinishedText'
import CardList                              from 'app/util/CardList'
import List                                  from 'app/util/List'
import {ViewDisplays}                        from 'app/withInterpreter/ViewDisplays'
import {MysteryMushrooms}                    from 'core/mysteryMushroom/MysteryMushrooms'
import MysteryMushroomClimbingImage          from 'core/mysteryMushroom/component/MysteryMushroom.climbing.image'
import MysteryMushroomFallingAfterAJumpImage from 'core/mysteryMushroom/component/MysteryMushroom.fallingAfterAJump.image'
import MysteryMushroomGoalPoleImage          from 'core/mysteryMushroom/component/MysteryMushroom.goalPole.image'
import MysteryMushroomJumpImage              from 'core/mysteryMushroom/component/MysteryMushroom.jump.image'
import MysteryMushroomPressingDownImage      from 'core/mysteryMushroom/component/MysteryMushroom.pressingDown.image'
import MysteryMushroomRunningImage           from 'core/mysteryMushroom/component/MysteryMushroom.running.image'
import MysteryMushroomSwimmingImage          from 'core/mysteryMushroom/component/MysteryMushroom.swimming.image'
import MysteryMushroomTauntImage             from 'core/mysteryMushroom/component/MysteryMushroom.taunt.image'
import MysteryMushroomTurningImage           from 'core/mysteryMushroom/component/MysteryMushroom.turning.image'
import MysteryMushroomWaitingImage           from 'core/mysteryMushroom/component/MysteryMushroom.waiting.image'
import MysteryMushroomWalkImage              from 'core/mysteryMushroom/component/MysteryMushroom.walk.image'
import {OtherWordInTheGames}                 from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}              from 'lang/components/translationMethods'
import NameComponent                         from 'lang/name/component/Name.component'
import {Empty}                               from 'util/emptyVariables'
import {ArrayAsCollection}                   from 'util/collection/ArrayAsCollection'

import ALL =          MysteryMushrooms.ALL
import EMPTY_STRING = Empty.EMPTY_STRING

const {MYSTERY_MUSHROOM,} = OtherWordInTheGames
const all = new ArrayAsCollection(ALL,)

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyMysteryMushroom (list)',],
    [ViewDisplays.CARD_LIST, 'everyMysteryMushroom (card)',],
    [ViewDisplays.TABLE, 'everyMysteryMushroom (table)',],
] as const satisfies Array<ViewAndRouteName>
const items = all
const options = MysteryMushroomAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function MysteryMushroomApp({viewDisplay,}: AppWithInterpreterProperties,) {
    const {MYSTERY_MUSHROOM,} = OtherWordInTheGames
    const mysteryMushroom = MYSTERY_MUSHROOM.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.singularEnglishName.toLowerCase(),)
    const mysteryMushrooms = MYSTERY_MUSHROOM.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.pluralEnglishName.toLowerCase(),)

    return <SubMainContainer reactKey="mysteryMushroom" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('mystery mushroom.all', {singularName: mysteryMushroom, pluralName: mysteryMushrooms,},)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <MysteryMushroomList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <MysteryMushroomCardList items={items}/>
    return <MysteryMushroomTable items={items}/>
}


interface MysteryMushroom_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<MysteryMushrooms>

}

/** @reactComponent */
function MysteryMushroomList({items,}: MysteryMushroom_SubContentProperties,) {
    return <List partialId="mysteryMushroom" items={items}>{it =>
        <div className="d-flex justify-content-between">
            <NameComponent id="mysteryMushroom-name" name={it.reference} popoverOrientation="right"/>
            <div className="images-container">
                <MysteryMushroomWaitingImage value={it}/>
            </div>
        </div>
    }</List>
}

/** @reactComponent */
function MysteryMushroomCardList({items,}: MysteryMushroom_SubContentProperties,) {
    return <CardList partial-id="mysteryMushroom" items={items} default={1} small={2} large={3} extra-large={4} extra-extra-large={6}>{it => {
        if (it.imageFileName1 == null)
            return <NameComponent id="mysteryMushroom-name" name={it.reference} popoverOrientation="right"/>

        return <>
            <NameComponent id="mysteryMushroom-name" name={it.reference} popoverOrientation="right"/>
            <div className={`d-flex flex-wrap justify-content-center${it.imageFileName2 == null ? EMPTY_STRING : ' with2Images'}`}>
                <MysteryMushroomWaitingImage value={it}/>
                <MysteryMushroomTauntImage value={it}/>
                <MysteryMushroomPressingDownImage value={it}/>
                <MysteryMushroomWalkImage value={it}/>
                <MysteryMushroomRunningImage value={it}/>
                <MysteryMushroomSwimmingImage value={it}/>
                <MysteryMushroomJumpImage value={it}/>
                <MysteryMushroomFallingAfterAJumpImage value={it}/>
                <MysteryMushroomTurningImage value={it}/>
                <MysteryMushroomClimbingImage value={it}/>
                <MysteryMushroomGoalPoleImage value={it}/>
            </div>
        </>
    }}</CardList>
}

/** @reactComponent */
function MysteryMushroomTable({items,}: MysteryMushroom_SubContentProperties,) {
    return <Table id="mysteryMushroom-table" items={items} options={options} caption={getCaption()} color="primary" headersColor="info"/>
}

function getCaption() {
    const mysteryMushroom = MYSTERY_MUSHROOM.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.singularEnglishName,).toLowerCase()
    const mysteryMushrooms = MYSTERY_MUSHROOM.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.pluralEnglishName,).toLowerCase()

    return gameContentTranslation('mystery mushroom.all', {singularName: mysteryMushroom, pluralName: mysteryMushrooms,},)
}

//endregion -------------------- Sub content --------------------
