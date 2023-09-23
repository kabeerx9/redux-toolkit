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
import { removeItem } from "../store/cartSlice";

const Cart = () => {
	const cart = useSelector((store) => store.cart);
	const dispatch = useDispatch();

	const handleRemoveItem = (product) => {
		dispatch(removeItem(product));
	};

	return (
		<Row>
			{cart.items.map((product) => (
				<Col md={6} key={product.id}>
					<Card className="my-3">
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
							<Button onClick={() => handleRemoveItem(product)} color="danger">
								Remove
							</Button>
							<span>INR.{product.price}</span>
						</CardFooter>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default Cart;
