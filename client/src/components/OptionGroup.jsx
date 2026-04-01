function OptionGroup({ label, name, options, value, onChange }) {
  return (
    <section className="option-group">
      <div className="option-header">
        <h3>{label}</h3>
      </div>

      <div className="option-grid">
        {options.map((option) => (
          <label
            key={option.value}
            className={`option-card ${
              value === option.value ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(event) => onChange(name, event.target.value)}
            />
            <span>{option.label}</span>
            <small>
              {option.price === 0 ? "Included" : `+$${option.price}`}
            </small>
          </label>
        ))}
      </div>
    </section>
  );
}

export default OptionGroup;
