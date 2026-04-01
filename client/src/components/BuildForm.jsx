import OptionGroup from "./OptionGroup";
import BuildPreview from "./BuildPreview";
import {
  coreOptions,
  defaultConfiguration,
  finishOptions,
  powerOptions,
  shellOptions,
  storageOptions,
} from "../utilities/catalog";
import { calculatePrice, validateConfiguration } from "../utilities/builder";

function BuildForm({
  formData,
  setFormData,
  onSubmit,
  submitLabel,
  isSaving,
  serverError,
}) {
  const mergedData = { ...defaultConfiguration, ...formData };
  const price = calculatePrice(mergedData);
  const validationError = validateConfiguration(mergedData);

  function handleOptionChange(field, value) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function handleNameChange(event) {
    setFormData((current) => ({ ...current, name: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      ...mergedData,
      price,
      validationError,
    });
  }

  return (
    <div className="builder-layout">
      <BuildPreview config={mergedData} price={price} />

      <form className="builder-form" onSubmit={handleSubmit}>
        <div className="form-intro">
          <p className="eyebrow">Customize Your Device</p>
          <h2>Build a polished BoltBucket configuration</h2>
          <p>
            Choose a shell, core, power profile, storage, and finish. Your total
            price updates instantly as you build.
          </p>
        </div>

        <label className="name-field">
          <span>Build name</span>
          <input
            type="text"
            value={mergedData.name}
            onChange={handleNameChange}
            placeholder="My favorite BoltBucket"
            required
          />
        </label>

        <OptionGroup
          label="Shell Color"
          name="shell"
          options={shellOptions}
          value={mergedData.shell}
          onChange={handleOptionChange}
        />

        <OptionGroup
          label="Core Module"
          name="core"
          options={coreOptions}
          value={mergedData.core}
          onChange={handleOptionChange}
        />

        <OptionGroup
          label="Power Mode"
          name="power"
          options={powerOptions}
          value={mergedData.power}
          onChange={handleOptionChange}
        />

        <OptionGroup
          label="Storage"
          name="storage"
          options={storageOptions}
          value={mergedData.storage}
          onChange={handleOptionChange}
        />

        <OptionGroup
          label="Finish"
          name="finish"
          options={finishOptions}
          value={mergedData.finish}
          onChange={handleOptionChange}
        />

        {validationError ? (
          <div className="message error">{validationError}</div>
        ) : null}
        {serverError ? (
          <div className="message error">{serverError}</div>
        ) : null}

        <div className="form-footer">
          <div>
            <span className="total-label">Current total</span>
            <strong className="total-price">${price}</strong>
          </div>

          <button
            type="submit"
            className="primary-button"
            disabled={isSaving || Boolean(validationError)}
          >
            {isSaving ? "Saving..." : submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}

export default BuildForm;
