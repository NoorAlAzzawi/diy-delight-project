import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BuildForm from "../components/BuildForm";
import { getItem, updateItem } from "../services/api";

function EditBuild() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadBuild() {
      try {
        const build = await getItem(id);
        setFormData(build);
      } catch (error) {
        setServerError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadBuild();
  }, [id]);

  async function handleSubmit(payload) {
    setServerError("");

    try {
      setIsSaving(true);
      await updateItem(id, payload);
      navigate("/");
    } catch (error) {
      setServerError(error.message);
    } finally {
      setIsSaving(false);
    }
  }

  if (isLoading) {
    return (
      <section className="page-section">
        <div className="empty-state">Loading build...</div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <BuildForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        submitLabel="Update Build"
        isSaving={isSaving}
        serverError={serverError}
      />
    </section>
  );
}

export default EditBuild;
