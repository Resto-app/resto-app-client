<template>
    <header>
        <nav class="navbar">
                <router-link to="/" class="logo">ASIAN EXPRESS</router-link>
            <ul class="nav-links">
                <li class="nav-item"><router-link to="/meny">Meny</router-link></li>
                <li class="nav-item"><router-link to="/restaurants">Restauranger</router-link></li>
                <li class="nav-item"><router-link to="/">Om oss</router-link></li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'HeaderView'
}
</script>
<style>
nav {
  width: 100%;
  background-color: #fff;
  padding-left: 30px;
  padding-right: 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    color: rgb(255 137 0);
    font-size: 2rem;
    font-weight: 600;
    text-shadow: 2px 2px 5px rgb(255, 140, 0);
    display: inline-block;
    text-decoration: none;
}

.nav-links {
    display: flex;
    list-style: none;
}
.nav-item {
    font-size: 1.4rem;
    font-weight: 600;
}
.nav-item a {
    color: #222;
    display: inline-block;
    padding: 20px 30px;
    text-decoration: none;
}
.nav-item:hover {
    cursor: pointer;
}
</style>