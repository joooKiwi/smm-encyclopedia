import './EveryEntitiesApp.scss';

import type {DebugEntityReferences} from '../entity/simple/Entity.loader';
import {EntityLoader}               from '../entity/simple/Entity.loader';
import type {SingleTableContent}    from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import CourseThemeComponent            from '../entity/theme/CourseTheme.component';
import EditorLimitComponent            from '../entity/limit/EditorLimit.component';
import GameComponent                   from '../entity/game/Game.component';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import GameStyleComponent              from '../entity/gameStyle/GameStyle.component';
import SMM2NameComponent               from '../entity/lang/SMM2Name.component';
import Table                           from './tools/table/Table';
import TimeComponent                   from '../entity/time/Time.component';

/**
 * @reactComponent
 */
export default class EveryEntitiesApp
    extends AbstractApp {

    #entities?: Map<string, DebugEntityReferences>;

    protected get map() {
        return this.#entities ??= EntityLoader.get.load();
    }


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
                <EditorLimitComponent index={index} limit={entity}/>,
            ]);
            index++;
        }
        return content;
    }

    protected _mainContent() {
        console.log(this.map);

        return <Table
            id="entity_table"
            caption={<GameContentTranslationComponent translationKey="Every entities"/>}
            headers={[
                '#',
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
                {key: 'game', element: <GameContentTranslationComponent translationKey="Game"/>,},
                {key: 'gameStyle', element: <GameContentTranslationComponent translationKey="Game Style"/>,},
                {key: 'courseTheme', element: <GameContentTranslationComponent translationKey="Course Theme.spoken"/>,},
                {key: 'time', element: <GameContentTranslationComponent translationKey="Time"/>,},
                {key: 'category', element: <GameContentTranslationComponent translationKey="Category"/>,},
                {key: 'editorLimit', element: <GameContentTranslationComponent translationKey="Limit in the editor"/>,}
            ]}
            content={this.content}
        />;
    }

}