import Link from "next/link";
import PocketBase from "pocketbase";
import CreateMenu from "./CreateMenu";
import DeleteMenu from "./DeleteMenu";
import UpdateMenu from "./UpdateMenu";

import styles from "./page.module.css";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

async function getMenu() {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const data = await pb.collection("menus").getList(1, 50);
  console.log(data);
  return data?.items || [];
}

export default async function MenuExpanded() {
  const menus = await getMenu();
  return (
    <div>
      <div className={styles.cardlist}>
        {menus.map((menu) => {
          return <Menu key={menu.id} menu={menu} />;
        })}
      </div>
      <CreateMenu />
      <DeleteMenu />
      <UpdateMenu />
    </div>
  );
}

function Menu({ menu }) {
  const { id, cuisine, dish } = menu || {};

  return (
    <Link href={`/menus/${id}`}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h2>{cuisine}</h2>
          <h5>{dish}</h5>
        </header>
      </div>
    </Link>
  );
}
