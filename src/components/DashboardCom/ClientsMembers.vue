<template>
  <div class="row py-5">
    <h4 class="col-md-10 offset-md-1 bolder my-5">Our Clients</h4>
    <div class="col-md-10 offset-md-1 d-flex flex-wrap OurClientsContainer">
      <img v-for="data in ourClient" :key="data.id" :src="data.img" alt="img" />
    </div>
    <h4 class="col-md-10 offset-md-1 bolder my-5 pt-5">We are members of</h4>

    <div class="col-md-10 offset-md-1 d-flex flex-wrap mb-5 membersofContainer">
      <img v-for="data in membersOf" :key="data.id" :src="data.img" alt="img" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ClientsMembers',
  computed: {
    ...mapState(['ourClient', 'membersOf']),
  },
};
</script>

<style lang="scss" scoped>
.OurClientsContainer img {
  width: 150px;
  height: 75px;
  margin-right: 3%;

}
.membersofContainer img {
  width: 117px;
  height: 81px;
  margin-right: 4%;
}
@media (max-width: 768px) {
  .OurClientsContainer img {
    max-width: 105px;
    height: 53px;
    margin-bottom: 1%;
  }
  .membersofContainer img {
    width: 69px;
    height: 48px;
  }
}
</style>
