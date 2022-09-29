import { Button } from "flowbite-react";

export default function Custom404() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-white">404</h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something&lsquo;s missing.</p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can&lsquo;t find that page. You&lsquo;ll find lots to explore on the home page. </p>
        </div>
      </div>
    </section>
  )
}