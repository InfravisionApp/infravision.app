<template>
  <div
    class="content-wrapper background-gradient leading-normal flex flex-col min-h-screen"
  >
    <header class="mb-12">
      <nav class="mx-auto flex flex-wrap justify-between items-center py-8">
        <div class="mx-auto">
          <img src="/images/infravision-logo.png" class="" />
        </div>
      </nav>
    </header>
    <div class="flex-grow">
      <nuxt />
    </div>
    <footer class="infravision-content">
      <div
        class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8"
      >
        <div class="mb-8 lg:mb-0">
          <div>
            Copyright © {{ new Date().getFullYear() }} <b>Infravision</b>
          </div>
        </div>
        <ul class="flex items-center">
          <li class="mr-8">
            <a
              href="https://github.com/infravision"
              target="_blank"
              class="text-white hover:text-gray-400"
            >
              Github
            </a>
          </li>

          <li class="mr-8">
            <a
              href="https://twitter.com/infravision"
              target="_blank"
              class="text-white hover:text-gray-400"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
