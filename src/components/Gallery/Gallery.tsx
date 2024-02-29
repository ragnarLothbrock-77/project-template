import classes from './Gallery.module.scss';
import cn from 'classnames';
import { SyntheticEvent, type PropsWithChildren } from 'react';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import { Poster } from '../Poster/Poster';
import { PreviewList } from '../PreviewList/PreviewList';
import { useAppDispatch } from '@/store/hooks/redux.hooks';
import { galleryActions } from '@/store/slices/gallerySlice/gallery.slice';
import { ICatAPIItem } from '@/store/models/models';


interface GalleryProps {
  className?: string;
  imgSrc: string,
  items: ICatAPIItem[],
  galleryLength: number
}

export const Gallery = (props: PropsWithChildren<GalleryProps>) => {
  const { className, imgSrc, items, galleryLength } = props;
  const dispatch = useAppDispatch();


  return (
    <div className={cn(classes.gallery, className)}>
      <div className={cn(classes.galleryPosters)}>
        <Poster imageSrc={imgSrc} />
      </div>
      <div className={classes.galleryControls}>
        <button onClick={() => dispatch(galleryActions.showPreviousImage())} className={classes.galleryControlsButton}>
          <ArrowLeft />
        </button>
        <PreviewList galleryLength={galleryLength} items={items} />
        <button onClick={() => dispatch(galleryActions.showNextImage())} className={classes.galleryControlsButton}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}