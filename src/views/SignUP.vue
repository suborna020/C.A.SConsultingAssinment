<template>
  <div class="container-fluid">
    <form class="p-5" @submit="onSubmit">
      <h4 class="text-center">{{ $options.name }}</h4>
      <div class="row">
        <div class="col-md-4 col-sm-12 offset-md-4 border border-2 rounded p-4">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              v-model="form.name"
              name="name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              v-model="form.email"
              name="email"
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
              v-model="form.password"
              name="password"
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
import { mapMutations } from 'vuex';

export default {
  name: 'SignUp',
  data() {
    return {
      form: {},
    };
  },

  methods: {
    ...mapMutations(['signUp']),
    onSubmit(e) {
      e.preventDefault();
      this.signUp(this.form);
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
