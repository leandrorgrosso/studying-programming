import Panel from "@/components/Panel";
import Button from "@/components/Button";

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

export default Form;
