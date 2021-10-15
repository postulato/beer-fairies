import styled from 'styled-components';

const getRandom = (max) => Math.round(Math.random() * max);

export default {
  Img: styled.img`
    width: 100%;
    filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.3));
  `,
  ImgWrapper: styled.div`
    width: 10vw;
    ${({ isRandomRotated }) =>
      isRandomRotated ? `transform: rotate(${getRandom(360)}deg)` : ''};
    margin-left: ${getRandom(90)}%;
  `,
};
