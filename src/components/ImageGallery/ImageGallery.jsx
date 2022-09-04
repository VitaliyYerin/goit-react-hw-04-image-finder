import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <>
      <ul className={s.gallery} onClick={toggleModal}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              id={image.id}
              smallImgURL={image.webformatURL}
            />
          );
        })}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
