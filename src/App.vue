<template>

  <NaviG/>

  <main class="form-signin w-100" style="margin-top:56px">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import NaviG from "@/components/Navi.vue";


export default({
  components:{NaviG}
  // setup() {
    
  // },
})
</script>


<style>

.form-signin {
  
  padding: 15px;
  margin:56px auto;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
