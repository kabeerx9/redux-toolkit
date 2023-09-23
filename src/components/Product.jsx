import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Card,
	CardBody,
	CardTitle,
	Row,
	Col,
	CardImg,
	CardText,
	CardFooter,
	Button,
} from "reactstrap";
import { addItem } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
	const dispatch = useDispatch();

	const { data: products, status } = useSelector((store) => store.products);

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	const handleAddItem = (product) => {
		dispatch(addItem(product));
	};

	if (status === "error") return <h1>Something went wrong</h1>;

	const cards = products.map((product) => {
		return (
			<Col key={product.id} md={3} sm={12} className="d-flex ">
				<Card className="align-items-center">
					<CardImg
						top
						style={{ width: "100px", height: "130px" }}
						src={product.image}
						alt={product.title}
					/>
					<CardBody>
						<CardTitle tag="h5">{product.title}</CardTitle>
						<CardText>{product.description}</CardText>
					</CardBody>
					<CardFooter className="w-100 d-flex justify-content-between">
						<Button onClick={() => handleAddItem(product)} color="primary">
							Add to cart
						</Button>
						<span>INR.{product.price}</span>
					</CardFooter>
				</Card>
			</Col>
		);
	});

	return (
		<div>
			<h1>Products Dashboard</h1>
			{status === "loading" ? <h1>Loading....</h1> : <Row>{cards}</Row>}
		</div>
	);
};

export default Product;
