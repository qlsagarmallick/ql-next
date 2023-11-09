import { HomeQuery } from "../utils/strapi-query";
import HomeBanner from "./components/HomeBanner";

async function getData() {
  const url = process.env.PROD_URL;
  try {
    const res = await fetch(
      `${url}/api/home?${HomeQuery}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error(
        "Failed to fetch data"
      );
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
}
export default async function Home() {
  const data = await getData();
  console.log("data", data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <HomeBanner data={data}/>
      </div>
    </main>
  );
}
