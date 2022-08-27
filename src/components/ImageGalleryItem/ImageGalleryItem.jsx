import s from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

const ImageGalleryItem = props => {
  const { hit, onClick } = props;

  return (
    <div className={s.listItem} id={hit.id} onClick={onClick}>
      <img
        className={s.listItemImg}
        src={hit.webformatURL}
        alt={hit.tags}
        data-src={hit.largeImageURL}
        loading="lazy"
      />
    </div>
  );
};

ImageGalleryItem.propTypes = {
  hit: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
