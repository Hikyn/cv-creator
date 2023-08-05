function General({ setGeneral }) {
  const setName = (name) => {
    setGeneral((oldGeneral) => ({ ...oldGeneral, name: name }));
  };

  const setEmail = (email) => {
    setGeneral((oldGeneral) => ({ ...oldGeneral, email: email }));
  };

  const setPhoneNumber = (phoneNumber) => {
    setGeneral((oldGeneral) => ({ ...oldGeneral, phoneNumber: phoneNumber }));
  };

  const setDescription = (description) => {
    setGeneral((oldGeneral) => ({ ...oldGeneral, description: description }));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <form method="post">
      <fieldset>
        <legend>General information: </legend>
        <div className="gridRows">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name Surname"
            onChange={handleNameChange}
          ></input>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            onChange={handleEmailChange}
          ></input>
          <label htmlFor="phone">Phone number:</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="79264058617"
            onChange={handlePhoneNumberChange}
          ></input>
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            name="description"
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
      </fieldset>
    </form>
  );
}

export default General;
