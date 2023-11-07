"use client";
import { useContext } from "react";
import { LoggedUserContext } from "@/contexts/LoggedUserContext";
import { LoggedUserProvider } from "@/contexts/LoggedUserContext"
import ImageGallery from "../components/ImageGallery";
import Header from "@/components/Header";

const imageUrls = [
  "https://png.pngtree.com/background/20230614/original/pngtree-landscape-hd-wallpaper-backgrounds-best-wallpaper-picture-image_3537443.jpg",
  "https://img.freepik.com/fotos-gratis/abstrato-de-lampada-criativa-em-ia-generativa-de-fundo-azul-brilhante_188544-8090.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697414400&semt=ais",
  "/1.jpg",
  // Adicione mais URLs de imagens conforme necessário
];

// function UserProfile() {
//   const { name } = useContext(LoggedUserContext);

//   return (
//     <div>
//       <h2>Seu nome é: {name}</h2>
//     </div>
//   );
// }

export default function Home() {
  return (
    <>

      <LoggedUserProvider>
        {/* <UserProfile/> */}
        <Header />
        <h1>Minha Galeria de Imagens</h1>
        <ImageGallery imageUrls={imageUrls} />
      </LoggedUserProvider>

      <iframe
        width="420"
        height="345"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>

<video width="320" height="240" controls>
  <source src="/WIN_20230914_14_04_47_Pro.mp4" type="video/mp4"/>
 
  Your browser does not support the video tag.
</video>
    </>
  );
}
