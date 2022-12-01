<template>
    <HeaderView />
    <section>
      <div class="hero-content-locate-restaurant">
        <img alt="ASIAN EXPRESS" src="../assets/img/resto-1.jpg" />
      </div>
      <div class="search-restaurant-container">
        <h2>Hitta restaurang</h2>
          <div class="search-form">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            <input v-model="searchValue" type="text" name="name" autocomplete="off" required />
            <label for="name" class="label-name">
                <span class="content-name">Ort</span>
            </label>
          </div>
        <div class="list-content">
          <ol v-if="restaurantList.length">
            <li v-for="item in restaurantList" :key="item.id">
              <div>
                <h3>{{ item.city }}</h3>
              </div>
              <div>
                <p>
                  {{ item.street }}
                  {{ item.streetNumber }}
                </p>
              </div>
              <div>
                <p>{{ item.email }}</p>
                <p>{{ item.telephone }}</p>
              </div>
              <div>
                <p>Öppet idag</p>
                <p> 
                  {{ getOpeningHour(item) }} - {{ getClosingHour(item) }}
                </p>
              </div>
            </li>    
          </ol>
          <ol v-else class="list-content">
            <li>
              <div>
                <h4><em>Inga restauranger hittades</em></h4>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
</template>
<script>
import HeaderView from './HeaderView.vue'
import axios from 'axios'
export default {
    name: 'ListRestaurants',
    components: {
        HeaderView
    },
    data() {
        return {
            restaurants: [],
            onClicked: false,
            searchValue: '',
            isSelected: false,
            selectedRestaurant: {}, 
            selectedCity: 'Välj Restaurang',
        }
    },
    methods: {
        getOpeningHour(restaurant) {
          const current = new Date();
          const day = `${current.getDay()}`
          if(day == 1)
          return restaurant.openingHour.monday
          if(day == 2)
          return restaurant.openingHour.tuesday
          if(day == 3)
          return restaurant.openingHour.wednesday
          if(day == 4)
          return restaurant.openingHour.thursday
          if(day == 5)
          return restaurant.openingHour.friday
          if(day == 6)
          return restaurant.openingHour.saturday
          if(day == 7)
          return restaurant.openingHour.sunday
        },
        getClosingHour(restaurant) {
          const current = new Date();
          const day = `${current.getDay()}`
          if(day == 1)
          return restaurant.closingHour.monday
          if(day == 2)
          return restaurant.closingHour.tuesday
          if(day == 3)
          return restaurant.closingHour.wednesday
          if(day == 4)
          return restaurant.closingHour.thursday
          if(day == 5)
          return restaurant.closingHour.friday
          if(day == 6)
          return restaurant.closingHour.saturday
          if(day == 7)
          return restaurant.closingHour.sunday
        },
        async loadData() {
          let result = await axios.get('http://localhost:3000/restaurant')
          this.restaurants = result.data
        },
    },
    computed: {
        restaurantList() {
            if(this.searchValue.trim().length > 0) {
                return this.restaurants.filter((restaurant) => restaurant.city.toLowerCase().includes(this.searchValue.trim().toLowerCase()))
            }
            return this.restaurants
        }
    },
    mounted() {
        this.loadData();
    }
}
</script>
<style>
.search-restaurant-container {
  padding: 2em 0 2em 2em;
}
.search-restaurant-container h2 {
  margin: 1em 0;
  font-size: 2rem;
}
.list-content {
  padding-top: 3em;
  height: 400px; 
  overflow-x: auto;
}
.list-content ol {
  list-style: none;
}
.list-content ol li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}
.list-content ol li p{
  font-size: 1.2rem;
}
.list-content ol li div{
  width: 220px;
}
.search-form {
  width: 400px;
  height: 50px;
  margin: 2em 0;
  position: relative;
  overflow: hidden;
}
.search-form svg {
    right: 12px;
    top: 10px;
    color: #999;
    font-size: 1.2rem;
    line-height: 52px;
    margin-top: 7px;
    position: absolute;
}
.search-form input {
    height: 100%;
    width: 100%;
    outline: none;
    font-size: 1.5rem;
    border-radius: 5px;
    padding: 0 5px 0 40px;
    border: none;
    /* border: 1px solid #b3b3b3; */
}
.search-form label{
    position: absolute;
    bottom: 0px;
    left: 0%;
    height: 100%;
    width: 100%;
    font-size: 1.8rem;
    pointer-events: none;
    border-bottom: 1px solid #222;
}
.search-form label::after{
    content:'';
    position: absolute;
    left: 0px;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid rgb(236, 164, 20);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
}
.content-name{
    position: absolute;
    bottom: 5px;
    left: 0px;
    transition: all 0.3s ease;
}
.search-form input:focus + .label-name .content-name, 
.search-form input:valid + .label-name .content-name{
    transform: translateY(-150%);
    font-size: 14px;
    color: rgb(236, 164, 20);
}
.search-form input:focus + .label-name::after, 
.search-form input:valid + .label-name::after{
    transform: translateX(0%);
}
</style>