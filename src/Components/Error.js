import { useRouteError } from "react-router-dom"

const Error = () => {
	const err = useRouteError();
	console.log(err)
	return (
		<div className="text-4xl text-back p-40 ">
			<h1>An error occurred:</h1>
		</div>
		// <section className="page_404">
		// 	<div className="container">
		// 		<div className="row">
		// 			<div className="col-sm-12 ">
		// 				<div className="col-sm-10 col-sm-offset-1  text-center">
		// 					<div className="four_zero_four_bg">
		// 						<h1 className="text-center ">404</h1>

		// 					</div>

		// 					<div className="contant_box_404">
		// 						<h3 className="h2">
		// 							Look like you're lost
		// 						</h3>
		// 						<h4>Error Status : {err.statusText}</h4>

		// 						<p>The page you are looking for is not avaible!!!</p>

		// 						<a href="#" className="link_404">Go to Home</a>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
	)
}
export default Error; 