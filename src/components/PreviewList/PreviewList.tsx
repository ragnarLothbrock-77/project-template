import cn from 'classnames';
import classes from './PreviewList.module.scss';

import { useEffect, type PropsWithChildren, SyntheticEvent } from 'react';
import { PreviewListItem } from './PreviewListItem/PreviewListItem';
import { useAppSelector } from '@/store/hooks/redux.hooks';
import { ICatAPIItem } from '@/store/models/models';

interface PreviewListProps {
  className?: string;
  items: ICatAPIItem[],
  galleryLength: number
}

export const PreviewList = (props: PropsWithChildren<PreviewListProps>) => {
  const { className, items, galleryLength } = props;
  const { status, posterImage } = useAppSelector(state => state.gallery);
  const activeItem: string = posterImage.id;


  return (
    <div className={cn(classes.previewList, className)}>
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'success' &&
        items
          // .filter((i, id) => {
          //   if (id <= galleryLength) {
          //     return i;
          //   }
          // })
          .map(item => (
            <PreviewListItem className={item.id === activeItem && classes.activeItem} key={item.id} imageSrc={item.url} imageAlt={String(item.id)} />
          ))
      }
    </div>
  );
}