import classes from './App.module.scss';
import image from '@/assets/photo-cv.jpg';
import image2 from '@/assets/SpotifyLogoPNGImage.png';
import Icon from '@/assets/git.svg';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className={classes.wrapper}>
      <div data-testid={'App.DataIdMain'}>
        <div className="">
          <img src={image} alt="" />
          <img src={image2} alt="" />
        </div>
        <div className="">
          <Icon width={'500px'} height={'500px'} color='green' />
        </div>
        <Link to={'/about'}>About</Link>
        <Link to={'/shop'}>Shop</Link>
        <Outlet />
      </div>
    </div>
  )
}

export default App;