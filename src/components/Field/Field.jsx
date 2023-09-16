const Field = ({ label, name, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input className="form-control" type="text" name={name} onChange={onChange} />
    </div>
  );
};

export default Field;
