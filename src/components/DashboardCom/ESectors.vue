<template>
  <h4 class="col-md-10 offset-md-1 bolder my-5">Engineering Sectors</h4>
  <div class="col-md-10 offset-md-1 d-flex flex-wrap justify-content-between">
    <div
      class="eSectorImg"
      v-for="eSectors in engineeringSectors"
      :key="eSectors.id"
    >
      <img :src="eSectors.img" alt="img" />
      <div class="mt-3 mb-5 bolder">{{ eSectors.title }}</div>
    </div>
  </div>
  <div class="col-md-10 offset-md-1">
    <div class="text-decoration-underline smallText bolder">
      <i class="fa-solid fa-angle-right fa-sm"></i> Engineering Sectors
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'ESectors',
  methods: { ...mapActions(['fetchESectors']) },
  computed: {
    ...mapState(['formData']),
    ...mapGetters(['engineeringSectors']),
  },
  created() {
    this.fetchESectors();
  },
};
</script>

<style lang="scss" scoped>
.eSectorImg {
  img {
    max-width: 366px;
    height: 366px;
  }
}
@media (max-width: 768px) {
  .eSectorImg {
    margin-left: auto;
    margin-right: auto;

    img {
      max-width: 291px;
      height: 291px;
    }
  }
}
</style>
