import "../styles/home.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
    const [products, setProducts] = useState('');

    useEffect(() => {
        axios.get("http://localhost:2020/products")
            .then(response => {
                setProducts(response.data);
            })
            .catch(() => console.log("didn't axios"));
    }, [])
    //dependecy blank == will only work once

    console.log("products in state", products);

    return <div className="home">
        {[...products].map((product, i) => {
            return <div key={i}>
                <h1>{product.name}</h1>
            </div>
        })}
    </div>
}