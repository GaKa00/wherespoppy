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
    
    </main>

    <!-- Footer -->
    <footer>
      <p>&copy; 2024 Poppy Concert Tracker</p>
    </footer>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  flex: 1;
  padding: 2rem;
}

footer {
  text-align: center;
  padding: 1rem;
  border-top: 1px solid #fff;
  background: #111;
}

.background-video {
 
  width: 90%;
  max-height: 60vh; 
 
  object-fit: cover; 
  border-radius: 8px; 
  overflow: hidden; 
    border: 2px solid #fff;
 
}



</style>
