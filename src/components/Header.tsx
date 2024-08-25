import "../styles/Header.css";

export default function Header() {
	return (
		<header className="header">
			<div className="central">
				<div className="central1">
					<button type="button">
						<img src="https://img.freepik.com/vector-premium/productos-alimenticios-estante-tienda-ilustracion-venta-estantes-supermercado-escaparate-tienda-alimentos-productos-comida-empaquetada-eleccion_102902-824.jpg" alt="Buscar"></img>
					</button>

					<div className="topnav">
						<a href="/home">Home</a>
						<a href="#about">About</a>
						
						<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
						<a className="fa fa-facebook" href="#facebook"></a>
						<a className="fa fa-youtube" href="#youtube"></a>
						<a className="fa fa-instagram" href="#instagram"></a>
					</div>
				</div>

				<div className="search-container">
					<input type="text" placeholder="Search.."></input>
					<button className="fa fa-search" type="button"></button>
				</div>
			</div>
		</header>
	)
}
