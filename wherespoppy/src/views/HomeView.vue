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
</style>