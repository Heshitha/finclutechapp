<template>
    <h2>Customers</h2>
    <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Last Name</th>
                <th scope="col">First Name</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Gender</th>
                <th scope="col">Student Status</th>
                <th scope="col">Major</th>
                <th scope="col">Country</th>
                <th scope="col">Age</th>
                <th scope="col">SAT</th>
                <th scope="col">Grade</th>
                <th scope="col">Height</th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="d in data.customerData.data" :key="d.id">
              <td>{{d.id}}</td>
              <td>{{d.lastName}}</td>
                <td>{{d.firstName}}</td>
                <td>{{d.city}}</td>
                <td>{{d.state}}</td>
                <td>{{d.gender}}</td>
                <td>{{d.studentStatus}}</td>
                <td>{{d.major}}</td>
                <td>{{d.country}}</td>
                <td>{{d.age}}</td>
                <td>{{d.sat}}</td>
                <td>{{d.grade}}</td>
                <td>{{d.height}}</td>
                <td><button @click="viewCustomer(d.id)" class="btn btn-primary btn-sm">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
</template>
<script lang="ts">
//import { defineComponent } from '@vue/composition-api'

import router from "@/router";
import axios from "axios";
import Swal from "sweetalert2";
import { onMounted, reactive } from "vue";
import { useStore } from "vuex";

export default({
    name:"CustomerView",
    setup() {
        const data = reactive({
            username:'',
            password:'',
            customerData: []
        });

        const store = useStore();

        const loadData = async ()  => {

            axios.get('http://localhost:28319/api/customer',
                {
                    headers: {
                        'Content-Type':'application/json',
                        'Authorization': 'Bearer '+ localStorage.getItem('token')
                    }
                }).then(res => {
                    console.log(res.data);
                    data.customerData = res.data
                }).catch(x =>{
                    Swal.fire('There was an error with connectivity. Please retry');
                });
        };

        const viewCustomer = (cid: any) => {
            router.push({name:"customerView", params:{id:cid}});
        }

        onMounted(loadData);

        return {
            data,
            loadData,
            store,
            viewCustomer
        }
    },
})
</script>
