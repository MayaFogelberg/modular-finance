const Checkboxs = ( {reportStates, setReportStates} ) => {      

    const handleSetReport = (report) => {
        if(reportStates.includes(report)){
            removeItem(report)
        } else {
            const reportStatesCopy = reportStates.slice()
            reportStatesCopy.push(report)
            setReportStates(reportStatesCopy) 
        }
            
    };

    const removeItem = (report) => {
        setReportStates(reportStates.filter(item => item !== report))
    };
        


    return(
        <div>
            <Checkbox
                label="Regulatory"
                value={reportStates.includes('Regulatory')}
                onChange={()=> handleSetReport('Regulatory')}
            />
            <Checkbox
                label="Annual Report"
                value={reportStates.includes('annualReport')}
                onChange={()=> handleSetReport('annualReport')}
                />
            <Checkbox
                label="Interrim report"
                value={reportStates.includes('interrimReport')}
                onChange={()=> handleSetReport('interrimReport')}
            />

            <Checkbox
                label="Corporate Information"
                value={reportStates.includes('corporateInformation')}
                onChange={()=> handleSetReport('corporateInformation')}
            />
        </div>

    );


};
  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

  



export default Checkboxs;


