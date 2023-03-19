import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/modules/listings";

function App() {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.listings);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    console.log(products);
    return (
        <div>
            <h1 className="underline text-lime-300">Hello BoreOff !</h1>
        </div>
    );
}

export default App;
