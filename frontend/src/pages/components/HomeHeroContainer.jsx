import React from "react";
import { CustomImages } from "../../assets/images";

const HomeHeroContainer = () => {
  return (
    <div class=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
        src={CustomImages.pethero}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-purple-700 dark:text-white">
          Living with Both Cats and Dogs
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mr-10">
          I'm not sure where the phrase "fighting like cats and dogs" comes
          from, but in the majority of homes I am acquainted with, dogs and cats
          share living quarters quite amiably. In fact, it is often more
          difficult to introduce a second female cat or a second male dog to a
          household than it is a member of the other species. There are
          exceptions, of course. Trying to socialize stray cats that border on
          feral presents a serious health risk to resident dogs, even friendly
          ones. Dogs with strong prey drives (the desire to catch, shake and
          kill) can put the family cat in considerable danger.
        </p>
      </div>
    </div>
  );
};

export default HomeHeroContainer;
