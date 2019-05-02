import React from 'react';
import { Bar } from '@vx/shape';

export default class SlideBackground extends React.Component {
  render() {
    const width = innerWidth + 4;
    const height = innerHeight + 4;
    const style = { position : 'fixed', width : `${width}px`, height : `${height}px`, top : 0, left : 0, zIndex : -1 };

    return (
      <svg style={style} width={width} height={height}>
        {this.props.gradient}
        <Bar
          x={0}
          y={0}
          width={width}
          height={height}
          fill={`url(#${this.props.gradientId})`}
          strokeWidth={0}
          rx={0}
        />
      </svg>
    );
  }
}
