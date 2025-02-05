import React,{ useEffect, useState, useCallback } from "react";
import Masonry from "react-responsive-masonry";
import { ip } from "../utils/baseurl";
import { Images } from "../types/images";
import PhotoCard from "./PhotoCard";
import PopupModal from "./PopupModal";

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Images[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<Images | null>(null);

  const apiUrl: string = `${ip}/photos?page=${page}&per_page=25&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`

  const fetchImages = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data: Images[] = await response.json();
    //   console.log('result', data)
      setImages((prevImg) => [...prevImg, ...data]);
    } catch (error) {
      console.error("Error from api>>>", error);
    } finally{
        setIsLoading(true)
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);


  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div>
      <Masonry columnsCount={5} gutter="10px">
        {images?.map((image) => (
          <PhotoCard key={image?.id} image={image} onClick={setSelectedImage}/>
        ))}
      </Masonry>

      {selectedImage && (
        <PopupModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Gallery;
