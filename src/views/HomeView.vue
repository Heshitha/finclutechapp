<template>
    <section class="py-5 text-center container">
        <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Welcome {{userData.userdata.firstName}} {{userData.userdata.lastName}}</h1>
            <p class="lead text-muted">This application is for manage customer data and demonstrate the capabilities of Vue and .Net Core</p>
        </div>
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex'

export default ({
    name:"HomeView",
    setup() {
        const store = useStore();
        const userData = ref(store.state)

        return {
            userData,
            store
        }
    },
})
</script>
