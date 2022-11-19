<template>
    <Header />
    <div class="hero-content">
        <img alt="ASIAN EXPRESS" src="../assets/img/header4.jpg" />
        <h1 class="welcome-message align-center">
            <span class="welcome-message__bold">Välkommen till </span>
            <span class="welcome-message__thin">ASIAN EXPRESS</span>
        </h1>
        <div class="actions">
            <button class="button button-gold">Boka bord</button>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    // data() {
    //     return {

    //     }
    // },
    components: {
        Header
    },
    // methods: {

    // }
}
</script>
<style>
.hero-content, .hero-content-locate-restaurant img {
    position: relative;
    max-height: 100vh;
    overflow: hidden;
    width: 100%;
}
.hero-content img, .hero-content-locate-restaurant img {
    width: 100%;
}
.hero-content img {
    opacity: 0.6;
}
.welcome-message {
    width: 100%;
    position: absolute;
    top: 25vh;
    margin-bottom: 0;
    padding: 1rem 0 calc(1rem + 20px);
    color: rgb(255 137 0);
}
.welcome-message__bold,
.welcome-message__thin {
    display: block;
    text-transform: uppercase;
    line-height: 1.3;
    margin: 0;
    text-align: center;
}
.welcome-message .welcome-message__bold {
    font-size: calc(27.48148px + 2.03704vw);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 7px;
}
.welcome-message__thin {
    margin-bottom: 7px;
    font-weight: 400;
}
.hero-content .actions {
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 10em;
}
.hero-content .actions .button {
    width: 220px;
    border-radius: 8px;
    line-height: 0.8;
    padding: 0 1rem;
    min-height: 47px;
    font-weight: 600;
    text-transform: uppercase;
}
</style>