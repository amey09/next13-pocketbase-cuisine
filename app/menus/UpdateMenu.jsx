"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UpdateDish() {
  const [cuisine, setCuisine] = useState("");
  const [dish, setDish] = useState("");
  const [recordId, setRecordId] = useState("");
  const router = useRouter();

  const update = async (e) => {
    e.preventDefault();
    await fetch(
      `http://127.0.0.1:8090/api/collections/menus/records/${recordId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cuisine: `${cuisine}`,
          dish: `${dish}`,
        }),
      }
    );
    setCuisine("");
    setDish("");
    setRecordId("");
    router.refresh();
  };
  return (
    <form onSubmit={update}>
      <h3>Update Cuisine</h3>
      <input className= "glowingtextbox"
        type="text"
        placeholder="Record ID"
        value={recordId}
        onChange={(e) => setRecordId(e.target.value)}
      />
      <input
        className="glowingtextbox"
        type="text"
        placeholder="Cuisine"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      />
      <input
        className="glowingtextbox"
        placeholder="Dish"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
      />
      <button className="glowingbutton" type="submit">
        Update
      </button>
    </form>
  );
}
