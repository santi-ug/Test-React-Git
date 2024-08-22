import "../styles/Footer.css";

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__container-row'>
					<div className='footer__container-row-col'>
						<h4>company</h4>
						<ul>
							<li>
								<a href='#'>about us</a>
							</li>
							<li>
								<a href='#'>our services</a>
							</li>
							<li>
								<a href='#'>privacy policy</a>
							</li>
						</ul>
					</div>
					<div className='footer__container-row-col'>
						<h4>get help</h4>
						<ul>
							<li>
								<a href='#'>shipping</a>
							</li>
							<li>
								<a href='#'>order status</a>
							</li>
							<li>
								<a href='#'>payment options</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='footer__container-copyright'>
					<p>&copy; 2024 Company. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
