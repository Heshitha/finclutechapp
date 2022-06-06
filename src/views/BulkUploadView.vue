<template>
    <h2>Bulk Upload Customer Data</h2>
    <div>
        <form @submit.prevent="submit">
        <p>Paste your JSON content here</p>
        <textarea v-model="data.jsoncontent" class="jsonparser col-12"></textarea>
        <button class="mt-2 btn btn-lg btn-primary" type="submit">Upload</button>
        </form>
    </div>
</template>
<script lang="ts">
//import { defineComponent } from '@vue/composition-api'

import router from "@/router";
import axios from "axios";
import Swal from "sweetalert2";
import { reactive } from "vue";
import { useStore } from "vuex";

export default({
    name:"BulkUploadView",
    setup() {
        const data = reactive({
            jsoncontent:''
        });

        const store = useStore();

        const submit = async ()  => {
            if(data.jsoncontent){
                axios.post('http://localhost:28319/api/BulkCustomerUpload',
                data.jsoncontent,
                {
                    headers: {
                        'Content-Type':'application/json',
                        'Authorization': 'Bearer '+ localStorage.getItem('token')
                    }
                }).then(res => {
                    console.log(res.data);
                    Swal.fire('Data uploaded successfully.');
                    router.push({name:"customers"});
                }).catch(x =>{
                    Swal.fire('Error occured while processing!');
                });
            } else {
                Swal.fire('Please enter JSON content.');
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
    .jsonparser{
        height: 500px;
    }
</style>