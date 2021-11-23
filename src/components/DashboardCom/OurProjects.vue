<template>
  <div class="col-md-12 px-0 my-5 d-flex justify-content-between flex-wrap">
    <div
      class="OurProjectImg position-relative"
      v-for="data in ourProjects"
      :key="data.id"
    >
      <img :src="data.img" :class="data.title ? 'blurImage' : ''" alt="img" />
      <div class="text-white centerDiv bolder projectTitle">
        {{ data.title }}
      </div>
    </div>
  </div>
  <div class="col-md-10 offset-md-1">
    <div class="text-decoration-underline smallText bolder">
      <i class="fa-solid fa-angle-right fa-sm"></i> Our Projects
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'OurProjects',
  methods: { ...mapActions(['fetchOurProjects']) },

  computed: {
    ...mapGetters(['ourProjects']),
  },
  created() {
    this.fetchOurProjects();
  },
};
</script>

<style lang="scss" scoped>
.OurProjectImg {
  background: rgba(0, 0, 0, 0.5);
  .blurImage {
    opacity: 0.5;
    z-index: -3;
  }
  img {
    max-width: 503px;
    height: 366px;
    margin-bottom: 1%;
  }
  .projectTitle {
    z-index: 2;
    opacity: 2;
  }
}
@media (max-width: 768px) {
  .OurProjectImg {
    img {
      max-width: 375px;
      height: 287.74px;
    }
  }
}
</style>
