<template >
  <div class="overlay">
    <div class="modal-dialog bg-primary">
      <div class="modal-content bg-primary">
        <div class="modal-header">
          <h5 class="modal-title">
            <!-- aca va el titulo -->
            <slot name="title"></slot>
          </h5>
        </div>

        <div class="modal-body">
          <div id="processBar" class="d-none">
            <div class="progress">
              <div
                id="processPerc"
                class="progress-bar progress-bar-striped bg-dark"
                role="progressbar"
                style="width: 0%"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="col-12 col-xl-12 justify-content-center">
            <!-- aca van los inputs  -->
            <slot name="body"></slot>
          </div>
          <div class="modal-footer btn-group">
            <!--  aca los botones -->
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.overlay {
  position: fixed;
  display: block ;
  padding-right: 17px;
  justify-content: center;
  align-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  z-index: 1030;
}

</style>