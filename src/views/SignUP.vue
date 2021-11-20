<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <div class="container-fluid">
    <form class="p-5" @submit.prevent="onSubmit()">
      <h4 class="text-center">{{ $options.name }}</h4>

      <div class="row">
        <div class="col-md-4 col-sm-12 offset-md-4 border border-2 rounded p-4">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <div class="form-text">
            or <router-link to="/" class="fw-bold"> Login? </router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  methods: {
    onSubmit() {
      this.$router.push({ name: 'UserDashboard' });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
