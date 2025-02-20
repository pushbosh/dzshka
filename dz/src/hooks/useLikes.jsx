import { useContext } from 'react';
import { LikesContext } from '../context/LikesContext';

export const useLikes = () => {
  const { likes, addLike } = useContext(LikesContext);
  return { likes, addLike };
};
