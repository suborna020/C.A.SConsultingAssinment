<template>
  <div class="container-fluid">
    <form class="p-5" @submit="onSubmit">
      <h1 class="text-center" v-if="error">{{error}}</h1>

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
              v-model="loginForm.email"
              name="email"
              required
            />
            <div class="form-text">
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
              v-model="loginForm.password"
              name="password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <div class="form-text">
            or
            <router-link to="/signup" class="fw-bold"> Sign up? </router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
      error: '',
    };
  },
  computed: {
    ...mapState(['formData']),
  },
  methods: {
    onSubmit(e) {
      const myThis = this;
      const l = this.loginForm;
      const f = this.formData;
      console.log(l);
      console.log(f);

      e.preventDefault();
      if (l.email === f.email && l.password === f.password) {
        localStorage.setItem('userLoggedIn', true);
        myThis.$router.push({ name: 'UserDashboard' });
      } else {
        this.error = "Credantials did't match try Again ";
      }
    },
  },
};
</script>
