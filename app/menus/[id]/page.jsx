import styles from "../page.module.css";

async function getMenu(menuId) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/menus/records/${menuId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function MenuPage({ params }) {
  const menu = await getMenu(params.id);
  return (
    <div>
      <h1>menus/{menu.id}</h1>
      <div className={styles.note}>
        <h3>{menu.cuisine}</h3>
        <h5>{menu.dish}</h5>
      </div>
    </div>
  );
}