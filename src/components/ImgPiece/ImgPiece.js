import Components from './ImgPiece.styles';

export const ImgPiece = ({ src, isRandomRotated }) => {
  const { Img, ImgWrapper } = Components;

  return (
    <ImgWrapper isRandomRotated={isRandomRotated}>
      <Img src={src} />
    </ImgWrapper>
  );
};
