import './EveryEntitiesApp.scss';

import React from 'react';

import AbstractApp                           from './AbstractApp';
import CourseThemeComponent                  from '../entity/theme/CourseThemeComponent';
import {DebugEntityReferences, EntityLoader} from '../entity/simple/EntityLoader';
import GameComponent                         from '../entity/game/GameComponent';
import GameStyleComponent                    from '../entity/gameStyle/GameStyleComponent';
import {SingleTableContent}                  from './tools/table/Table';
import SMM2NameComponent                     from '../entity/lang/SMM2NameComponent';
import TableWithTranslations                 from './tools/table/TableWithTranslations';
import TimeComponent                         from '../entity/time/TimeComponent';

export default class EveryEntitiesApp
    extends AbstractApp {

    #entities?: Map<string, DebugEntityReferences>;

    protected get map() {
        return this.#entities ?? (this.#entities = EntityLoader.get.load());
    }


    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const [englishName, {entity}] of this.map.entries()) {
            if (entity === undefined)
                throw new ReferenceError(`The entity #${index} was not initialised`);
            content.push([englishName,
                <>{index}</>,
                <SMM2NameComponent id="entity_name" name={entity} popoverOrientation="right"/>,
                <GameComponent reference={entity} name={entity}/>,
                <GameStyleComponent reference={entity} name={entity}/>,
                <CourseThemeComponent reference={entity} name={entity}/>,
                <TimeComponent reference={entity} name={entity}/>,
            ]);
            index++;
        }
        return content;
    }

    protected _mainContent(): JSX.Element {
        console.log(this.map);

        return <TableWithTranslations
            renderCallback={(translations => ({
                id: 'entity_table',
                caption: translations.gameContentTranslation('Every entities'),
                headers: [
                    '#',
                    translations.contentTranslation('Language'),
                    translations.gameContentTranslation('Game'),
                    translations.gameContentTranslation('Game Style'),
                    translations.gameContentTranslation('Course Theme.spoken'),
                    translations.gameContentTranslation('Time'),
                ],
                content: this.content,
            }))}
        />;
    }

}