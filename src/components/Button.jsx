const Button = ({ label, type, onClick }) => {
  return (
    <div className="button">
      <button type={type} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};
export default Button;
