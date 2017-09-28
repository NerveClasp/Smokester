import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const PI = 3.1416;

export default class CircleTimer extends Component {
  static propTypes = {
    blockName: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.number,
    thickness: PropTypes.number,
    style: PropTypes.object,
    color: PropTypes.string,
  };

  static defaultProps = {
    blockName: 'nc-circle-timer',
    style: {},
    thickness: 3.5,
    size: 40,
    color: '#3d84d1',
  };

  renderCircle() {
    const { color, thickness, size } = this.props;
    const styleSheet = document.styleSheets[0];

    const keyframes =
      `@keyframes nc-circle-timer-${size} {
      0% {
        transform: rotate(0deg);
        stroke-dashoffset: ${0.66 * size}px;
      }
      50% {
        transform: rotate(720deg);
        stroke-dashoffset: ${3.14 * size}px;
      }
      100% {
        transform: rotate(1080deg);
        stroke-dashoffset: ${0.66 * size}px;
      }
    }`;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    return (
      <circle
        style={{
          fill: 'transparent',
          strokeLinecap: 'round',
          stroke: color,
          strokeWidth: thickness,
          strokeDasharray: (PI * size),
          transformOrigin: `${0.5 * size}px ${0.5 * size}px 0`,
          animationName: `nc-circle-timer-${size}`,
          animationTimingFunction: 'linear',
          animationDuration: '2s',
          animationDelay: '0.0s',
          animationIterationCount: 'infinite'
        }}
        cx={`${size / 2}`}
        cy={`${size / 2}`}
        r={`${(size / 2) - (thickness / 2)}`}
      />
    );
  }

  render() {
    const {
      blockName,
      className,
      size,
      style,
      thickness, // eslint-disable-line no-unused-vars
      ...other,
    } = this.props;

    const finalClassName = cx(
      blockName,
      className,
    );
    return (
      <div
        className={finalClassName}
        style={{
          width: size + 'px',
          height: size + 'px',
          ...style,
        }}
        {...other}
      >
        <svg className={`${finalClassName}__spinner`} style={{ width: size + 'px', height: size + 'px' }}>
          {this.renderCircle()}
        </svg>
      </div>
    );
  }
}
