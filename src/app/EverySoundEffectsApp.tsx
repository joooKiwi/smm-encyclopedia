import './EverySoundEffectsApp.scss';

import type {PossibleSMM1SoundEffectImagePath, PossibleSMM2SoundEffectImagePath, PossibleSoundEffectsEnglishName} from '../entity/soundEffect/simple/SoundEffects.types';
import type {SoundEffect}                                                                                         from '../entity/soundEffect/simple/SoundEffect';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {Games}                         from '../entity/game/Games';
import {EmptyName}                     from '../lang/name/EmptyName';
import SMM2NameComponent               from '../entity/lang/SMM2Name.component';
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

    #map?: ReadonlyMap<PossibleSoundEffectsEnglishName, SoundEffect>;

    protected get map() {
        return this.#map ??= SoundEffectLoader.get.load();
    }

    protected get enum() {
        return SoundEffects.values;
    }

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    private static __getImageBasedBaseOnGame(isInGame: boolean, path: | PossibleSMM1SoundEffectImagePath | PossibleSMM2SoundEffectImagePath, alt: PossibleAlt,) {
        return !isInGame ? <></> : <img src={path} alt={alt}/>;
    }

    private static __getTranslationKey(soundEffect: SoundEffect,) {
        return <>{soundEffect.translationKey}</>;
    }

    protected get content() {
        const content = [] as SingleTableContent[];

        let index = 1;
        for (const [englishName, soundEffect,] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                EverySoundEffectsApp.__getImageBasedBaseOnGame(soundEffect.isInSuperMarioMaker1, SoundEffects.getValue(soundEffect.english)!.SMM1ImagePath!, `SMM1 - ${englishName}`,),
                EverySoundEffectsApp.__getImageBasedBaseOnGame(soundEffect.isInSuperMarioMaker2, SoundEffects.getValue(soundEffect.english)!.SMM2ImagePath!, `SMM2 - ${englishName}`,),
                <SMM2NameComponent id="soundEffect_name" name={soundEffect} popoverOrientation="right"/>,
                soundEffect.categoryName === EmptyName.get ? <></> : <SMM2NameComponent id={`${index}_soundEffectCategory_name`} name={soundEffect.category} popoverOrientation="right"/>,
                EverySoundEffectsApp.__getTranslationKey(soundEffect),
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        console.log(this.enum);//README this log is there only to help debugging.

        return <Table
            id="soundEffect_table"
            caption={<GameContentTranslationComponent translationKey="Every sound effects"/>}
            headers={[
                '#',
                {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
                {key: 'category', element: <GameContentTranslationComponent translationKey="Category"/>,},
                // @ts-ignore
                {key: 'player behaviour', element: <GameContentTranslationComponent translationKey="Player behaviour"/>,},
            ]}
            content={this.content}
        />;
    }

}

type PossibleAlt = `SMM${| 1 | 2} - ${PossibleSoundEffectsEnglishName}`;