import React,{ useEffect, useState, useCallback } from "react";
import Masonry from "react-responsive-masonry";
import { ip } from "../utils/baseurl";
import { Images } from "../types/images";
import PhotoCard from "./PhotoCard";

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Images[]>([]);
  const apiUrl: string = `${ip}/photos?page=25&per_page=25&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
  const fetchImages = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);
      const data: Images[] = await response.json();
      console.log('result', data)
      setImages((prevImg) => [...prevImg, ...data]);
    } catch (error) {
      console.error("Error from api>>>", error);
    } 
  }, [apiUrl]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div>
      <Masonry columnsCount={5} gutter="10px">
        {images?.map((image) => (
          <PhotoCard key={image?.id} image={image} />
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
