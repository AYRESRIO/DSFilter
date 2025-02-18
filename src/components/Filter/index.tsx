import { useState } from "react";
import "./styles.css";

type FormData = {
  minPrice?: number;
  maxPrice?: number;
};

export default function Filter() {
  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(formData.maxPrice || 0);
    console.log(formData.minPrice || 10000);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="DSF-container DSF-form">
        <br />
        <div>
          <input
            className="DSF-input"
            name="minPrice"
            value={formData.minPrice || ""}
            type="text"
            placeholder="Preço mínimo"
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <input
            className="DSF-input"
            name="maxPrice"
            value={formData.maxPrice || ""}
            type="text"
            placeholder="Preço máximo"
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <button className="DSF-button">Filtrar</button>
        </div>
      </form>
    </>
  );
}
