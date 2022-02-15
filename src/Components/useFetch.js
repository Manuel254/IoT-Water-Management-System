import { useState, useEffect } from "react";
import { db, ref, onValue } from "../firebase-config";

const useFetch = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const dataRef = ref(db, "data");
    onValue(dataRef, (snapshot) => {
      setData(snapshot.val());
      console.log("Component has rendered");
    });
  }, []);

  return data;
};

export default useFetch;
