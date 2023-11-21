import { HomeQuery } from "../utils/strapi-query";
import HomeBanner from "./components/HomeBanner";
import {fetchHomeData} from '../lib/fetchData'


export default async function Home() {
  const data = await fetchHomeData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <HomeBanner data={data}/>
      </div>
    </main>
  );
}
