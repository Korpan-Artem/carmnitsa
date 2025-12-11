import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import Banner from '../components/Banner';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Products</h1>
      {products.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
      <Banner/>
    </div>
  );
}
