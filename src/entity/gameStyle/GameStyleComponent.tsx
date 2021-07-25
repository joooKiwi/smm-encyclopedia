import React             from 'react';
import {withTranslation} from 'react-i18next';

import type {GameContentTranslationElement} from '../../lang/components/elements/GameContentTranslationElement';
import type {GameStyles}                    from './GameStyles';
import type {GameStyleProperty}             from '../properties/GameStyleProperty';
import type {Name}                          from '../../lang/name/Name';

import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';

export interface GameStyleElement
    extends GameContentTranslationElement {

    reference: GameStyleProperty

    name: Name

}

class GameStyleComponent
    extends GameContentTranslationComponent<GameStyleElement> {


    protected get reference() {
        return this.props.reference;
    }

    protected get name() {
        return this.props.name;
    }

    protected get isInEveryGameStyles(): boolean {
        return this.reference.isInSuperMarioBrosStyle
            && this.reference.isInSuperMarioBros3Style
            && this.reference.isInSuperMarioWorldStyle
            && this.reference.isInNewSuperMarioBrosUStyle
            && (this.reference.isInSuperMario3DWorldStyle ?? false);
    }

    private __createSingleGameStyleImage(gameStyle: GameStyles,): JSX.Element {
        return <img key={`${this.name.english} - ${gameStyle.englishName}`} src={gameStyle.smallImagePath} alt={gameStyle.englishName} className="gameStyle_image"/>;
    }


    public render(): JSX.Element {
        if (this.isInEveryGameStyles)
            return <span>{this.translation('Every game styles')}</span>;

        const gameStyles = [] as GameStyles[];
        this.reference.toGameStyleMap().forEach((isInGameStyle, gameStyle) => {
            if (isInGameStyle)
                gameStyles.push(gameStyle);
        });
        if (gameStyles.length === 1)
            return this.__createSingleGameStyleImage(gameStyles[0]);
        return <div key={`${this.name.english} - group`}>{gameStyles.map(gameStyle => this.__createSingleGameStyleImage(gameStyle))}</div>;
    }


}

export default withTranslation('gameContent')(GameStyleComponent);
