"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteDish() {
  const [recordId, setRecordId] = useState("");
  const router = useRouter();

  const deleteRecord = async (e) => {
    e.preventDefault();
    await fetch(
      `http://127.0.0.1:8090/api/collections/menus/records/${recordId}`,
      { 
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setRecordId("");
    router.refresh();
  };

  return (
    <form onSubmit={deleteRecord}>
      <h3>Delete Cuisine</h3>
      <input className= "glowingtextbox"
        type="text"
        placeholder="Record ID"
        value={recordId}
        onChange={(e) => setRecordId(e.target.value)}
      />
      <button className= "glowingbutton" type="submit">Delete</button>
    </form>
  );
}