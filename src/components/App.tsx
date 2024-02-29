import classes from './App.module.scss';
import { Gallery } from './Gallery/Gallery';
import { Modal } from './Modal/Modal';
import { Header } from './Header/Header';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks/redux.hooks';
import { fetchGalleryData } from '@/store/slices/gallerySlice/galleryDataFetch.async';
import { galleryActions } from '@/store/slices/gallerySlice/gallery.slice';
import { fetchOneItem } from '@/store/slices/gallerySlice/galleryOneItemFetch.async';



const App = () => {
  const dispatch = useAppDispatch();
  const { posterImage, status, items, posterId, isRepeated } = useAppSelector(state => state.gallery);
  const galleryLength = 5; // Передаётся в запрос в параметр limit


  useEffect(() => {
    dispatch(fetchGalleryData(galleryLength));
    dispatch(galleryActions.setGalleryLength(galleryLength))
  }, []);

  useEffect(() => {
    if (posterId === items.length - 1) {
      dispatch(fetchOneItem());
    }

    isRepeated && dispatch(fetchOneItem()); // Повторный запрос если изображение повторное

  }, [posterId])


  return (
    <div className={classes.wrapper}>
      {status === 'loading' && <span className={classes.loading}>Loading...</span>}
      {
        status === 'success' &&
        <>
          <Header />
          <Modal imageSrc={posterImage?.url} imageAlt='Cat' />
          <Gallery galleryLength={galleryLength} items={items} imgSrc={posterImage?.url} />
        </>
      }
      {
        status === 'error' && <span className={classes.error}>Error! Try reload page</span>
      }
    </div >
  )
}

export default App;