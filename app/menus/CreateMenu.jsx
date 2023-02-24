"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateDish() {
  const [cuisine, setCuisine] = useState("");
  const [dish, setDish] = useState("");
  const router = useRouter();

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/menus/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cuisine,
        dish,
      }),
    });
    setCuisine("");
    setDish("");
    router.refresh();
  };
  return (
    <form onSubmit={create}>
      <h3>Create Cuisine</h3>
      <input className= "glowingtextbox"
        type="text"
        placeholder="Cuisine"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      />
      <input className= "glowingtextbox"
        placeholder="Dish"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
      />
      <button className="glowingbutton" type="submit">Add</button>
    </form>
  );
}
