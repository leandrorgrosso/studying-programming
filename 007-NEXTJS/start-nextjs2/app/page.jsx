'use client';

import ImageGallery from '../components/ImageGallery';

const imageUrls = [
  'https://png.pngtree.com/background/20230614/original/pngtree-landscape-hd-wallpaper-backgrounds-best-wallpaper-picture-image_3537443.jpg',
  'https://img.freepik.com/fotos-gratis/abstrato-de-lampada-criativa-em-ia-generativa-de-fundo-azul-brilhante_188544-8090.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697414400&semt=ais',
  '/1.jpg',
  // Adicione mais URLs de imagens conforme necessário
];

export default function Home() {
  return (
    <div>
      <h1>Minha Galeria de Imagens</h1>
      <ImageGallery imageUrls={imageUrls} />
    </div>
  );
}
