/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SmallStyles = css`
    height: 8px;
`;

const MediumStyles = css`
    height: 12px;
`;

const LargeStyles = css`
    height: 24px;
    padding: 4px;
`;

const SizeMap = {
  small: SmallStyles,
  medium: MediumStyles,
  large: LargeStyles,
}

const Bar = styled.div`
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: 4px;
    ${p => SizeMap[p.size]}
`

const Progress = styled.div`
    background-color: ${COLORS.primary};
    border-radius: ${p => {
      if (p.value >= 99.5) return '4px';
      if (p.value >= 99) return '4px 3px 3px 4px';
      if (p.value >= 98.5) return '4px 2px 2px 4px';
      if (p.value >= 98) return '4px 1px 1px 4px';
      else return '4px 0 0 4px';
    }};
    width: ${p => p.value}%;
    height: 100%;
`

const ProgressBar = ({value, size}) => {
  const clampedValue = Math.max(Math.min(value, 100), 0);
  return (
    <Bar size={size} aria-valuenow={clampedValue} aria-valuemin={0} aria-valuemax={100}>
      <Progress size={size} value={clampedValue}/>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Bar>
  );
};

export default ProgressBar;
