import { FC } from 'react';
import s from './BackNav.module.scss';
import { useNavigate } from 'react-router-dom';

interface IProps {
  title?: string;
}

export const BackNav: FC<IProps> = ({ title }) => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <button className={s.root} onClick={navigateBack}>
      {title || 'Back'}
    </button>
  );
};
