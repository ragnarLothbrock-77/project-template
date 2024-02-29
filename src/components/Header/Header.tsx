import cn from 'classnames';
import classes from './Header.module.scss';
import Logo from '../../assets/icons/cat-logo.svg';


import type { PropsWithChildren } from 'react';

interface HeaderProps {
  className?: string;
}

export const Header = (props: PropsWithChildren<HeaderProps>) => {
  const { className } = props;

  return (
    <div className={cn(classes.header, className)}>
      <Logo />
      <h1>Cats Journal</h1>
    </div>
  );
}