<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';

</script>

<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar">
     <h1>Where's Poppy</h1>
    </nav>

    <!-- Main Content -->
    <main>
      

        <video autoplay muted loop src="../public/globe.mp4" class="background-video"></video>
     <RouterLink class="glitch-button" to="/concerts" >Find Poppy </RouterLink>
     <!-- at click, sen d to concerts page, at hover make it glitch -->
    </main>

    <!-- Footer -->
    <footer>
      <p>&copy; 2024 Poppy Concert Tracker</p>
    </footer>
  </div>
</template>

<style >
#app {
  font-family: 'Arial', sans-serif;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the container takes up at least the full viewport height */
  
}

.navbar {
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid #fff;
  background: #111;
}

.nav-link {
  margin: 0 1rem;
  text-decoration: none;
  color: #fff;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ccc;
}


main {
  display: flex;
  padding: 2rem;
  flex-direction: column;
  gap: 4rem;
  flex: 1; /* Ensures the main content takes up available space */
  justify-content: center;
}

footer {
  text-align: center;
  padding: 1rem;
  border-top: 1px solid #fff;
  background: #111;
  position: relative; 
 
}


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
