import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteItem, getItems } from "../services/api";

function Home() {
  const [builds, setBuilds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadBuilds() {
    try {
      setIsLoading(true);
      setError("");
      const data = await getItems();
      setBuilds(data);
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadBuilds();
  }, []);

  async function handleDelete(id) {
    try {
      setError("");
      await deleteItem(id);
      await loadBuilds();
    } catch (deleteError) {
      setError(deleteError.message);
    }
  }

  const averagePrice = builds.length
    ? Math.round(
        builds.reduce((sum, item) => sum + item.price, 0) / builds.length
      )
    : 0;

  return (
    <>
      <section className="hero-panel">
        <div>
          <p className="eyebrow">DIY Delight Project 4</p>
          <h1>BoltBucket Studio</h1>
          <p className="hero-copy">
            Build a futuristic custom device, see the design update instantly,
            and save your finished configurations.
          </p>

          <div className="hero-actions">
            <Link to="/create" className="primary-button">
              Create a Build
            </Link>
            <a href="#saved-builds" className="secondary-button">
              View Saved Builds
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-device">
            <div className="hero-device-top"></div>
            <div className="hero-device-bottom">
              <span>BOLT</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        <article className="stat-card">
          <span>Total Builds</span>
          <strong>{builds.length}</strong>
        </article>

        <article className="stat-card">
          <span>Average Price</span>
          <strong>${averagePrice}</strong>
        </article>

        <article className="stat-card">
          <span>Custom Options</span>
          <strong>5</strong>
        </article>
      </section>

      <section id="saved-builds" className="list-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Saved Configurations</p>
            <h2>Your custom BoltBuckets</h2>
          </div>

          <Link to="/create" className="secondary-button">
            New Build
          </Link>
        </div>

        {isLoading ? (
          <div className="empty-state">Loading builds...</div>
        ) : null}
        {error ? <div className="message error">{error}</div> : null}

        {!isLoading && !error && builds.length === 0 ? (
          <div className="empty-state">
            No builds yet. Create your first one to fill this gallery.
          </div>
        ) : null}

        {!isLoading && !error && builds.length > 0 ? (
          <div className="build-grid">
            {builds.map((build) => (
              <article className="build-card" key={build.id}>
                <div className="build-card-top">
                  <p className="eyebrow">{build.shell} shell</p>
                  <span className="price-pill">${build.price}</span>
                </div>

                <h3>{build.name}</h3>
                <p>
                  {build.core} core · {build.power} mode · {build.storage} ·{" "}
                  {build.finish}
                </p>

                <div className="card-actions">
                  <Link
                    to={`/builds/${build.id}`}
                    className="secondary-button small"
                  >
                    Details
                  </Link>
                  <Link
                    to={`/builds/${build.id}/edit`}
                    className="secondary-button small"
                  >
                    Edit
                  </Link>
                  <button
                    className="danger-button small"
                    onClick={() => handleDelete(build.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </section>
    </>
  );
}

export default Home;
