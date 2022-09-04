import s from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImgURL, id }) => {
  return (
    <div className={s.listItem}>
      <img className={s.listItemImg} src={smallImgURL} alt={id} loading="lazy" />
    </div>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
