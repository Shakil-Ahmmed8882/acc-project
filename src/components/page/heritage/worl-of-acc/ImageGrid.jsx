
// This file defines the ImageGrid component that arranges a set of
// images into a responsive grid layout using the reusable ImageCard component.


import img1 from '@/assets/img/heritage/world-of-acc/img1.png';
import img2 from '@/assets/img/heritage/world-of-acc/img2.png';
import img3 from '@/assets/img/heritage/world-of-acc/img3.png';
import img4 from '@/assets/img/heritage/world-of-acc/img4.png';
import img5 from '@/assets/img/heritage/world-of-acc/img5.png';

// single reusable image comp
import ImageCard from './ImageCard';



const ImageGrid = () => (

    // gird container 
  <section className="text-white grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
    <div className="flex flex-col md:flex-row gap-8">

        {/* Each image with different row sizes */}
      <ImageCard src={img1} alt="Image 1" />
      <ImageCard src={img2} alt="Image 2" additionalClasses="md:mt-24 overflow-hidden" />
    </div>
    <ImageCard src={img3} alt="Image 3" additionalClasses="bg-[black]  md:h-full md:row-span-2" />
    <ImageCard src={img4} alt="Image 4" additionalClasses="bg-[black] md:row-span-2" />
    <ImageCard src={img5} alt="Image 5" additionalClasses="bg-[black]" />
  </section>
);

export default ImageGrid;
