import Image from "next/image";
import Hero from "./components/hero/Hero";
import SuperDelicious from "./components/super-delicious/page";
import PopularCategory from "./components/popular-category/page";
import EmailSubscription from "./components/EmailSubscription";
import HandPicked from "./components/hand-pick/page";
import LatestRecipe from "./components/latest-recipe/page";

export default function Home() {
  return (
    <main class="container mx-auto px-4 mt-[100px]">
      <Hero />
      <SuperDelicious />
      <PopularCategory />
      <EmailSubscription />
      <HandPicked />
      <LatestRecipe />
    </main>

  );
}
