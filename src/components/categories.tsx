import "../styles/Categories.css";
import React, { useState } from "react";

const Categories: React.FC = () => {
    // Estado para controlar si el dropdown está abierto o cerrado
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Función para manejar el clic en el botón del dropdown
    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

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
                <a href="#">Petición</a>
                <a href="#">Queja</a>
                <a href="#">Reclamo</a>
                <a href="#">Sugerencia</a>
                <a href="#">Felicitación</a>
            </div>
        </div>
    );
};

export default Categories;