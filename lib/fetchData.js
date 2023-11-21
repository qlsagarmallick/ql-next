import { HomeQuery } from "../utils/strapi-query";
import { NavbarQuery } from "../utils/strapi-query";

export  async function fetchHomeData() {
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

  export  async function fetchNavbarData() {
    const url = process.env.PROD_URL;
    try {
      const res = await fetch(
        `${url}/api/home?${NavbarQuery}`,
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
