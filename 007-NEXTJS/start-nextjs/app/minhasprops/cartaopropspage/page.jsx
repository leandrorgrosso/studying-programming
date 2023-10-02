import { Cartao } from "@/components/Cartao"

let mensagem = ""
let numero1 = 0
let numero2 = 0
let resposta = numero1 + numero2

  if(resposta === 0){
    mensagem = "Zerou"
  }

function QualquerCoisa() {
  return (
    <>
      <div>CartaoPropsPage</div>
      <Cartao textoDaFrase="Fazendo meu filme" autorDaFrase="Paula Pimenta" />

    <h3>{mensagem}</h3>   

    
    </>

  )
}

export default QualquerCoisa