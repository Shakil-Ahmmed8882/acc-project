// pages/index.js
import img1 from '@/assets/img/home/hero/parallax1.jpg'
import img2 from '@/assets/img/home/hero/parallax2.jpg'



import ProductCard from './Card';

const cardsData = [


    {
      imageSrc: img1, // Ensure you have this image in the public/images directory
      title: 'CRYSTAL DECANTER (41-60)',
      buttonText: 'LEARN MORE',
      path:'/'
    },
  {
    imageSrc: img1, // Ensure you have this image in the public/images directory
    title: 'CRYSTAL DECANTER (41-60)',
    buttonText: 'LEARN MORE',
    path:'/'
  },
  {
    imageSrc: img2,
    title: 'CRYSTAL DECANTER (41-60)',
    buttonText: 'LEARN MORE',
    path:'/'
  },
  {
    imageSrc: img1, // Ensure you have this image in the public/images directory
    title: 'CRYSTAL DECANTER (41-60)',
    buttonText: 'LEARN MORE',
    path:'/'
  },
  {
    imageSrc: img2,
    title: 'CRYSTAL DECANTER (41-60)',
    buttonText: 'LEARN MORE',
    path:'/'
  },

  // Add more card data objects here if needed
];

const ProductCard = () => {
  return (
    <div className="
    grid grid-cols-1 md:grid-cols-2 justify-center 
    lg:grid-cols-3 gap-6 p-6
    
    ">
      {cardsData.map((card, index) => (
        <ProductCard key={index} {...{card}} />
      ))}
    </div>
  );
};

export default ProductCard;

