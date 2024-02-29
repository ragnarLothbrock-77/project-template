import cn from 'classnames';
import classes from './Modal.module.scss';

import type { PropsWithChildren } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks/redux.hooks';
import { modalActions } from '@/store/slices/modalSlice/modal.slice';

interface ModalProps {
  className?: string,
  imageSrc: string,
  imageAlt?: string
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { className, imageSrc, imageAlt } = props;
  const modal = useAppSelector(state => state.modal.opened);
  const dispatch = useAppDispatch();

  return (
    <div className={cn(classes.modal, className, { [classes.opened]: modal })} onClick={() => dispatch(modalActions.toggleModalState())}>
      <div className={cn(classes.modalBody)} style={{ backgroundImage: `url(${imageSrc})` }}>
        <img className={classes.modalImage} src={imageSrc} alt={imageAlt ? imageAlt : 'preview galley image'} />
      </div>
    </div>
  );
}