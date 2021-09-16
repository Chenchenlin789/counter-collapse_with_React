import Collapsible from "react-collapsible";

const collaps = (props) => {
  return (
    <Collapsible trigger={props.question}>
      <p> {props.answer}</p>
    </Collapsible>
  );
};

export default collaps;
