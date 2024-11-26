

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

interface TicketmasterEvent {

  name: string;
  date: string;
  venue: string;
  url: string;

 
}


// Declare reactive variables using Composition API
const country = ref (""); // Reactive variable to hold the selected country ISO code

const concerts = ref<TicketmasterEvent[]>([]);
const loading = ref(false);

// Reactive countries object
const countries = {
  AD: "Andorra",
  AE: "United Arab Emirates",
  AI: "Anguilla",
  AN: "Netherlands Antilles",
  AR: "Argentina",
  AT: "Austria",
  AU: "Australia",
  AZ: "Azerbaijan",
  BB: "Barbados",
  BE: "Belgium",
  BH: "Bahrain",
  BG: "Bulgaria",
  BM: "Bermuda",
  BR: "Brazil",
  BS: "Bahamas",
  CA: "Canada",
  CH: "Switzerland",
  CL: "Chile",
  CN: "China",
  CO: "Colombia",
  CR: "Costa Rica",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DE: "Germany",
  DK: "Denmark",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EE: "Estonia",
  ES: "Spain",
  FI: "Finland",
  FO: "Faroe Islands",
  FR: "France",
  GB: "Great Britain",
  GE: "Georgia",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  HK: "Hong Kong",
  HR: "Croatia",
  HU: "Hungary",
  IE: "Ireland",
  IL: "Israel",
  IN: "India",
  IS: "Iceland",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  KR: "Korea, Republic of",
  LB: "Lebanon",
  LC: "Saint Lucia",
  LT: "Lithuania",
  LU: "Luxembourg",
  LV: "Latvia",
  MA: "Morocco",
  MC: "Monaco",
  ME: "Montenegro",
  MT: "Malta",
  MX: "Mexico",
  MY: "Malaysia",
  ND: "Northern Ireland",
  NL: "Netherlands",
  NO: "Norway",
  NZ: "New Zealand",
  PE: "Peru",
  PL: "Poland",
  PT: "Portugal",
  RO: "Romania",
  RS: "Serbia",
  RU: "Russian Federation",
  SA: "Saudi Arabia",
  SE: "Sweden",
  SG: "Singapore",
  SI: "Slovenia",
  SK: "Slovakia",
  TH: "Thailand",
  TR: "Turkey",
  TT: "Trinidad and Tobago",
  TW: "Taiwan",
  UA: "Ukraine",
  UY: "Uruguay",
  US: "United States Of America",
  VE: "Venezuela",
  ZA: "South Africa",
};

watch(country, (newCountry) => {
 if (newCountry) {
    fetchConcerts(newCountry);
  }
})




        async function fetchConcerts(country: string) {
  const apikey = "MsB8kG8TbXG5nxxfCpIap0DFuyUzwLio";
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?attractionId=K8vZ917fae0&countryCode=${country}&apikey=${apikey}`;

  loading.value = true;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Invalid Response");
    }

    const data = await response.json();
    console.log(data);


    concerts.value = data._embedded?.events.map((event: any) => ({
      name: event.name || "",
      date: event.dates?.start?.localDate || "",
      venue: event._embedded?.venues?.[0]?.name || "",
      url: event.url || "#",
    })) || [];

    return concerts.value; 
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false;
  }
}

  function onCountryChange() {
    console.log("Selected Country Code:", country.value);
  }
// Function to handle country selection changes
</script>

    <template>
      <div class="search-view">
        <header>
          <h1>Poppy Concert Tracker</h1>
       <div>
        <label for="country.select">Select a country:</label>
        <select id="country.select" v-model="country" @change=onCountryChange>
          <option value="" disabled>Select a country</option>
          <option v-for= "(name, code) in countries" :value="code"> {{ name }}
            </option>
          </select>
    
       </div>
        </header>

        <div v-if="loading">Loading concerts...</div>
    
        <main v-if="country">
          <section v-if="concerts.length > 0" class="concert-list">


        
   <div v-for="concert in concerts" :key="concert.date" class="concert-card">
  <h2>{{ concert.name }}</h2>
  <p v-if="concert.date">Date: {{ concert.date }}</p>
  <p v-if="concert.venue">Venue: {{ concert.venue }}</p>
  <a :href="concert.url" target="_blank" class="buy-tickets">Buy Tickets</a>
</div>

  
  
      </section> 
    
       <section v-else  class="no-concert">
         <div>
           <h2>You did not find poppy.</h2>
          </div>

       </section>

       
        
        
      </main>
     
    </div>
    </template>




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

