import * as S from '@/components/Atoms/UserImage/index.styles';
import { UserTypes } from '@/types/issue';

type AtomUserImage = { imgSize?: 'MEDIUM' | 'SMALL' };

export type UserImageTypes = UserTypes & AtomUserImage;

const UserImage = ({ imgSize = 'SMALL', nickname, profileImage }: UserImageTypes) => {
  const imgAlt = `${nickname}의 프로필 사진`;

  return <S.Img src={profileImage} alt={imgAlt} imgSize={imgSize} />;
};

export default UserImage;
