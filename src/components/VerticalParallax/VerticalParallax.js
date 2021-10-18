import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { imgs } from '../../images';
import { ImgPiece } from '../ImgPiece/ImgPiece';
import { getRandom } from '../../utils';
import _ from 'lodash';

export const VerticalParallax = ({ children, withPieces }) => {
  const offsetCheck = ((pagesLength, imagesLength) => {
    const step = pagesLength / imagesLength;
    let offset = step;
    return () => {
      offset += step;
      return offset - 0.5;
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
        _.shuffle(imgs).map((imgUrl, index) => (
          <ParallaxLayer
            key={index}
            offset={offsetCheck()}
            speed={getRandom(4)}
          >
            <ImgPiece src={imgUrl} isRandomRotated />
          </ParallaxLayer>
        ))}
    </Parallax>
  );
};
