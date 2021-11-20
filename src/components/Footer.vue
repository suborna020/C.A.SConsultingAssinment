<template>
  <div class="row footer bg-offWhite py-sm-5">
    <div class="col-md-9">
      <div class="row h-md-100">
        <div class="col-md-9 px-4 offset-md-1 my-auto eachMarBtm">
          <div>
            <h4 class="bolder">C.A.S Consulting Ltd</h4>
          </div>
          <div class="d-flex">
            <i class="fa-brands fa-facebook-f fa-sm me-2"></i>
            <i class="fa-brands fa-instagram fa-sm"></i>
          </div>
          <div class="bolder">info@electricaldesignscy.com</div>
          <div class="d-flex smallText">
            <div class="adress">
              6E Thoukididou Street, 1060 Nicosia, Cyprus
            </div>
            <div>
              <div>+357 22 374171</div>
              <div>+357 99 456081</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3 smallText bolder" style="margin-top: 17%">
      2021 C.A.S Consulting Ltd All Rights Reserved.
      <div>Site by <span class="bolder">Mojo Digital</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  /* width: 100%; */
  min-height: 339px;
}
.adress {
  width: 16%;
}
@media (max-width: 768px) {
  .py-sm-5 {
    padding-top: 15%;
    padding-bottom: 15%;
  }
  .adress {
    width: 39%;
  }
}
</style>
