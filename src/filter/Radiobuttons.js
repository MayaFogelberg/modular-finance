//Radio buttons that switches between IR, PR and Both modes
const RadioButtons = ( {category, setCategory} ) => {
    const handleIR = () => {
      setCategory('ir');
    };

    const handlePR = () => {
        setCategory('pr');
      };

    const handleBoth = () => {
        setCategory('Both');
    };

    return(
        <div>
            <RadioButton
                label="IR"
                value={category=== 'ir'}
                onChange={handleIR}
            />
            <RadioButton
                label="PR"
                value={category=== 'pr'}
                onChange={handlePR}
                />
            <RadioButton
                label="Both"
                value={category=== 'Both'}
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



