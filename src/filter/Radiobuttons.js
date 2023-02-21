
const RadioButtons = ( {categorie, setCategorie} ) => {
    const handleIR = () => {
      setCategorie('IR');
    };

    const handlePR = () => {
        setCategorie('PR');
      };

    const handleBoth = () => {
        setCategorie('Both');
    };

    return(
        <div>
            <RadioButton
                label="IR"
                value={categorie=== 'IR'}
                onChange={handleIR}
            />
            <RadioButton
                label="PR"
                value={categorie=== 'PR'}
                onChange={handlePR}
                />
            <RadioButton
                label="Both"
                value={categorie=== 'Both'}
                onChange={handleBoth}
            />
        </div>

    );
};

const RadioButton = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="radio" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };


export default RadioButtons;



