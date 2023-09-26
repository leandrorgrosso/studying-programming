import SaudacaoProps from "@/components/SaudacaoProps"

// Componente pai que renderiza o componente Saudacao com props
function SaudacaoPropsPage() {
  return (
    <div>
      <SaudacaoProps nome="Fulano" />
      <SaudacaoProps nome="Ciclano" />
    </div>
  );
}

export default SaudacaoPropsPage;