/* posts.ts — Blog content. Each post is a Pinterest-ready landing page that
   funnels readers to the free 5-Day Family Starter Kit. */

export type PostSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  numbered?: boolean;
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  readTime: string;
  description: string;
  image: string;
  sections: PostSection[];
};

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_hero-WrzzMRL47rTRa5AnNdZVDM.webp";
const COMMUNITY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_community-hdjWTcRCREr94nmBxPyRmh.webp";
const STARTER_KIT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/96284060/G3pCmRE8ZE7sNzpzvavE5s/opb_starter_kit-7YvHvMC9dEAq2p8xRYAAFF.webp";

export const posts: Post[] = [
  {
    slug: "kid-approved-plant-based-dinners",
    title: "7 Plant-Based Dinners Your Kids Will Actually Eat (All Under 30 Minutes)",
    category: "Recipes",
    date: "2026-07-01",
    readTime: "6 min read",
    description:
      "Seven weeknight plant-based dinners tested on real picky eaters — familiar flavors, no exotic ingredients, all done in 30 minutes or less.",
    image: HERO_IMG,
    sections: [
      {
        paragraphs: [
          "If you've ever put a beautiful lentil curry in front of a seven-year-old and watched them stare at it like it was a science experiment, this list is for you.",
          "The secret to getting kids eating more plants isn't hiding vegetables or lecturing about nutrition. It's starting with formats they already love — tacos, pasta, nuggets, rice bowls — and quietly making the plants the star. Every dinner below uses ingredients from a regular grocery store and comes together in 30 minutes or less.",
        ],
      },
      {
        heading: "1. Crispy Chickpea Tacos",
        paragraphs: [
          "Toss a drained can of chickpeas in olive oil, cumin, smoked paprika, and a pinch of salt. Roast at 425°F for 20 minutes until crispy. Serve in warm tortillas with shredded lettuce, corn, avocado, and a squeeze of lime. Kids assemble their own — which is half the reason they eat it.",
        ],
      },
      {
        heading: "2. One-Pot Creamy Tomato Pasta",
        paragraphs: [
          "Sauté garlic in olive oil, add a jar of marinara, a cup of red lentils, and four cups of water or veggie broth. Add pasta and simmer 12 minutes. The lentils melt into the sauce and add roughly 12 grams of protein per serving without anyone noticing.",
        ],
      },
      {
        heading: "3. Sweet Potato Black Bean Quesadillas",
        paragraphs: [
          "Mash roasted sweet potato (microwave it for 6 minutes to save time) with black beans, cumin, and a little salsa. Spread inside a tortilla with or without dairy-free cheese, and pan-toast until crispy. Cut into triangles — triangles always win.",
        ],
      },
      {
        heading: "4. Teriyaki Rice Bowls",
        paragraphs: [
          "Frozen edamame, steamed broccoli, shredded carrots, and cubed baked tofu (or just extra edamame) over rice, with store-bought teriyaki sauce. Let each kid build their own bowl. Skeptics get more rice and sauce; that's fine — exposure counts.",
        ],
      },
      {
        heading: "5. Smash Burger-Style Bean Burgers",
        paragraphs: [
          "Mash a can of pinto beans with breadcrumbs, a spoonful of ketchup, and garlic powder. Form thin patties and pan-fry until crispy on both sides. Serve on buns with the works. Thin and crispy beats thick and mushy every time.",
        ],
      },
      {
        heading: "6. Sheet-Pan Fajita Night",
        paragraphs: [
          "Sliced peppers, onions, and portobello strips tossed in fajita seasoning, roasted 20 minutes on one pan. Warm tortillas, guacamole, and a DIY toppings bar. One pan, zero arguments.",
        ],
      },
      {
        heading: "7. 'Cheesy' Broccoli Mac",
        paragraphs: [
          "Blend soaked cashews (or white beans for a nut-free version) with nutritional yeast, garlic powder, a splash of plant milk, and salt. Toss with cooked pasta and small-chopped steamed broccoli. It's creamy, familiar, and takes 20 minutes.",
        ],
      },
      {
        heading: "Make It Stick",
        paragraphs: [
          "Pick two of these for next week — not all seven. Swapping two dinners a week is how families actually transition without pushback. If you want the full plan done for you (grocery list included), grab the free 5-Day Family Starter Kit below.",
        ],
      },
    ],
  },
  {
    slug: "5-day-plant-based-family-meal-plan",
    title: "The 5-Day Plant-Based Family Meal Plan (Picky-Eater Approved)",
    category: "Meal Planning",
    date: "2026-06-24",
    readTime: "7 min read",
    description:
      "A complete Monday-to-Friday plant-based dinner plan for busy families — one grocery trip, familiar meals, and a strategy for skeptical kids and partners.",
    image: STARTER_KIT_IMG,
    sections: [
      {
        paragraphs: [
          "The hardest part of feeding a family more plants isn't cooking — it's deciding what to cook while a hungry six-year-old orbits your legs at 5:45 PM.",
          "This plan solves the deciding. Five dinners, one grocery trip, and every meal chosen because it survived contact with real picky eaters. The goal here is not perfection or a fully vegan household by Friday. It's five good dinners that happen to be plant-based, and a calmer dinner table.",
        ],
      },
      {
        heading: "The Ground Rules",
        list: [
          "Every meal has a 'safe component' — something plain (rice, tortillas, pasta, bread) a skeptical eater can fill up on. Exposure beats force.",
          "Nothing requires a specialty store. Beans, grains, frozen veg, and pantry sauces do the heavy lifting.",
          "Batch once: Sunday, cook a pot of rice and roast two trays of vegetables. Half your week is now done.",
          "Deconstruct everything. Serve components separately for kids who don't like food 'touching.'",
        ],
      },
      {
        heading: "Monday — Taco Night",
        paragraphs: [
          "Seasoned black beans and corn, warm tortillas, and a toppings bar: lettuce, tomato, avocado, salsa. Everyone builds their own. Beans get eaten when kids control the assembly.",
        ],
      },
      {
        heading: "Tuesday — Creamy Tomato Lentil Pasta",
        paragraphs: [
          "One pot: marinara, red lentils, pasta, and broth simmered together. The lentils disappear into the sauce. Garlic bread on the side is the safe component and the bribe.",
        ],
      },
      {
        heading: "Wednesday — Build-Your-Own Rice Bowls",
        paragraphs: [
          "Sunday's rice plus roasted vegetables, edamame, shredded carrots, and two sauces (teriyaki and peanut). Bowls are the most forgiving format in family cooking — every eater customizes their own ratio.",
        ],
      },
      {
        heading: "Thursday — Breakfast for Dinner",
        paragraphs: [
          "Chickpea-flour pancakes or regular pancakes made with plant milk, plus fruit, hash browns, and scrambled tofu for the adventurous. Breakfast-for-dinner buys enormous goodwill midweek.",
        ],
      },
      {
        heading: "Friday — Homemade Pizza Night",
        paragraphs: [
          "Store-bought dough, marinara, and a toppings bar of mushrooms, peppers, olives, corn, and pineapple. Dairy-free cheese if you want it, regular cheese if that's where your family is right now. Progress, not purity.",
        ],
      },
      {
        heading: "What Happens After Friday?",
        paragraphs: [
          "One good week builds belief — yours and your family's. If you want the complete version of this system with the grocery list, prep schedule, and the 'getting your family on board' guide included, download the free 5-Day Family Starter Kit below. It's the exact starting point we recommend to every family.",
        ],
      },
    ],
  },
  {
    slug: "get-your-family-on-board-plant-based",
    title: "How to Get Your Family On Board With Plant-Based Eating (Without Dinner Table Battles)",
    category: "Family",
    date: "2026-06-17",
    readTime: "8 min read",
    description:
      "A practical psychology-first playbook for transitioning a skeptical partner and picky kids toward plant-based meals — no ultimatums, no lectures, no separate dinners.",
    image: COMMUNITY_IMG,
    sections: [
      {
        paragraphs: [
          "Here's the thing nobody tells you when you decide to eat more plants: the food is the easy part. The family is the hard part.",
          "You can find ten thousand lentil recipes online. What you can't find as easily is what to do when your partner rolls their eyes at 'another bean thing' or your ten-year-old declares a hunger strike. This guide is about that part — and it works better than any recipe.",
        ],
      },
      {
        heading: "Rule 1: Never Announce the Change",
        paragraphs: [
          "The fastest way to create resistance is a family meeting about How Things Are Going To Be Different Now. Announcements invite debate. Dinner doesn't.",
          "Just start cooking better plant-based meals. Taco night stays taco night — the filling changes. Most families won't flag a change they weren't asked to approve.",
        ],
      },
      {
        heading: "Rule 2: Change the Default, Not the Menu",
        paragraphs: [
          "Keep the meal formats your family already loves — pasta night, pizza Friday, weekend pancakes — and upgrade the ingredients inside them. Familiar format plus new filling is invisible. New format plus new filling is a fight.",
        ],
      },
      {
        heading: "Rule 3: Give Everyone an Out",
        paragraphs: [
          "Every plant-forward dinner should include one 'safe' component: plain rice, bread, fruit, tortillas. Kids who know they won't go hungry stop treating new food as a threat. Paradoxically, the out makes them more likely to try the main dish, not less.",
        ],
      },
      {
        heading: "Rule 4: Recruit Your Partner Privately",
        paragraphs: [
          "Skeptical partners undermine change accidentally — a raised eyebrow at the dinner table teaches kids the food is weird. Have the honest conversation away from the kids: you're not asking them to become vegan, you're asking them to not veto dinner. Most partners will agree to neutrality, and neutrality is all you need.",
        ],
      },
      {
        heading: "Rule 5: Let Kids Own a Piece",
        paragraphs: [
          "Kids eat what they control. Toppings bars, build-your-own bowls, letting a kid pick which vegetable gets roasted — ownership converts skeptics faster than any hidden-veggie trick. A child who chose the corn will defend the corn.",
        ],
      },
      {
        heading: "Rule 6: Score Exposure, Not Clean Plates",
        paragraphs: [
          "Research on childhood food acceptance is consistent: it takes many neutral exposures to a new food before acceptance. A bite refused calmly is still progress. The moment dinner becomes a negotiation, everyone loses — so don't negotiate. Serve, enjoy yours, move on.",
        ],
      },
      {
        heading: "The 80/20 That Actually Works",
        paragraphs: [
          "Families that transition successfully almost never do it overnight. They swap two dinners a week, then three, then most. Within a few months the household default has shifted and nobody staged a rebellion.",
          "If you want the done-for-you starting point — five family-tested dinners, the grocery list, and a one-page version of this exact playbook — grab the free 5-Day Family Starter Kit below.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
