<!-- <template>
  <div class="grid grid-cols-1 sm:grid gap-5">
    <aside class="lg:w-80 md:w-64 sm:w-32" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 bg-blue-500 rounded">
        <ul class="space-y-2">
          <li>
            <a
              href="/news"
              class="flex items-center p-1 text-base font-normal border-2 border-transparent text-white rounded-lg dark:text-white hover:border-white hover:border-2"
            >
              <svg
                class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="ml-3 md:text-sm lg:text-lg sm:text-xs">News</span>
            </a>
          </li>
          <li>
            <a
              href="/syllabus"
              class="flex items-center p-1 text-base font-normal border-2 border-transparent text-white rounded-lg dark:text-white hover:border-white hover:border-2"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span
                class="flex-1 ml-3 whitespace-nowrap md:text-sm lg:text-lg sm:text-xs"
                >Syllabus</span
              >
              <span
                class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-blue-600 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
                >New
              </span>
            </a>
          </li>
          <li>
            <a
              href="/notices"
              class="flex items-center p-1 text-base font-normal border-2 border-transparent text-white rounded-lg dark:text-white hover:border-white hover:border-2"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                ></path>
                <path
                  d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                ></path>
              </svg>
              <span
                class="flex-1 ml-3 whitespace-nowrap md:text-sm lg:text-lg sm:text-xs"
                >Notices</span
              >
              <span
                class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
                >6</span
              >
            </a>
          </li>
          <li>
            <a
              href="/press-cuttings"
              class="flex items-center p-1 pr-1 overflow-hidden text-base font-normal border-2 border-transparent text-white rounded-lg dark:text-white hover:border-white hover:border-2"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="flex-1 ml-3 whitespace-nowrap md:text-sm lg:text-lg sm:text-xs"
                >Press Cuttings</span
              >
            </a>
          </li>
          <li>
            <a
              href="/testimonials"
              class="flex items-center p-1 pr-3 text-base font-normal border-2 border-transparent text-white rounded-lg dark:text-white hover:border-white hover:border-2"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="flex-1 ml-3 whitespace-nowrap md:text-sm lg:text-lg sm:text-xs"
                >Testimonials</span
              >
            </a>
          </li>
          <li>
            <a
              href="/events"
              class="flex items-center p-2 text-base font-normal border-2 border-transparent text-white rounded-lg dark:text-white hover:border-white hover:border-2"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="flex-1 ml-3 whitespace-nowrap md:text-sm lg:text-lg sm:text-xs"
                >Events</span
              >
            </a>
          </li>
          <li>
            <a
              href="/gallery"
              class="flex items-center p-1 pr-3 text-base font-normal border-2 border-transparent text-white rounded-lg dark:text-white hover:border-white hover:border-2"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="flex-1 ml-3 whitespace-nowrap md:text-sm lg:text-lg sm:text-xs"
                >Gallery</span
              >
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <aside class="lg:w-80 md:w-64 sm:w-52" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 rounded bg-blue-500">
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal border-2 border-transparent text-white rounded-lg dark:text-white hover:border-white hover:border-2"
            >
              <span class="ml-3 lg:text-lg md:text-md sm:text-small"
                >TRANSPLANT ACT 2055</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal border-2 border-transparent text-white rounded-lg dark:text-white hover:border-white hover:border-2"
            >
              <span
                class="flex-1 ml-3 whitespace-nowrap lg:text-lg md:text-md sm:text-small"
                >TRANSPLANT ACT 2072</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal border-2 border-transparent text-white rounded-lg dark:text-white hover:border-white hover:border-2"
            >
              <span
                class="flex-1 ml-3 whitespace-nowrap lg:text-lg md:text-md sm:text-small overflow-hidden"
                >TRANSPLANT LEGISLATION 2073</span
              >
            </a>
          </li>
        </ul>
        <div
          id="dropdown-cta"
          class="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900"
          role="alert"
        >
          <div class="flex items-center mb-3">
            <span
              class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900"
              >Info</span
            >
            <button
              type="button"
              class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
              data-collapse-toggle="dropdown-cta"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
            Shahid Dharmabhakta National transplant Center- SDNTC (Human Organ
            Transplant Center- HOTC) is situated at Dudhpati-17, Bhaktapur, a
            beautiful and a serene place at the distance of 12 kilometers from
            Kathmandu. It was established in 2012 by the Ministry of Health to
            strengthen and expand organ transplantation services in the country.
          </p>
          <a
            class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            href="#"
            >Turn new navigation off</a
          >
        </div>
      </div>
    </aside>

    <aside class="lg:w-80 md:w-64 sm:w-52" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 rounded bg-red-600">
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white"
            >
              <span class="ml-3">Download Organ Donation Form</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <aside class="lg:w-80 md:w-64 sm:w-52" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 rounded bg-blue-500">
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal border-2 border-transparent text-blue-500 rounded-lg dark:text-white hover:border-white hover:border-2 bg-white"
            >
              <span class="ml-3">Latest Notices</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal border-2 border-transparent text-white rounded-lg dark:text-white hover:border-white hover:border-2"
            >
              <span class="ml-3">Interview Result Published</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal border-2 border-transparent text-white rounded-lg dark:text-white hover:border-white hover:border-2"
            >
              <span class="ml-3"
                >Publication of Service report, SDNTC 2078-79</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal border-2 border-transparent text-white rounded-lg dark:text-white hover:border-white hover:border-2"
            >
              <span class="ml-3">Result Published</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {}
