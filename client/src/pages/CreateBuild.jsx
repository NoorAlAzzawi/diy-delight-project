import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BuildForm from "../components/BuildForm";
import { defaultConfiguration } from "../utilities/catalog";
import { createItem } from "../services/api";

function CreateBuild() {
  const [formData, setFormData] = useState(defaultConfiguration);
  const [isSaving, setIsSaving] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(payload) {
    setServerError("");

    try {
      setIsSaving(true);
      await createItem(payload);
      navigate("/");
    } catch (error) {
      setServerError(error.message);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="page-section">
      <BuildForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        submitLabel="Save Build"
        isSaving={isSaving}
        serverError={serverError}
      />
    </section>
  );
}

export default CreateBuild;
