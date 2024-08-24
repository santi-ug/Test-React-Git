import "../styles/Main.css";
import Categories from "./categories";

export default function Main() {
	return (
		<main className='main'>
			<section>
				<Categories />
			</section>
			<section className='main__products'>Products</section>
		</main>
	);
}
