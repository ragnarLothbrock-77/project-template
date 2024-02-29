import cn from 'classnames';
import classes from './PreviewListItem.module.scss';

import type { PropsWithChildren } from 'react';
import { useAppDispatch } from '@/store/hooks/redux.hooks';
import { galleryActions } from '@/store/slices/gallerySlice/gallery.slice';

interface PreviewListItemProps {
  className?: string;
  imageSrc: string;
  imageAlt?: string;
}

export const PreviewListItem = (props: PropsWithChildren<PreviewListItemProps>) => {
  const { className, imageSrc, imageAlt } = props;
  const dispatch = useAppDispatch();

  return (
    <div className={cn(classes.previewListItem, className)}>
      <img onClick={() => dispatch(galleryActions.choseImageFromArray(imageSrc))} className={cn(classes.previewListItemImage)} src={imageSrc} alt={imageAlt ? imageAlt : 'Gallery Image'} />
    </div>
  );
}