<template>
    <div class="login-page">
        <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
            <input v-model="data.username" type="text" class="form-control" placeholder="username">
            <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
            <input v-model="data.password" type="password" class="form-control" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
        
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </div>
</template>
<script lang="ts">
import { reactive } from 'vue'
import axios from 'axios';
import Swal from 'sweetalert2';
import { RouterLink } from 'vue-router';
import router from '@/router';
import { useStore } from 'vuex';

export default({
    name: "LoginView",
    setup() {
        const data = reactive({
            username:'',
            password:''
        });

        const store = useStore();

        const submit = async ()  => {
            if(data.username && data.password){
                axios.post('http://localhost:28319/api/login',
                JSON.stringify(data),
                {
                    headers: {
                        'Content-Type':'application/json'
                    }
                }).then(res => {
                    console.log(res.data);
                    localStorage.setItem('token', res.data.token);
                    store.commit("setUserData",res.data);
                    router.push({name:"home"});
                }).catch(x =>{
                    Swal.fire('Username or password is invalid!');
                });
            } else {
                Swal.fire('Please enter username and password.');
            }
        };

        return {
            data,
            submit,
            store
        }
    },
})
</script>
<style scoped>
    .login-page{
        margin: 0 auto;
        max-width: 330px;
    }
</style>