import { useState } from "react";
import {
	Button,
	Card,
	CardHeader,
	Input,
	CardBody,
	Row,
	Col,
} from "reactstrap";
import { useGetProductsQuery } from "../store/api/dashboardSlice";

const Dashboard = () => {
	const [productId, setProductId] = useState(null);

	const {
		data: productsData,
		error,
		isLoading,
	} = useGetProductsQuery(productId ? Number(productId) : undefined);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Something went wrong...</div>;
	}

	const productsArray = productId ? [productsData] : productsData;

	return (
		<Card>
			<CardHeader className="d-flex">
				<Input
					type="number"
					value={productId}
					onChange={(e) => setProductId(e.target.value)}
					placeholder="Enter Id..."
				/>
				<Button>Search</Button>
			</CardHeader>
			<CardBody>
				<Row>
					{productsArray.map((product) => (
						<Col md={3} key={product.id}>
							<h2>{product.title}</h2>
							<img
								style={{ height: "100px", width: "120px" }}
								src={product.image}
								alt={product.title}
							/>
							<p>{product.description}</p>
							<p>{product.price}</p>
						</Col>
					))}
				</Row>
			</CardBody>
		</Card>
	);
};

export default Dashboard;
