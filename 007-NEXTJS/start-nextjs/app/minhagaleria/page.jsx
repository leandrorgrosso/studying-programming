import {listaFoto} from "@/data/listaFoto"

function MinhaGaleriaImagens() {
  return (
    <>
      <h1>Minha Galeria Imagens</h1>
      <section>
        {
            listaFoto.map(item => (
                <div>...</div>
            ))
        }
      </section>
    </>
  );
}

export default MinhaGaleriaImagens;
