import "../styles/Product.css";
export default function Product(props: {
	title: string;
	desc: string;
	price: string;
	img: string;
}) {
	return (
		<div className='main__product'>
			<img className='main__product-image' src={props.img} alt='Product' />
			<h3 className='main__product-title'>{props.title}</h3>
			<p className='main__product-description'>{props.desc}</p>
			<p className='main__product-price'>${props.price}</p>
			<button className='main__product-button'>Add to cart</button>
		</div>
	);
}
