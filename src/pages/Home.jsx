import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import Banner from "../components/Banner";
import ModelsCard from "../components/ModelsCard";

const Models = [
  {
    brand: "BMW",
    model: "M5",
    year: 2017,
    photoUrl: "https://mixprogram.ru/upload/000/u1/6/c/bmw-photo-normal.jpg",
  },
  {
    brand: "Wolksvagen",
    model: "B3",
    year: 2020,
    photoUrl: "https://s1.manualzz.com/image-store/data/4764091-256x256",
  },
  {
    brand: "Tesla",
    model: "Y",
    year: 2025,
    photoUrl:
      "https://files.idyllic.app/files/static/2106675?width=256&optimizer=image",
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
    <div>
      <h1>Products</h1>
      {products.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
      <Banner />
      <ModelsCard products={Models} />
    </div>
  );
}
