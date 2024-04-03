/** @type {import('tailwindcss').Config} */
export const purge = ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue'];
export const darkMode = false;
export const theme = {
  extend: {
    extend: {
      backgroundColor: {
        'custom-gray': '#fafafa',
      },
    },
 },
};
export const variants = {
  extend: {},
};
export const plugins = [];
