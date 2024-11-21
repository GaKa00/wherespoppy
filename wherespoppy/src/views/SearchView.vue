<template>
  <div class="search-view">
    <header>
      <h1>Poppy Concert Tracker</h1>
      <input 
        type="text" 
        v-model="location" 
        @input="fetchConcerts" 
        placeholder="Enter your location"
        aria-label="Search by location"
      />
    </header>

    
    <!-- <section v-if="concerts.length > 0" class="concert-list">
      <div 
      v-for="concert in concerts" 
      :key="concert.id" 
      class="concert-card"
      
      >
      <h2>{{ concert.date }}</h2>
      <p>{{ concert.venue }}</p>
      <p>{{ concert.city }}</p>
      <a :href="concert.ticketLink" target="_blank" rel="noopener" class="buy-tickets">
        Buy Tickets
      </a>
    </div>
  </section> -->

  <!-- <section v-else  class="no-concert">
    <div>
<h2>You did not find poppy.</h2>
    </div>

  
  </section> -->
</div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      location: '',
      concerts: [],
    };
  },
  methods: {
    async fetchConcerts() {
      // Example API call
      const response = await fetch(
        `https://api.example.com/concerts?location=${this.location}`
      );
      this.concerts = await response.json();
    },
  },
};
</script>

<style scoped>
.home-view {
  font-family: 'Arial', sans-serif;
  color: #fff;
  background: #000;
  padding: 1rem;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

header h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

header input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #fff;
  border-radius: 4px;
  background: transparent;
  color: #fff;
}

.concert-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.concert-card {
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background: #111;
  transition: transform 0.3s ease, background 0.3s ease;
}

.concert-card:hover {
  transform: scale(1.05);
  background: #222;
}

.buy-tickets {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  background: transparent;
  transition: background 0.3s ease;
}

.buy-tickets:hover {
  background: #fff;
  color: #000;
}
</style>

