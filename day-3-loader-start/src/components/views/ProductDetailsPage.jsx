import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../store/modules/productsSlice";

const ProductDetailsPage = () => {
    const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProduct(id))
    const { singleProduct } = useSelector((state) => state.products); // GETS YOU THE PRODUCTS FROM THE STORE
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            //  id exists before calling fetchProduct is necessary to prevent errors.
            dispatch(fetchProductById(id));
        }
    }, [dispatch, id]);
    const discountDecimal = singleProduct.discountPercentage / 100;
    const discountTotal = singleProduct.price * discountDecimal;
    const oldPrice = discountTotal + singleProduct.price;
    return (
        <>
            {singleProduct && (
                <div>
                    {singleProduct.brand}
                    <h1>{singleProduct.title}</h1>
                    <p>{singleProduct.description}</p>

                    {singleProduct.images && singleProduct.images.length && (
                        <div className="max-w-md">
                            <img
                                src={singleProduct.images[0]}
                                alt="first product"
                            />
                        </div>
                    )}
                    <p>Old price: {oldPrice.toFixed(2)}</p>
                    <p>
                        Discount:
                        {discountTotal.toFixed(2)}$
                    </p>
                    <p>Price:{singleProduct.price.toFixed(2)}$</p>
                </div>
            )}
        </>
    );
};

export default ProductDetailsPage;
