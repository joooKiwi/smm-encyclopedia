import type {PossibleSoundEffectsEnglishName} from '../entity/soundEffect/simple/SoundEffects.types';
import type {SoundEffect}                     from '../entity/soundEffect/simple/SoundEffect';

import AbstractApp                     from './AbstractApp';
import ContentTranslationComponent     from '../lang/components/ContentTranslationComponent';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {Games}                         from '../entity/game/Games';
import SMM2NameComponent               from '../entity/lang/SMM2Name.component';
import {SingleTableContent}            from './tools/table/Table.types';
import {SoundEffectLoader}             from '../entity/soundEffect/simple/SoundEffect.loader';
import {SoundEffects}                  from '../entity/soundEffect/simple/SoundEffects';
import Table                           from './tools/table/Table';
import YesOrNoResultTextComponent      from './tools/text/YesOrNoResultTextComponent';

/**
 * @reactComponent
 */
export default class EverySoundEffectsApp
    extends AbstractApp {


    #map?: ReadonlyMap<PossibleSoundEffectsEnglishName, SoundEffect>;


    protected get map() {
        return this.#map ??= SoundEffectLoader.get.load();
    }

    protected get enum() {
        return SoundEffects.values;
    }

    protected get content() {
        const content = [] as SingleTableContent[];

        let index = 1;
        for (const [englishName, soundEffect,] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                <SMM2NameComponent id="soundEffect_name" name={soundEffect} popoverOrientation="right"/>,
                <SMM2NameComponent id={'soundEffectCategory_name'} name={soundEffect.category} popoverOrientation="right"/>,
                <YesOrNoResultTextComponent boolean={soundEffect.isInSuperMarioMaker1}/>,
                <YesOrNoResultTextComponent boolean={soundEffect.isInSuperMarioMaker2}/>,
            ]);
            index++;
        }
        return content;
    }

    protected _mainContent() {
        console.log(this.enum);//README this log is there only to help debugging.

        return <Table
            id="soundEffect_table"
            caption={<GameContentTranslationComponent translationKey="Every sound effects"/>}
            headers={[
                '#',
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
                {key: 'category', element: <GameContentTranslationComponent translationKey="Category"/>,},
                {key: 'isInSuperMarioMaker1', alt: Games.SUPER_MARIO_MAKER_1.englishName, path: Games.SUPER_MARIO_MAKER_1.imagePath,},
                {key: 'isInSuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.englishName, path: Games.SUPER_MARIO_MAKER_2.imagePath,},
            ]}
            content={this.content}
        />;
    }

}