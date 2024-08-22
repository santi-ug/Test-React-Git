import "../styles/Main.css";
import Product from "./Product";

export default function Main() {
	return (
		<main className='main'>
			<aside className='main__aside'>Categories</aside>
			<section className='main__products'>
				<Product
					img='https://www.seriouseats.com/thmb/11qT8GbesT5Uk9YbnIuK98EgZAw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__08__20150815-sous-vide-corn-kenji-9-39c3e634fee04bd7b0de34ac9d580109.jpg'
					title='corn'
					desc='a lot of corn'
					price='1000'
				/>
				<Product
					img='https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg'
					title='eggs'
					desc='30 grams of eggs'
					price='3000'
				/>
				<Product
					img='https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg'
					title='apple'
					desc='a literal apple'
					price='500'
				/>
				<Product
					img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EZenExcPl5a_leFkFbwu5jGw2Dv3dmI2fw&s'
					title='pineapple'
					desc='solid pineapple fr'
					price='750'
				/>
				<Product
					img='https://pyxis.nymag.com/v1/imgs/96f/1ef/ac93d2b422a1c5de953dc39764579a306c-ONGold.rsquare.w600.jpg'
					title='protein'
					desc='20g protein scoop'
					price='15000'
				/>
				<Product
					img='https://upload.wikimedia.org/wikipedia/commons/0/05/Orangejuice.jpg'
					title='orange juice'
					desc='refreshing drink'
					price='2500'
				/>
			</section>
		</main>
	);
}
