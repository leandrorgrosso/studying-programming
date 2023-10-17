import styles from "@/app/page.module.css"

import { useState } from 'react';

const ImageGallery = ({ imageUrls }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (

    <>
      <div className={styles.imageGallery}>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={styles.imageThumbnail}
            onClick={() => openImage(imageUrl)}
          >
            <img src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.imageModal}>
          <span className={styles.closeButton} onClick={closeImage}>
            &times;
          </span>
          <img src={selectedImage} alt="Selected Image" />
        </div>
      )}

    </>
  );
};

export default ImageGallery;
