import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery = props => {
  const { hits, onClick } = props;

  return (
    <ul className={s.gallery}>
      {hits.map(hit => {
        return <ImageGalleryItem key={hit.id} hit={hit} onClick={onClick} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
