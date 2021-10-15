import { MainHeader, ItemChecker, VerticalParallax } from '../components';

export const MainPage = () => {
  return (
    <VerticalParallax withPieces>
      <MainHeader />
      <ItemChecker />
    </VerticalParallax>
  );
};
