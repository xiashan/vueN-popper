<template>
  <transition name="el-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="visible"
      class="el-picker-panel el-select-picker el-popper"
    >
      <div class="header">{{this.title}}</div>

      <div>This is popper</div>

      <div class="footer">
        <button class="el-button el-button--default el-button--small" @click="cancel">Cancel</button>
        <button class="el-button el-button--primary el-button--small" @click="apply">Apply</button>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      visible: '',
      id: '', // app
      title: '' // App
    };
  },

  methods: {
    // TODO
    resetView() {
    },
    cancel() {
      this.$emit('closePicker');
    },
    apply() {
      this.$emit('changePikcer', { id: this.id });
      this.$emit('closePicker');
    }
  }
};
</script>
