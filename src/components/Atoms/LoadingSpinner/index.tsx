import * as S from '@/components/Atoms/LoadingSpinner/index.styles';

type Size = {
  size: number;
};

const LoadingSpinner = ({ size }: Size) => {
  return <S.LoadingSpinner size={size} />;
};

export default LoadingSpinner;