</script>

<style></style> -->
<template>
  <div class="flex flex-col gap-5">
    <aside class="w-64" aria-label="Sidebar">
      <div
        class="overflow-y-auto py-4 px-3 bg-blue-500 rounded dark:bg-gray-800"
      >
        <a href="https://flowbite.com" class="flex items-center pl-2.5 mb-5">
          <img
            src="https://hotc.org.np/static/img/coa.png"
            class="h-1 w-8 mr-3 sm:h-7"
            alt="Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap text-white"
            >HOTC</span
          >
        </a>
        <ul class="space-y-2">
          <li>
            <a
              href="/news"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <svg
                class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="ml-3 text-white">News</span>
            </a>
          </li>
          <li>
            <a
              href="/syllabus"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap text-white"
                >Syllabus</span
              >
              <span
                class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-blue-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
                >New</span
              >
            </a>
          </li>
          <li>
            <a
              href="/notices"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                ></path>
                <path
                  d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap text-white"
                >Notices</span
              >
              <span
                class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
                >3</span
              >
            </a>
          </li>
          <li>
            <a
              href="/press-cuttings"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap text-white"
                >Press Cuttings</span
              >
            </a>
          </li>
          <li>
            <a
              href="/testimonials"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap text-white"
                >Testimonials</span
              >
            </a>
          </li>
          <li>
            <a
              href="/events"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap text-white"
                >Events</span
              >
            </a>
          </li>
          <li>
            <a
              href="/gallery"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <svg
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap text-white"
                >Gallery</span
              >
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <aside class="w-64 ov" aria-label="Sidebar">
      <div
        class="overflow-y-auto py-4 px-3 bg-blue-500 rounded dark:bg-gray-800"
      >
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <span
                class="flex-1 ml-3 whitespace-nowrap text-white erflow-hidden"
                >TRANSPLANT ACT 2055</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <span
                class="flex-1 ml-3 whitespace-nowrap text-white overflow-hidden"
                >TRANSPLANT ACT 2072</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700 overflow-hidden"
            >
              <span class="flex-1 ml-3 whitespace-nowrap text-white"
                >TRANSPLANT LEGISLATION 2073</span
              >
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <aside class="w-64" aria-label="Sidebar">
      <div
        class="overflow-y-auto py-4 px-3 bg-red-600 rounded dark:bg-gray-800"
      >
        <ul>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <span
                class="flex-1 ml-3 whitespace-nowrap text-white overflow-hidden"
              >
                Download Organ Donation Form</span
              >
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <aside class="w-64" aria-label="Sidebar">
      <div
        class="overflow-y-auto py-4 px-3 bg-blue-500 rounded dark:bg-gray-800"
      >
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <span class="flex-1 ml-3 whitespace-nowrap text-white"
                >Legal Notices</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <span class="flex-1 ml-3 whitespace-nowrap text-white"
                >Interview Result Published</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <span
                class="flex-1 ml-3 whitespace-nowrap text-white overflow-hidden"
                >Publication of Service report, SDNTC 2078-79</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:border-2 dark:hover:bg-gray-700"
            >
              <span class="flex-1 ml-3 whitespace-nowrap text-white"
                >Result Published</span
              >
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
