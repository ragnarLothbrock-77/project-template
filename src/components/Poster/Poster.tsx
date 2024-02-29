import cn from 'classnames';
import classes from './Poster.module.scss';
import CatFoot from '../../assets/icons/cat-foot.svg';
import CatFootMirror from '../../assets/icons/cat-foot-mirror.svg';

import { type PropsWithChildren } from 'react';
import { useAppDispatch } from '@/store/hooks/redux.hooks';
import { modalActions } from '@/store/slices/modalSlice/modal.slice';
import { galleryActions } from '@/store/slices/gallerySlice/gallery.slice';

interface PosterProps {
  className?: string;
  imageSrc: string
}

export const Poster = (props: PropsWithChildren<PosterProps>) => {
  const { className, imageSrc } = props;
  const dispatch = useAppDispatch();


  return (
    <div className={cn(classes.poster, className)}>
      <div className={classes.posterSwitchZone}>
        <div onClick={() => dispatch(galleryActions.showPreviousImage())} className={classes.posterSwitchZoneContent}>
          <span>Previos</span>
          <CatFoot />
        </div>
      </div>
      <div className={classes.posterImageWrapper} onClick={() => dispatch(modalActions.toggleModalState())}>
        <img className={classes.posterImage} src={imageSrc} alt="Gallery Image" />
      </div>
      <div onClick={() => dispatch(galleryActions.showNextImage())} className={classes.posterSwitchZone}>
        <div className={classes.posterSwitchZoneContent}>
          <span>Next</span>
          <CatFootMirror />
        </div>
      </div>
    </div>
  );
}