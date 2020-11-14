import * as React from 'react';

import css from './BetButton.css';

interface IBetButtonProps {
  click?: () => void;
  active?: boolean;
}

class BaseButton extends React.Component<IBetButtonProps> {
  text: string = '';
  activeText: string = '';
  flip: boolean = false;

  render() {
    const availableClass = !!this.props.click ? css.available : '';
    const activeClass = !!this.props.active ? css.active : '';
    const classNames = `${css.btn} ${availableClass} ${activeClass}`;

    let text = this.text;
    if (this.props.active && this.activeText) {
      text = this.activeText;
    }

    return (
      <svg
        onClick={this.props.click}
        className={classNames}
        version="1.0"
        width="100"
        height="100"
        viewBox="0 0 85.704 64.542"
        id="Layer_1"
      >
        <defs id="defs8" />
        <g transform="matrix(0.9486962,0,0,0.9486962,2.4834364,1.8361818)" id="g3">
          <path
            transform={this.flip ? 'translate(90), scale(-1, 1)' : ''}
            d="M 45.673,0 C 67.781,0 85.703,12.475 85.703,27.862 C 85.703,43.249 67.781,55.724 45.673,55.724 C 38.742,55.724 32.224,54.497 26.539,52.34 C 15.319,56.564 0,64.542 0,64.542 C 0,64.542 9.989,58.887 14.107,52.021 C 15.159,50.266 15.775,48.426 16.128,46.659 C 9.618,41.704 5.643,35.106 5.643,27.862 C 5.643,12.475 23.565,0 45.673,0 M 45.673,2.22 C 24.824,2.22 7.862,13.723 7.862,27.863 C 7.862,34.129 11.275,40.177 17.472,44.893 L 18.576,45.734 L 18.305,47.094 C 17.86,49.324 17.088,51.366 16.011,53.163 C 15.67,53.73 15.294,54.29 14.891,54.837 C 18.516,53.191 22.312,51.561 25.757,50.264 L 26.542,49.968 L 27.327,50.266 C 32.911,52.385 39.255,53.505 45.673,53.505 C 66.522,53.505 83.484,42.002 83.484,27.862 C 83.484,13.722 66.522,2.22 45.673,2.22 L 45.673,2.22 z "
            id="path5"
          />
          <text x="50%" y="50%" textAnchor="middle">
            {text}
          </text>
        </g>
      </svg>
    );
  }
}

export class BetButton extends BaseButton {
  text = 'Bet!';
  activeText = 'Cancel';
  flip = true;
}

export class SkipButton extends BaseButton {
  text = 'Skip';
}
