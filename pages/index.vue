
<template>

 <div class="flex justify-center items-center h-screen">
    <div class="relative inset-0 flex justify-center items-center ">
      <img src="~/assets/img/portfolio1.png" class="mx-auto object-contain rotate-6 w-full h-auto sm:w-1/3 md:w-1/2 lg:w-3/4 lg:h-auto" />
    </div>
    <div class="absolute top-60">
      <h1 class="font text-8xl">Jazmín Cusse</h1>
    </div>
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <h1 class="font-mono font-light bottom-0 text-9xl">PORTFOLIO</h1>
    </div>
    <div class="absolute bottom-5">
      <h1 class="font-mono text-2xl font-extralight">fullstack developer</h1>
    </div>
  </div>
  <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 mx-auto flex justify-center items-center">
 <span class="inline-block animate-bounce rounded-full text-black text-lg font-mono">Scroll down
    <svg class="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
    </svg>
 </span>
</div>

</template>
  

<script>
export default {
}
</script>

<style>
@import "../assets/fonts/fonts.css";
.rotate-6 {
 transform: rotate(-6deg);
}
h1{
 font-family: 'Arsenic', sans-serif;

}
</style>