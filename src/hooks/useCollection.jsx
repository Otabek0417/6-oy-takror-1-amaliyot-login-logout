import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useCollection(c, _query) {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);
  const q = query(collection(db, c), where(..._query));
  useEffect(() => {
    setIspending(true);
    const insup = onSnapshot(
      q,
      (snapshot) => {
        const results = [];
        snapshot.docs.forEach((item) => {
          results.push({ id: item.id, ...item.data() });
        });
        setIspending(false);
        setError(null);
        setDocuments(results);
      },
      (error) => {
        isPending(false);
        setError(error);
        console.log(error);
      },
    );

    return () => insup();
  }, [c]);

  return { documents, error, isPending };
}
