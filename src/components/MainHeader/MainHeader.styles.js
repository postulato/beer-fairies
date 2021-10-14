import styled from 'styled-components';
import { color } from '../../style_constants';

export default {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    background: ${color.yellow.bg};
    position: relative;
  `,
  Heading: styled.h1`
    text-align: center;
    color: ${color.yellow.text};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
};
