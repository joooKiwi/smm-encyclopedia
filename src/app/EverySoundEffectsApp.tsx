import './EverySoundEffectsApp.scss';

import type {PossibleEnglishName, PossibleImagePath_SMM1, PossibleImagePath_SMM2} from '../entity/soundEffect/simple/SoundEffects.types';
import type {SoundEffect}                                                         from '../entity/soundEffect/simple/SoundEffect';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {Games}                         from '../entity/game/Games';
import {EmptyName}                     from '../lang/name/EmptyName';
import NameComponent                   from '../lang/name/component/Name.component';
import {SingleTableContent}            from './tools/table/Table.types';
import {SoundEffectLoader}             from '../entity/soundEffect/simple/SoundEffect.loader';
import {SoundEffects}                  from '../entity/soundEffect/simple/SoundEffects';
import Table                           from './tools/table/Table';

/**
 * @reactComponent
 */
export default class EverySoundEffectsApp
    extends AbstractApp {

    //region -------------------- Attributes & getter methods --------------------

    #map?: ReadonlyMap<PossibleEnglishName, SoundEffect>;

    protected get map() {
        return this.#map ??= SoundEffectLoader.get.load();
    }

    protected get enum() {
        return SoundEffects.values;
    }

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    private static __getImageBasedBaseOnGame(isInGame: boolean, path: | PossibleImagePath_SMM1 | PossibleImagePath_SMM2, alt: PossibleAlt,) {
        return !isInGame ? <></> : <img src={path} alt={alt}/>;
    }

    protected get content() {
        const content = [] as SingleTableContent[];

        let index = 1;
        for (const [englishName, soundEffect,] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                EverySoundEffectsApp.__getImageBasedBaseOnGame(soundEffect.isInSuperMarioMaker1, SoundEffects.getValue(soundEffect.english)!.SMM1ImagePath!, `SMM1 - ${englishName}`,),
                EverySoundEffectsApp.__getImageBasedBaseOnGame(soundEffect.isInSuperMarioMaker2, SoundEffects.getValue(soundEffect.english)!.SMM2ImagePath!, `SMM2 - ${englishName}`,),
                <NameComponent id="name" name={soundEffect} popoverOrientation="right"/>,
                soundEffect.categoryName === EmptyName.get ? <></> : <NameComponent id={`${index}_soundEffectCategory-name`} name={soundEffect.category} popoverOrientation="right"/>,
                <>--{soundEffect.translationKey}--</>,
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        return <Table
            id="soundEffect-table"
            caption={<GameContentTranslationComponent translationKey="Every sound effects"/>}
            headers={[
                [
                    {key: 'originalOrder', height: 2, element: <>#</>,},
                    {key: 'game', width: 2, element: <GameContentTranslationComponent translationKey="Game"/>,},
                    {key: 'name', height: 2, element: <ContentTranslationComponent translationKey="Name"/>,},
                    {key: 'category', height: 2, element: <GameContentTranslationComponent translationKey="Category"/>,},
                    {key: 'player behaviour', height: 2, element: <>--Player behaviour--</>/*<GameContentTranslationComponent translationKey="Player behaviour"/>*/,},
                ],
                [
                    {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                    {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                ],
            ]}
            content={this.content}
        />;
    }

}

type PossibleAlt = `SMM${| 1 | 2} - ${PossibleEnglishName}`;
