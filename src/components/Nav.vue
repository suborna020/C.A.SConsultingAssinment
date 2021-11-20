<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="fas fa-bars text-white"></span>
        <!-- <i class="navbar-toggler-icon  fas fa-bars"></i> -->
      </button>
      <div class="collapse navbar-collapse mt-3" id="navbarSupportedContent">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <img
          :src="require('../assets/img/logo.svg')"
          class="navbar-brand img-fluid"
          alt="logo"
        />

        <ul class="navbar-nav rightUl ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-3">
            <i class="fas fa-chevron-down text-white mx-auto"></i>
            <a class="nav-link active pt-0" aria-current="page" href="#"
              >HOME</a
            >
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link pt-0" href="#">ABOUT</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link pt-0" href="#">SECTORS</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link pt-0" href="#">PROJECTS</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link pt-0" href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss" scoped>
nav {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10000;

  .rightUl {
    align-items: self-end;
    margin-right: 7%;
  }
}
.navbar-light .navbar-nav .nav-link {
  color: #cccccc;
}
.active {
  color: white !important;
}
li.nav-item {
  text-align: center;
  a {
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0em;
  }

  a:hover {
    color: cornflowerblue !important;
  }

  i {
    font-size: 13px;
  }
}
/* mobile  */
@media (max-width: 768px) {
  .navbar-collapse {
    background: black;
    padding: 10%;
    .rightUl {
      align-items: self-start;
    }
  }
}
</style>
