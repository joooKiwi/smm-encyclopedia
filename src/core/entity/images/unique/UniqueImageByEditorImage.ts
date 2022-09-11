import type {EditorImage} from '../editor/EditorImage';

import {AbstractUniqueImage}    from './AbstractUniqueImage';
import {GameStyles}             from '../../../gameStyle/GameStyles';
import {Themes}                 from '../../../theme/Themes';
import {Times}                  from '../../../time/Times';
import {EMPTY_ARRAY, EMPTY_MAP} from '../../../../util/emptyVariables';

export class UniqueImageByEditorImage
    extends AbstractUniqueImage {

    //region -------------------- Fields --------------------

    readonly #gameStyle;
    readonly #themeMap: ReadonlyMap<GameStyles, readonly Themes[]>;
    readonly #timeMap: ReadonlyMap<GameStyles, readonly Times[]>;

    //endregion -------------------- Fields --------------------

    public constructor(editor: EditorImage,)
    public constructor(editor: EditorImage, gameStyle: GameStyles,)
    public constructor(editor: EditorImage, gameStyle: | GameStyles | null, themes: ArrayReceived<Themes>,)
    public constructor(editor: EditorImage, gameStyle: | GameStyles | null, themes: | ArrayReceived<Themes> | null, times: ArrayReceived<Times>,)
    public constructor(editor: EditorImage, gameStyle: | GameStyles | null = null, themes: | ArrayReceived<Themes> | null = null, times: | ArrayReceived<Times> | null = null,) {
        super(editor, null, null,);
        this.#gameStyle = gameStyle;
        this.#themeMap = themes == null ? EMPTY_MAP : this.#createMap(themes);
        this.#timeMap = times == null ? EMPTY_MAP : this.#createMap(times);
    }

    #createMap<T, >(values: ArrayReceived<T>,): ReadonlyMap<GameStyles, readonly T[]> {
        const returnedMap = new Map<GameStyles, readonly T[]>();
        for (const gameStyle of GameStyles) {
            const value = values[gameStyle.ordinal];
            if (value == null)
                continue;
            returnedMap.set(gameStyle, value,);
        }
        return returnedMap;
    }


    #getGameStyle(gameStyle: GameStyles,): | GameStyles | null {
        const _gameStyle = this.#gameStyle;
        return _gameStyle == null || _gameStyle === gameStyle ? gameStyle : null;
    }

    #getThemes(gameStyle: GameStyles,): readonly Themes[] {
        return this.#themeMap.get(gameStyle) ?? Themes.values;
    }

    #getTimes(gameStyle: GameStyles,): readonly Times[] {
        return this.#timeMap.get(gameStyle) ?? Times.values;
    }

    public override get(gameStyle: GameStyles,): readonly string[] {
        const image = this.editorImage;
        const gameStyleOrNull = this.#getGameStyle(gameStyle);
        if (gameStyleOrNull == null)
            return EMPTY_ARRAY;

        return [...new Set(this.#getThemes(gameStyle).map(theme =>
            this.#getTimes(gameStyle).map(time =>
                image.get(true, gameStyleOrNull, theme, time,))).flat(2)),
        ];
    }

}

type ArrayReceived<T, > = [
    smb: | readonly T[] | null,
    smb3: | readonly T[] | null,
    smb3: | readonly T[] | null,
    nsmbu: | readonly T[] | null,
    sm3dw: | readonly T[] | null,
];