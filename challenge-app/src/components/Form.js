const Form = ({ handleChange, formData, handleSubmit, btnText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email{" "}
        <input
          name="email"
          type="email"
          required
          onChange={handleChange}
          value={formData.email}
        />{" "}
      </label>
      <label className="password">
        Lösenord
        <input
          name="password"
          type="password"
          required
          onChange={handleChange}
          value={formData.password}
        />
      </label>

      <button className="signup-btn">{btnText}</button>
    </form>
  );
};

export default Form;
