import Radio from "./Radio";

const GrupoRadio = ({ opcoes }) => {
  return (
    <div>
      {opcoes.map((option) => (
        <Radio
          key={option.valor}
          value={option.label}
          label={option.label}
          checked={option.label === values.interesse}
          name="interesse"
        />
      ))}
    </div>
  );
};

export default GrupoRadio;
