<template>
  <Layout>
    <section
      class="max-w-2xl mx-auto px-10 mx-auto py-16 mb-16 rounded-lg container relative"
    >
      <div class="overflow-x-hidden">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <div class="flex-1 ml-6">
            <p class="mb-6">
              Infravision is a powerful new Discord suite that is designed to
              solve common problems that appear when Discord communities grow
              too large; Finding people to play with, discovering new games, or
              even seeing what (and when) people are playing becomes difficult.
              Infravision is able to solve this by providing communities with a
              real-time suite of capabilities to give them insights into what is
              going on around them.
            </p>
            <p class="mb-6">
              Infravision is also a great way to engage a community by rewarding
              players for playing games that your community is playing. Players
              earn experience and levels by simply playing designated games. The
              competitive leaderboard system goes even further by encouraging
              healthy competition within your community.
            </p>
            <p class="">
              Currently, Infravision is in a <b>closed</b> alpha-stage. As the
              platform evolves, we'll expand to selected communities to help us
              further test and evolve our Discord community toolset.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="max-w-2xl mx-auto px-10 mx-auto py-16 mb-16 rounded-lg container relative"
    >
      <div class="overflow-x-hidden">
        <h2 class="mb-6" id="projects">
          Features
        </h2>
        <ul class="">
          <li class="checkmark mb-6">
            <div class="uppercase font-bold">
              <span
                class="inline-block text-xl py-1 px-2 uppercase rounded-full infravision-red"
              >
                <i class="fas fa-gamepad-alt"></i
              ></span>
              <span class="text-xl">Trend Detection</span>
            </div>
            <div class="text-sm">
              Uncover new gaming trends as they emerge, within your Discord
              community.
            </div>
          </li>
          <li class="checkmark mb-6">
            <div class="uppercase font-bold">
              <span
                class="inline-block text-xl py-1 px-2 uppercase rounded-full infravision-red"
                ><i class="fas fa-dice-d20"></i
              ></span>
              <span class="text-xl">Adventure Mode</span>
            </div>
            <div class="text-sm">
              Engage your community by letting players earn experience and
              levels playing specified games, selected by you.
            </div>
          </li>
          <li class="checkmark mb-6">
            <div class="uppercase font-bold">
              <span
                class="inline-block text-xl py-1 px-2 uppercase rounded-full infravision-red"
                ><i class="fas fa-treasure-chest"></i
              ></span>
              <span class="text-xl">Leaderboards</span>
            </div>
            <div class="text-sm">
              Reward your most active players with recognition via monthly and
              all-time leaderboards
            </div>
          </li>
          <li class="checkmark mb-6">
            <div class="uppercase font-bold">
              <span
                class="inline-block text-xl py-1 px-2 uppercase rounded-full infravision-red"
                ><i class="fas fa-analytics"></i
              ></span>
              <span class="text-xl">Data Visualizations</span>
            </div>
            <div class="text-sm">
              Explore your guilds activity with cutting edge data visualizations
              including peak play-times to help you plan events for your
              community.
            </div>
          </li>
          <li class="checkmark mb-6">
            <div class="uppercase font-bold">
              <span
                class="inline-block text-xl py-1 px-2 uppercase rounded-full infravision-red"
                ><i class="fab fa-twitch"></i
              ></span>
              <span class="text-xl">Streamer Discovery</span>
            </div>
            <div class="text-sm">
              Discover new Twitch streamers in your Discord, in games relevant
              to your community
            </div>
          </li>
        </ul>
      </div>
    </section>

    <div class="">
      <div class="container rounded-lg px-10 mx-auto py-16 pb-8 text-center">
        <h2 class="mb-8">Signup for Updates</h2>
        <div class="w-4/5 mx-auto mb-8">
          <p class="mb-8">
            Coming Soon
          </p>
          <form action="#">
            <div class="flex flex-col sm:flex-row">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                class="flex-1 rounded sm:rounded-r-none px-4 py-4 leading-normal shadow outline-none z-10"
                required
              />
              <button
                data-element="submit"
                class="flex-2 w-40 uppercase bg-green-700 rounded sm:rounded-l-none py-3 px-8 tracking-wide shadow focus:outline-none hover:bg-green-800 focus:bg-green-800 z-10 w-full sm:w-auto mt-4 sm:mt-0"
                disabled
              >
                <span>Subscribe</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>
