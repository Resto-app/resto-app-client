<template>
    <Header />
    <div class="content">
        <h1>Detta är bokningssidan</h1>
    </div>
</template>
<script>
import Header from './Header.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Booking', 
    components: {
        Header
    }
}
</script>