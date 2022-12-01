<template>
    <HeaderView />
    <section>
        <div class="hero-content-locate-restaurant">
            <img alt="ASIAN EXPRESS" src="../assets/img/sushi4.jpg" />
        </div>
        <div class="week-meny-content">
            <div class="week-meny-info">
                <h1>Dagens lunch</h1>
                <p>{{ this.meny.price }}:-</p>
                <p>{{ this.meny.extra }}</p>
            </div>
            <div class="week-meny-list">
                <ul>
                    <li>
                        <h4>Måndag</h4>
                        <h2>{{ this.meny.day.monday.dish }}</h2>
                        <p>{{ this.meny.day.monday.dishDescription }}</p>
                    </li>
                    <li>
                        <h4>Tisdag</h4>
                        <h2>{{ this.meny.day.tuesday.dish }}</h2>
                        <p>{{ this.meny.day.tuesday.dishDescription }}</p>
                    </li>
                    <li>
                        <h4>Onsdag</h4>
                        <h2>{{ this.meny.day.wednesday.dish }}</h2>
                        <p>{{ this.meny.day.wednesday.dishDescription }}</p>
                    </li>
                    <li>
                        <h4>Torsdag</h4>
                        <h2>{{ this.meny.day.thursday.dish }}</h2>
                        <p>{{ this.meny.day.thursday.dishDescription }}</p>
                    </li>
                    <li>
                        <h4>Fredag</h4>
                        <h2>{{ this.meny.day.friday.dish }}</h2>
                        <p>{{ this.meny.day.friday.dishDescription }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
import HeaderView from './HeaderView.vue'
import axios from 'axios'
export default {
    name: 'MenyView',
    components: {
        HeaderView,
    },
    data() {
        return {
            meny: {
                day: {
                monday: {
                    dish: '',
                    dishDescription: ''
                },
                tuesday: {
                    dish: '',
                    dishDescription: ''
                },
                wednesday: {
                    dish: '',
                    dishDescription: ''
                },
                thursday: {
                    dish: '',
                    dishDescription: ''
                },
                friday: {
                    dish: '',
                    dishDescription: ''
                },
            },
            price: '',
            extra: '',
            }
        }
    },
    methods: {
        async loadData() {
            let result = await axios.get(`http://localhost:3000/meny/1`)
            this.meny = result.data
        }
    },
    mounted() {
        this.loadData()
    }
}
</script>
<style>
.week-meny-content {
    margin: 0 auto;
    padding: 2em 4em;
    display: flex;
    flex-direction: column;
    grid-gap: 4rem;
    flex-direction: row-reverse;
}
.week-meny-info {
    padding: 0 2em;
    width: 100%;
    width: 500px;
    margin: 0 auto;
    text-align: center;
}
.week-meny-info h1{
    font-size: 4rem;
    padding-top: 1em;
}
.week-meny-info p {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1em;
}
.week-meny-list {
    max-width: 100%;
    width: 600px;
    height: auto;
    line-height: 1.5;
}
.week-meny-list ul {
    padding-top: 1em;
    padding-bottom: 2em;
    background-color: #fcfaf4;
    box-shadow: 0 10px 10px rgb(0 0 0 / 70%);
}
.week-meny-list ul li {
    color: #222;
    padding: 1em 2em;
    list-style: none;
}
.week-meny-list ul li h2{
    font-size: 1.6rem;
    color: rgb(0, 128, 58);
}
.week-meny-list ul li p{
    font-size: 1.2rem;
    font-weight: 600;
}
</style>