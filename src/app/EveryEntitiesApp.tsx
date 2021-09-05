import './EveryEntitiesApp.scss';

import React from 'react';

import type {DebugEntityReferences} from '../entity/simple/EntityLoader';
import type {SingleTableContent}    from './tools/table/Table.types';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import CourseThemeComponent            from '../entity/theme/CourseThemeComponent';
import EditorLimitComponent            from '../entity/limit/EditorLimitComponent';
import {EntityLoader}                  from '../entity/simple/EntityLoader';
import GameComponent                   from '../entity/game/GameComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import GameStyleComponent              from '../entity/gameStyle/GameStyleComponent';
import SMM2NameComponent               from '../entity/lang/SMM2NameComponent';
import Table                           from './tools/table/Table';
import TimeComponent                   from '../entity/time/TimeComponent';

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
                <EditorLimitComponent limit={entity}/>,
            ]);
            index++;
        }
        return content;
    }

    protected _mainContent(): JSX.Element {
        console.log(this.map);

        return <Table
            id="entity_table"
            caption={<GameContentTranslationComponent translationCallback={translation => translation('Every entities')}/>}
            headers={[
                '#',
                {key: 'language', element: <ContentTranslationComponent translationCallback={translation => translation('Language')}/>,},
                {key: 'game', element: <GameContentTranslationComponent translationCallback={translation => translation('Game')}/>,},
                {key: 'gameStyle', element: <GameContentTranslationComponent translationCallback={translation => translation('Game Style')}/>,},
                {key: 'courseTheme', element: <GameContentTranslationComponent translationCallback={translation => translation('Course Theme.spoken')}/>,},
                {key: 'time', element: <GameContentTranslationComponent translationCallback={translation => translation('Time')}/>,},
                {key: 'category', element: <GameContentTranslationComponent translationCallback={translation => translation('Category')}/>,},
                {key: 'editorLimit', element: <GameContentTranslationComponent translationCallback={translation => translation('Limit in the editor')}/>,}
            ]}
            content={this.content}
        />;
    }

}