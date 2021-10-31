import './EveryEntitiesApp.scss';

import type {DebugEntityReferences} from '../entity/simple/Entity.loader';
import type {SingleTableContent}    from './tools/table/Table.types';

import AbstractApp                       from './AbstractApp';
import ContentTranslationComponent       from '../lang/components/ContentTranslationComponent';
import CourseThemeComponent              from '../entity/theme/CourseTheme.component';
import {EntityLimitTypes}                from '../entity/limit/EntityLimitTypes';
import {EntityLoader}                    from '../entity/simple/Entity.loader';
import GameComponent                     from '../entity/game/Game.component';
import {GameContentTranslationContainer} from '../lang/containers/GameContentTranslation.container';
import GameContentTranslationComponent   from '../lang/components/GameContentTranslationComponent';
import GameStyleComponent                from '../entity/gameStyle/GameStyle.component';
import LimitComponent                    from '../entity/limit/Limit.component';
import SMM2NameComponent                 from '../entity/lang/SMM2Name.component';
import Table                             from './tools/table/Table';
import TimeComponent                     from '../entity/time/Time.component';

/**
 * @reactComponent
 */
export default class EveryEntitiesApp
    extends AbstractApp {

    //region -------------------- Attributes & getter methods --------------------

    #map?: ReadonlyMap<string, DebugEntityReferences>;

    protected get map() {
        return this.#map ??= EntityLoader.get.load();
    }

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const [englishName, {entity},] of this.map.entries()) {
            if (entity === undefined)
                throw new ReferenceError(`The entity #${index} was not initialised`);
            content.push([englishName,
                <>{index}</>,
                <SMM2NameComponent id="entity_name" name={entity} popoverOrientation="right"/>,
                <GameComponent reference={entity} name={entity}/>,
                <GameStyleComponent reference={entity} name={entity}/>,
                <CourseThemeComponent reference={entity} name={entity}/>,
                <TimeComponent reference={entity} name={entity}/>,
                <SMM2NameComponent id={`entityCategory_name_${index}`} name={entity.category} popoverOrientation="left"/>,
                <LimitComponent id={`editor_${index}`} limits={entity.toLimitInTheEditorMap()}/>,
                <LimitComponent id={`whilePlaying_${index}`} limits={entity.toLimitWhilePlayingMap()}/>,
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        console.log(this.map);

        return <Table
            id="entity_table"
            caption={<GameContentTranslationComponent translationKey="Every entities"/>}
            headers={[
                [
                    {key: 'originalOrder', height: 2, element: <>#</>,},
                    {key: 'name', height: 2, element: <ContentTranslationComponent translationKey="Name"/>,},
                    {key: 'game', height: 2, element: <GameContentTranslationComponent translationKey="Game"/>,},
                    {key: 'gameStyle', height: 2, element: <GameContentTranslationComponent translationKey="Game Style"/>,},
                    {key: 'courseTheme', height: 2, element: <GameContentTranslationComponent translationKey="Course Theme.spoken"/>,},
                    {key: 'time', height: 2, element: <GameContentTranslationComponent translationKey="Time"/>,},
                    {key: 'category', height: 2, element: <GameContentTranslationComponent translationKey="Category"/>,},
                    {key: 'limit', width: 2, element: <GameContentTranslationComponent translationKey="Limit"/>,},
                ],
                [
                    {key: 'limit_editor', element: <GameContentTranslationComponent translationKey={EntityLimitTypes.EDITOR.englishCommonText}/>, tooltip: new GameContentTranslationContainer('Limit in the editor'),},
                    {key: 'limit_whilePlaying', element: <GameContentTranslationComponent translationKey={EntityLimitTypes.WHILE_PLAYING.englishCommonText}/>, tooltip: new GameContentTranslationContainer('Limit while playing'),},
                ],
            ]}
            content={this.content}
        />;
    }

}
