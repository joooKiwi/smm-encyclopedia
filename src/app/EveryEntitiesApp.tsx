import './EveryEntitiesApp.scss';

import React                        from 'react';
import {TFunction, withTranslation} from 'react-i18next';

import AbstractApp                           from './AbstractApp';
import {DebugEntityReferences, EntityLoader} from '../entity/simple/EntityLoader';
import {Entity}                              from '../entity/simple/Entity';
import {Games}                               from '../entity/game/Games';
import TableWithTranslations                 from './tools/table/TableWithTranslations';
import {SingleTableContent}                  from './tools/table/Table';
import SMM2NameComponent                     from '../entity/lang/SMM2NameComponent';

class EveryEntitiesApp
    extends AbstractApp<{ t: TFunction<'gameContent'> }> {

    #entities?: Map<string, DebugEntityReferences>;

    protected get map() {
        return this.#entities ?? (this.#entities = EntityLoader.get.load());
    }


    private __createGameImage(game: Games): JSX.Element {
        return <img src={game.imagePath} alt={game.englishName} className="game_image"/>;
    }

    protected getGameComponent(entity: Entity): JSX.Element {
        return entity.isInSuperMarioMaker1 && entity.isInSuperMarioMaker2
            ? <span>{this.props.t('Every games')}</span>
            : entity.isInSuperMarioMaker1
                ? this.__createGameImage(Games.SUPER_MARIO_MAKER_1)
                : this.__createGameImage(Games.SUPER_MARIO_MAKER_2);
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
                this.getGameComponent(entity),
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
                ],
                content: this.content,
            }))}
        />;
    }

}

export default withTranslation('gameContent')(EveryEntitiesApp);