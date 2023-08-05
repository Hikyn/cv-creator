function Practical({ setPractical }) {
  const setCompanyName = (companyName) => {
    setPractical((oldPractical) => ({
      ...oldPractical,
      companyName: companyName,
    }));
  };

  const setPositionTitle = (positionTitle) => {
    setPractical((oldPractical) => ({
      ...oldPractical,
      positionTitle: positionTitle,
    }));
  };

  const setMainTasks = (mainTasks) => {
    setPractical((oldPractical) => ({ ...oldPractical, mainTasks: mainTasks }));
  };

  const setDateFrom = (dateFrom) => {
    setPractical((oldPractical) => ({ ...oldPractical, dateFrom: dateFrom }));
  };

  const setDateUntil = (dateUntil) => {
    setPractical((oldPractical) => ({ ...oldPractical, dateUntil: dateUntil }));
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handlePositionTitleChange = (e) => {
    setPositionTitle(e.target.value);
  };

  const handleMainTasksChange = (e) => {
    setMainTasks(e.target.value);
  };

  const handleDateFromChange = (e) => {
    setDateFrom(e.target.value);
  };

  const handleDateUntilChange = (e) => {
    setDateUntil(e.target.value);
  };

  return (
    <form method="post">
      <fieldset>
        <legend>Practical experience: </legend>
        <div className="gridRows">
          <label htmlFor="companyName">Company name:</label>
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            onChange={handleCompanyNameChange}
          ></input>
          <label htmlFor="positionTitle">Position title:</label>
          <input
            type="text"
            name="positionTitle"
            placeholder="Junior Backend Engineer"
            onChange={handlePositionTitleChange}
          ></input>
          <label htmlFor="mainTasks">Main tasks:</label>
          <textarea
            type="text"
            name="mainTasks"
            placeholder="Mainteined client database"
            onChange={handleMainTasksChange}
          ></textarea>
          <label htmlFor="dateFrom">Start date: </label>
          <input
            type="date"
            name="dateFrom"
            onChange={handleDateFromChange}
          ></input>
          <label htmlFor="phone">End date: </label>
          <input
            type="date"
            name="dateUntil"
            onChange={handleDateUntilChange}
          ></input>
        </div>
      </fieldset>
    </form>
  );
}

export default Practical;
