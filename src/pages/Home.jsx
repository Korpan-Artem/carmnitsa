import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import Banner from "../components/Banner";
import ModelsCard from "../components/ModelsCard";
import compass from '../assets/images/compass.png';
import renegade from '../assets/images/renegade.png';
import cherokee from '../assets/images/cherokee.png';

const Models = [
  {
    brand: "Jeep",
    model: "Compass",
    year: 2017,
    photoUrl: compass
  },
  {
    brand: "Jeep",
    model: "Renegade",
    year: 2020,
    photoUrl: renegade
  },
  {
    brand: "Jeep",
    model: "Cherokee",
    year: 2025,
    photoUrl: cherokee
  },
];

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();

        setProducts(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  return (
    <>
      <Banner />
      <ModelsCard products={Models} />
    </>
  );
}
