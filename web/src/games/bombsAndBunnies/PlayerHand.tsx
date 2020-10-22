import * as React from 'react';

import { BunnyCardComponent, BombCardComponent } from './CardComponent';

import css from './PlayerHand.css';
import { CardType } from './cardType';

export interface IPlayerHandProps {
  playerIndex: number;
  hand: CardType[];
  selectCard?: (handIndex: number) => void;
}

export class PlayerHand extends React.Component<IPlayerHandProps, {}> {
  _selectCard = (handIndex: number) => {
    if (!this.props.selectCard) {
      return;
    }

    this.props.selectCard(handIndex);
  };

  render() {
    return <div className={css.playerHand}>{this.renderCards()}</div>;
  }

  renderCards() {
    if (this.props.hand.length == 0) {
      return <div className={css.title}>No Cards left...</div>;
    }

    const w: number = this.props.hand.length * 40 + 80;

    return (
      <div className={css.cards} style={{ width: w }}>
        {this.renderHand()}
      </div>
    );
  }

  renderHand() {
    return [...this.props.hand]
      .sort((a, b) => a - b)
      .map((card: CardType, index: number) => this.renderCard(card, index, this.props.hand.length));
  }

  renderCard(card: CardType, index: number, count: number) {
    const rot = -((count * 3) / 2) + (index * (count * 3)) / (count - 1);
    const y = Math.abs(index - (count - 1) / 2) * (count * 3);
    const styles = {
      transform: `rotate(${rot}deg) translateY(${y}px)`,
      transformOrigin: `bottom center`,
      width: '407px',
    };

    if (card === CardType.Bunny) {
      return (
        <div className={css.cardContainer} key={index}>
          <div style={styles}>
            <BunnyCardComponent
              click={() => this._selectCard(index)}
              selectable={this.props.selectCard ? true : false}
            />
          </div>
        </div>
      );
    }

    return (
      <div className={css.cardContainer} key={index}>
        <div style={styles}>
          <BombCardComponent click={() => this._selectCard(index)} selectable={this.props.selectCard ? true : false} />
        </div>
      </div>
    );
  }
}
