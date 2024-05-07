import React, { useState } from 'react';
import api from '../services/api';

const AddPersonForm = () => {
    const [formData, setFormData] = useState({ name: '', cpf: '', age: '' });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await api.post('/people', formData);
            alert('Person added successfully!');
            // Optionally, clear form fields
            setFormData({ name: '', cpf: '', age: '' });
        } catch (error) {
            console.error('Error adding person:', error);
            alert('Error adding person. Please try again.');
        }
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Add Person</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <label>CPF:</label>
                <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
                <button type="submit">Add Person</button>
            </form>
        </div>
    );
};

export default AddPersonForm;
