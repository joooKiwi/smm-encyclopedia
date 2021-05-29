import {GameContentTranslationElement} from '../../lang/components/elements/GameContentTranslationElement';
import {IsInGameStyleProperty}         from '../properties/IsInGameStyleProperty';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {withTranslation}               from 'react-i18next';
import {GameStyles}                    from './GameStyles';
import React                           from 'react';

export interface GameStyleElement
    extends GameContentTranslationElement {

    reference: IsInGameStyleProperty

}

class GameStyleComponent
    extends GameContentTranslationComponent<GameStyleElement> {


    protected get reference() {
        return this.props.reference;
    }

    protected get isInEveryGameStyles(): boolean {
        return this.reference.isInSuperMarioBrosStyle
            && this.reference.isInSuperMarioBros3Style
            && this.reference.isInSuperMarioWorldStyle
            && this.reference.isInNewSuperMarioBrosUStyle
            && (this.reference.isInSuperMario3DWorldStyle ?? false);
    }

    private __createSingleGameStyleImage(gameStyle: GameStyles): JSX.Element {
        return <img src={gameStyle.smallImagePath} alt={gameStyle.englishName} className="gameStyle_image"/>;
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
        return <div>{gameStyles.map((gameStyle, index) => {
            if (index === gameStyles.length - 1)
                return this.__createSingleGameStyleImage(gameStyle);
            return <>{this.__createSingleGameStyleImage(gameStyle)}<br/></>;
        })}</div>;
    }


}

export default withTranslation('gameContent')(GameStyleComponent);
