import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { imgs } from '../../images';
import { ImgPiece } from '../ImgPiece/ImgPiece';

export const VerticalParallax = ({ children, withPieces }) => {
  const offsetCheck = ((pagesLength, imagesLength) => {
    const step = pagesLength / imagesLength;
    const offset = step;
    return () => {
      offset += step;
      return offset;
    };
  })(children.length, imgs.length);

  return (
    <Parallax pages={children.length}>
      {children.map((childComponent, index) => (
        <ParallaxLayer key={index} offset={index} speed={1}>
          {childComponent}
        </ParallaxLayer>
      ))}

      {withPieces &&
        imgs.map((imgUrl, index) => (
          <ParallaxLayer key={index} offset={offsetCheck()}>
            <ImgPiece src={imgUrl} isRandomRotated />
          </ParallaxLayer>
        ))}
    </Parallax>
  );
};
