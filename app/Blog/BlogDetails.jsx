/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

function BlogDetails() {
  return (
    <>
      <h2 class="text-3xl font-bold mb-4">Before you begin</h2>
      <p class="mb-8">
        Food qualities braise chicken cuts bowl through slices butternut snack.
        Tender meat juicy dinners. One-pot low heat plenty of time adobo fat raw
        soften fruit. sweet renders bone-in marrow richness kitchen, fricassee
        basted putter.
      </p>

      <h2 class="text-3xl font-bold mb-4">Here are the basics</h2>
      <p class="mb-8">
        Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy sauce
        burgers brisket. polenta mustard hunk greens. Wine technique snack
        skewers chuck excess. Oil heat slowly. slices natural delicious, set
        aside magic tbsp skillet, bay leaves brown centerpiece. fruit soften
        edges frond slices onion snack pork steem on wines excess technique cup;
        Cover smoker soy sauce.
      </p>

      <blockquote class="text-3xl font-bold italic text-center my-12 px-4">
        "One cannot think well, love well, sleep well, if one has not dined
        well."
      </blockquote>
      <p class="text-center text-gray-600 mb-12">
        — Virginia Woolf, A Room of One's Own
      </p>

      <h2 class="text-3xl font-bold mb-4">In the kitchen</h2>
      <p class="mb-8">
        Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious
        romantic undisturbed raw platter will meld. Thick Skewers skillet
        natural, smoker soy sauce wait roux. slices rosette bone-in simmer.
        Romantic fall-off-the-bone butternut chuck under romas, Skewers on
        culinary experience.
      </p>

      <Image
        src="/assets/thumbs/thumb-15.jpg"
        alt="Cooking in kitchen"
        height={800}
        width={400}
        class="w-full h-auto mb-8 rounded-lg max-w-xl mx-auto"
      />

      <p class="mb-8">
        Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy sauce
        burgers brisket. polenta mustard hunk greens. Wine technique snack
        skewers chuck excess. Oil heat slowly. slices natural delicious, set
        aside magic tbsp skillet, bay leaves brown centerpiece. fruit soften
        edges frond slices onion snack pork steem on wines excess technique cup;
        Cover smoker soy sauce.
      </p>
    </>
  );
}

export default BlogDetails;
