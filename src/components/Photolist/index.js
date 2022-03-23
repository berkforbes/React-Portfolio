import React, { useState } from "react";
import Modal from "../Modal";


const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      name: "Wasatch",
      category: "Do I need thi?",
      description:
        "Lorem ipsum",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);
  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
    </div>
  );
};

export default PhotoList;
