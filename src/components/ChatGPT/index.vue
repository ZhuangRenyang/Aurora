<template>
  <div class="modal-backdrop">
    <div class="modal" :style="mainStyles">
      <div class="modal-footer">
        <button type="button" class="btn-close" @click="closeSelf">关闭</button>
      </div>
      <div class="modal-body">
        <iframe
            src="https://zhuangrenyang.github.io/chatGPT.html#/"
            id="frames"
            frameborder="0"
            sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
            style="height: 100%; width: 100%"
        ></iframe>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  props: {
  },
  data() {
    return {
    }
  },
  methods: {
    closeSelf() {
      this.$emit("closeme");
    },
  }
}
</script>
<style lang="scss" scope>
@import './index.scss';
</style>
