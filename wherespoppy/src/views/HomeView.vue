<template>
     
   <video autoplay muted loop src="../../public/globe.mp4" class="background-video"></video>
     <Button class="glitch-button" @click="$router.push('/concerts')">Find Poppy </Button>
     <div class="glitch__layers">
		<div class="glitch__layer"></div>
		<div class="glitch__layer"></div>
		<div class="glitch__layer"></div>
	</div>

     

</template>

<script setup lang="ts"  >
 import { RouterLink, useRouter } from 'vue-router';
 import "@/styles/glitchImg.css"
  const router = useRouter()
</script>


<style>



.background-video {
 
  width: 90%;
  max-height: 65vh; 
 
  object-fit: cover; 
  border-radius: 8px; 
  overflow: hidden; 
    border: 2px solid #fff;
    margin: 0 auto;
 
}

.glitch-button {
  padding: 20px;
  margin: 0 auto;
  max-width: 40vh;
  min-width: 20vh;
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.3s ease;  

}

.glitch-button:hover {

  color: #000;
  border: 2px solid #000;
    animation: glitch-animation 0.75s steps(2, end) infinite;
}

@keyframes glitch-animation {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
     text-shadow: 2px 0 red;
    transform: skew(0.5deg);
  }
  25% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  50% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  75% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }


 
  20% {
    text-shadow: -2px 0 blue;
    transform: skew(-0.5deg);
  }
  40% {
    text-shadow: 2px 0 green;
    transform: skew(0.5deg);
  }
  60% {
    text-shadow: -2px 0 yellow;
    transform: skew(-0.5deg);
  }
  80% {
    text-shadow: 2px 0 purple;
    transform: skew(0.5deg);
  }
  100% {
    text-shadow: -2px 0 cyan;
    transform: skew(0deg);
  }
}

</style>