import { useState } from "react";
import "./styles.css";

type FormData = {
  minPrice?: number;
  maxPrice?: number;
};

type Props = {
  onSearch?: (formData: FormData)=> void;
}

export default function Filter({onSearch}: Props) {
  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event:  React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(onSearch){
      onSearch(formData);
    }
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
          <button className="DSF-button" type="submit"  >Filtrar</button>
        </div>
      </form>
    </>
  );
}
