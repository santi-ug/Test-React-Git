import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import "../styles/Categories.css";

const Categories: React.FC = () => {
    // Estado para controlar si el dropdown está abierto o cerrado
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Función para manejar el clic en el botón del dropdown
    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryChange = (selectedCategory: string) => {
        console.log("Selected category:", selectedCategory);
        navigate('/form')
    };

    const navigate = useNavigate();

    return (
        <div className="sidenav">
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <button className="dropdown-btn" onClick={handleDropdownClick}>
                PQRSF
                <i className={`fa fa-caret-down ${isOpen ? "active" : ""}`}></i>
            </button>

            <div className={`dropdown-container ${isOpen ? "show" : ""}`}>
                <a href="#" onClick={() => handleCategoryChange('peticion')}>Petición</a>
                <a href="#" onClick={() => handleCategoryChange('queja')}>Queja</a>
                <a href="#" onClick={() => handleCategoryChange('reclamo')}>Reclamo</a>
                <a href="#" onClick={() => handleCategoryChange('sugerencia')}>Sugerencia</a>
                <a href="#" onClick={() => handleCategoryChange('felicitacion')}>Felicitación</a>
            </div>
        </div>
    );
};

export default Categories;