<template>
    <div>
        <div class="customerDetailHolder">
        <h4 class="mb-3">Customer Details {{data.customerData.id}}</h4>
        <form class="needs-validation">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" v-model="data.customerData.firstName" class="form-control" id="firstName">
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" v-model="data.customerData.lastName" class="form-control" id="lastName" >
            </div>

            <div class="col-sm-6">
              <label for="email" class="form-label">City</label>
              <input type="text" v-model="data.customerData.city" class="form-control">
            </div>

            <div class="col-sm-6">
              <label for="address" class="form-label">State</label>
              <input type="text" v-model="data.customerData.state" class="form-control" >
            </div>

            <div class="col-sm-6">
              <label for="address" class="form-label">Gender</label>
              <input type="text" v-model="data.customerData.gender" class="form-control"  >
            </div>

            <div class="col-sm-6">
              <label for="address" class="form-label">Student Status</label>
              <input type="text" v-model="data.customerData.studentStatus" class="form-control"  >
            </div>

            <div class="col-sm-6">
              <label for="address" class="form-label">Major</label>
              <input type="text" v-model="data.customerData.major" class="form-control"  >
            </div>

            <div class="col-sm-6">
              <label for="address" class="form-label">Country</label>
              <input type="text" v-model="data.customerData.country" class="form-control"  >
            </div>

            <div class="col-sm-6">
              <label for="address" class="form-label">Age</label>
              <input type="text" v-model="data.customerData.age" class="form-control"  >
            </div>

            <div class="col-sm-6">
              <label for="address" class="form-label">SAT</label>
              <input type="text" v-model="data.customerData.sat" class="form-control"  >
            </div>

            <div class="col-sm-6">
              <label for="address" class="form-label">Grade</label>
              <input type="text" v-model="data.customerData.grade" class="form-control"  >
            </div>

            <div class="col-sm-6">
              <label for="address" class="form-label">Height</label>
              <input type="text" v-model="data.customerData.height" class="form-control"  >
            </div>
            
          </div>
          <hr class="my-4">

          <button v-if="(userData.userdata.userRole == 'Administrator')" class="btn btn-primary btn-lg" type="button" @click="saveCustomer">Save Changes</button>
          <button v-if="(userData.userdata.userRole == 'Administrator')" class="m-2 btn btn-danger btn-lg" type="button" @click="removeCustomer">Remove</button>
        </form>
      </div>    
    </div>

</template>
<script lang="ts">
//import { defineComponent } from '@vue/composition-api'

import router from "@/router";
import axios from "axios";
import Swal from "sweetalert2";
import { reactive, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router';


export default({
    name:"CustomerSelectView",
    setup() {
        const data = reactive({
            username:'',
            password:'',
            customerData: {}
        });

        const store = useStore();
        const route = useRoute();
        const userData = ref(store.state)

        const loadData = async ()  => {

            axios.get('http://localhost:28319/api/customer/'+ route.params.id,
                {
                    headers: {
                        'Content-Type':'application/json',
                        'Authorization': 'Bearer '+ localStorage.getItem('token')
                    }
                }).then(res => {
                    console.log(res.data);
                    data.customerData = res.data.data
                }).catch(x =>{
                    Swal.fire('There was an error with connectivity. Please retry');
                });
        };

        onMounted(loadData);

        const removeCustomer = async () => {
            axios.delete('http://localhost:28319/api/customer/'+ route.params.id,
                {
                    headers: {
                        'Content-Type':'application/json',
                        'Authorization': 'Bearer '+ localStorage.getItem('token')
                    }
                }).then(res => {
                    console.log(res.data);
                    Swal.fire('Customer Removed Successfully');
                    router.push({name:"customers"});
                }).catch(x =>{
                    Swal.fire('There was an error with connectivity. Please retry');
                });
        }

        const saveCustomer = async () => {
            axios.post('http://localhost:28319/api/customer/',
                JSON.stringify(data.customerData),
                {
                    headers: {
                        'Content-Type':'application/json',
                        'Authorization': 'Bearer '+ localStorage.getItem('token')
                    }
                }).then(res => {
                    console.log(res.data);
                    Swal.fire('Customer Saved Successfully');
                    router.push({name:"customers"});
                }).catch(x =>{
                    Swal.fire('There was an error with connectivity. Please retry');
                });
        }

        return {
            data,
            loadData,
            store,
            userData,
            removeCustomer,
            saveCustomer
        }
    },
})
</script>

<style scoped>
    .customerDetailHolder{
        width:700px;
        margin: 0 auto;
    }
</style>
