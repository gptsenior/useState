import { useState } from "react";
import './UserForm.css';

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    groupCode: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="user-form-container"> {}
      <h2>Форма користувача</h2>
      <form>
        <label>
          Ім'я:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Прізвище:
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
        </label>
        <label>
          Код групи:
          <input type="text" name="groupCode" value={formData.groupCode} onChange={handleChange} />
        </label>
        <label>
          Електронна пошта:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
      </form>

      <h3>Введені дані:</h3>
      <ul>
        <li><strong>Ім'я:</strong> {formData.name}</li>
        <li><strong>Прізвище:</strong> {formData.surname}</li>
        <li><strong>Код групи:</strong> {formData.groupCode}</li>
        <li><strong>Email:</strong> {formData.email}</li>
      </ul>
    </div>
  );
}

export default UserForm;