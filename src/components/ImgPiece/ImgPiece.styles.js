import styled from 'styled-components';
import { getRandom } from '../../utils/random';

export default {
  Img: styled.img`
    width: 100%;
    filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.3));
  `,
  ImgWrapper: styled.div`
    width: 5vmax;
    ${({ isRandomRotated }) =>
      isRandomRotated ? `transform: rotate(${getRandom(360)}deg)` : ''};
    margin-left: ${() => getRandom(90)}%;
    @media screen and (max-width: 700px) {
      width: 10vw;
    }
  `,
};
