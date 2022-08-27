import { Component } from 'react';
import s from './App.module.css';
import Button from './Button';
import ImageInfo from './ImageInfo';
import Modal from './Modal';
import Searchbar from './Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    showModal: false,
    searchQuery: '',
    page: 1,
    src: '',
    alt: '',
    moreVisible: false,
  };

  toggleModal = e => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      src: !showModal? e.target.dataset.src : null,
      alt: !showModal? e.target.alt : null
    }));
  };

  submitForm = e => {
    this.setState({ page: 1 });
    this.setState({ searchQuery: e.value });
  };

  showMoreButton = () => {
    this.setState({ moreVisible: true });
  };
  hideMoreButton = () => {
    this.setState({ moreVisible: false });
  };

  clickMoreButton = e => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { showModal, moreVisible, searchQuery, page, src, alt } = this.state;
    console.log(src)
    return (
      <div className={s.container}>
        <Searchbar onSubmit={this.submitForm} />
        <ImageInfo
          searchQuery={searchQuery}
          page={page}
          onClick={this.toggleModal}
          showMoreButton={this.showMoreButton}
          hideMoreButton={this.hideMoreButton}
        />
        {moreVisible && <Button onClick={this.clickMoreButton} />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={src} alt={alt} />
          </Modal>
        )}
        <ToastContainer />
        <div id="modalRoot"></div>
      </div>
    );
  }
}
