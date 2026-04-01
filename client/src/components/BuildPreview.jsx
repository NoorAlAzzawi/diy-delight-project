import { getOption } from "../utilities/builder";

function BuildPreview({ config, price }) {
  const shell = getOption("shell", config.shell);
  const finishClass = config.finish.toLowerCase();

  return (
    <div className="preview-card">
      <div className="preview-topbar">
        <p className="eyebrow">Live Preview</p>
        <span className="price-pill">${price}</span>
      </div>

      <div
        className={`device-preview finish-${finishClass}`}
        style={{
          "--accent-color": shell?.accent || "#6d5efc",
          "--accent-glow": shell?.glow || "#b49cff",
        }}
      >
        <div className="device-lid"></div>
        <div className="device-body">
          <div className="device-core">{config.core}</div>
          <div className="device-storage">{config.storage}</div>
        </div>
      </div>

      <div className="preview-specs">
        <div>
          <span>Shell</span>
          <strong>{config.shell}</strong>
        </div>
        <div>
          <span>Power</span>
          <strong>{config.power}</strong>
        </div>
        <div>
          <span>Finish</span>
          <strong>{config.finish}</strong>
        </div>
      </div>
    </div>
  );
}

export default BuildPreview;
