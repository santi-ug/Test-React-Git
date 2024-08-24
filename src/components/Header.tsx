import "../styles/Header.css";

export default function Header() {
	return (
		<div className="central">
			<div className="central1">
				<button type="button">
					<img src="https://img.freepik.com/vector-gratis/plantilla-logotipo-laptop-diseno-plano_23-2149001441.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724371200&semt=ais_hybrid" alt="Buscar"></img>
				</button>

				<div className="topnav">
					<a href="#home">Home</a>
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
		
	)
}
