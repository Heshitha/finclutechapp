<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
        <router-link class="navbar-brand" to="/">FinCluTech App</router-link>
        <div>
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item" v-if="!userData.userdata.firstName">
                <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item" v-if="((userData.userdata.userRole == 'Administrator') || (userData.userdata.userRole == 'BasicUser'))">
                <router-link class="nav-link" to="/customers">Customers</router-link>
            </li>
            <li class="nav-item" v-if="(userData.userdata.userRole == 'Administrator')">
                <router-link class="nav-link" to="/bulkupload">Bulk Upload Customer Data</router-link>
            </li>
            <!-- <li class="nav-item" v-if="(userData.userdata.userRole == 'Administrator')">
                <router-link class="nav-link" to="/users">Users</router-link>
            </li> -->
            </ul>
        </div>
        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex'

export default ({
    name: "NaviG",
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
