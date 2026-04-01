import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteItem, getItem } from "../services/api";

function BuildDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [build, setBuild] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBuild() {
      try {
        const result = await getItem(id);
        setBuild(result);
      } catch (loadError) {
        setError(loadError.message);
      }
    }

    loadBuild();
  }, [id]);

  async function handleDelete() {
    try {
      await deleteItem(id);
      navigate("/");
    } catch (deleteError) {
      setError(deleteError.message);
    }
  }

  if (error) {
    return (
      <section className="page-section">
        <div className="message error">{error}</div>
      </section>
    );
  }

  if (!build) {
    return (
      <section className="page-section">
        <div className="empty-state">Loading build...</div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="details-card">
        <div className="details-header">
          <div>
            <p className="eyebrow">Build Details</p>
            <h1>{build.name}</h1>
            <p>
              {build.core} core with {build.power} mode and {build.storage}{" "}
              storage.
            </p>
          </div>

          <span className="price-pill large">${build.price}</span>
        </div>

        <div className="details-grid">
          <div className="details-block">
            <span>Shell</span>
            <strong>{build.shell}</strong>
          </div>
          <div className="details-block">
            <span>Core</span>
            <strong>{build.core}</strong>
          </div>
          <div className="details-block">
            <span>Power</span>
            <strong>{build.power}</strong>
          </div>
          <div className="details-block">
            <span>Storage</span>
            <strong>{build.storage}</strong>
          </div>
          <div className="details-block">
            <span>Finish</span>
            <strong>{build.finish}</strong>
          </div>
          <div className="details-block">
            <span>Created</span>
            <strong>{new Date(build.created_at).toLocaleDateString()}</strong>
          </div>
        </div>

        <div className="card-actions">
          <Link to={`/builds/${build.id}/edit`} className="primary-button">
            Edit Build
          </Link>
          <button className="danger-button" onClick={handleDelete}>
            Delete Build
          </button>
          <Link to="/" className="secondary-button">
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BuildDetails;
