import { useState, useEffect } from "react";
import axios from "axios";

const Superherospage = () => {
  const [loading, setLoading] = useState(false);
  const [superheroes, setSuperheroes] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/superheros")
      .then((response) => {
        setSuperheroes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>Superherospage</h1>
      {superheroes.map((hero) => (
        <div key={hero.id}>{hero.alterEgo}</div>
      ))}
    </div>
  );
};

export default Superherospage;
