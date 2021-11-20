<template>
  <div class="container-fluid p-0 position-relative">
    <img
      :src="require('../assets/img/topImage.jpg')"
      class="img-fluid topImage"
      alt="..."
    />
    <Nav />
    <div class="mbImageContainer"></div>
  </div>

  <div class="container-fluid pt-5">
    <CasConsulting />
    <div class="row bg-offWhite py-5">
      <ESectors />
      <h4 class="col-md-10 offset-md-1 bolder my-5">Our Projects</h4>

      <OurProjects />
    </div>
    <ClientsMembers />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import CasConsulting from '@/components/DashboardCom/CasConsulting.vue';
import ESectors from '@/components/DashboardCom/ESectors.vue';
import OurProjects from '@/components/DashboardCom/OurProjects.vue';
import ClientsMembers from '@/components/DashboardCom/ClientsMembers.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'UserDashboard',

  components: {
    Nav,
    CasConsulting,
    ESectors,
    OurProjects,
    ClientsMembers,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/UserDashboard.scss';
</style>
