<template>
  <div style="margin-top: 20px;">
    <button type="button" class="el-button el-button--primary" @click="handlePopClick('app')" ref="app">点我出现弹层</button>
  </div>
</template>

<script>
import Vue from 'vue';
import NoxPopper from '../../../src/components/Popper';
import PopperPanel from './pop';

import 'element-ui/lib/theme-chalk/index.css'

export default {
  name: 'demo',
  mixins: [NoxPopper],

  data() {
    return {
      pickerVisible: false, // 是否展示picker
      pickerId: '', // 展示picker的id
    }
  },

  watch: {
    pickerVisible(val) {
      if (val) {
        this.showPicker();
      } else {
        this.hidePicker();
      }
    }
  },

  // computed: {
  //   referenceElm() {
  //     const ref = this.$refs[this.pickerId];
  //     return ref || this.$el;
  //   }
  // },

  created() {
    this.panel = PopperPanel;
  },

  methods: {
    handlePopClick(id) {
      if (!this.pickerVisible) {
        this.pickerVisible = true;
        this.pickerId = id;
      }
    },

    hidePicker() {
      if (this.picker) {
        this.picker.resetView && this.picker.resetView();
        this.picker.visible = false;
        this.destroyPopper();
      }
    },

    showPicker() {
      if (!this.picker) {
        this.mountPicker();
      }
      this.picker.visible = true;
      this.updatePopper();
      this.picker.resetView && this.picker.resetView();
    },

    mountPicker() {
      this.picker = new Vue(this.panel).$mount();
      this.popperElm = this.picker.$el;
      this.referenceElm = this.$refs[this.pickerId];
      this.picker.width = this.referenceElm.getBoundingClientRect().width;
      this.picker.arrowControl = this.arrowControl || this.timeArrowControl || false;

      this.$el.appendChild(this.picker.$el);
      this.picker.resetView && this.picker.resetView();

      this.picker.$on('closePicker', () => {
        this.handleClose();
      });
      this.picker.$on('changePikcer', (data) => {
        console.log('change picker', data);
      });
    },

    handleClose(el) {
      if (!this.pickerVisible) return;
      this.pickerVisible = false;
    },

    unmountPicker() {
      if (this.picker) {
        this.picker.$destroy();
        this.picker.$off();
        // if (typeof this.unwatchPickerData === 'function') {
        //   this.unwatchPickerData();
        // }
        // this.picker.$el.parentNode.removeChild(this.picker.$el);
      }
    }
  }
}
</script>
