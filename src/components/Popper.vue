<script>
import PopperJS from 'popper.js';

/**
 * @param {HTMLElement} [reference=$refs.reference]
 * - The reference element used to position the popper.
 * @param {HTMLElement} [popper=$refs.popper]
 * - The HTML element used as popper, or a configuration used to generate the popper.
 */
export default {
  props: {
    transformOrigin: {
      type: [Boolean, String],
      default: true
    },
    boundariesSelector: String,
    reference: {},
    popper: {},
    disabled: {
      type: Boolean,
      default: false
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  data() {
    return {
      showPopper: false,
      popperJS: null,
      referenceElm: null,
      popperElm: null,
      popperOptions: {
        placement: 'bottom',
        computeStyle: {
          gpuAcceleration: false
        }
      }
    };
  },

  watch: {
    showPopper(val) {
      if (this.disabled) return;
      if (val) {
        if (this.popperJS) {
          this.popperJS.enableEventListeners();
        }
        this.$emit('show', this);
        this.updatePopper();
      } else {
        if (this.popperJS) {
          this.popperJS.disableEventListeners();
        }
        this.$emit('hide', this);
      }
    },

    disabled(value) {
      if (value) {
        this.showPopper = false;
      }
    }
  },

  created() {
    this.popperOptions = Object.assign(this.popperOptions, this.options);
  },

  methods: {
    createPopper() {
      this.popperElm = this.popperElm
        || this.popper
        || this.$refs.popper;
      this.referenceElm = this.referenceElm
        || this.reference
        || this.$refs.reference
        || (this.$slots.reference && this.$slots.reference[0]);
      const popper = this.popperElm;
      const reference = this.referenceElm;
      if (!popper || !reference) {
        return;
      }

      if (this.visibleArrow) {
        this.appendArrow(popper);
      }
      if (this.appendToBody) {
        document.body.appendChild(popper);
      }

      if (this.boundariesSelector) {
        const boundariesElement = document.querySelector(this.boundariesSelector);

        if (boundariesElement) {
          this.popperOptions.modifiers = Object.assign({}, this.popperOptions.modifiers);
          this.popperOptions.modifiers.preventOverflow = Object.assign(
            this.popperOptions.modifiers.preventOverflow,
            { boundariesElement: boundariesElement }
          );
        }
      }

      this.popperOptions.onCreate = () => {
        this.$emit('created', this);
        this.$nextTick(this.updatePopper);
      };

      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy();
      }
      this.popperJS = new PopperJS(reference, popper, this.popperOptions);
    },

    updatePopper() {
      if (this.popperJS) {
        this.popperJS.scheduleUpdate();
      } else {
        this.createPopper();
      }
    },

    doDestroy(forceDestroy) {
      if (!this.popperJS || (this.showPopper && !forceDestroy)) {
        return;
      }
      this.popperJS.destroy();
      this.popperJS = null;
    },

    destroyPopper() {
      this.showPopper = false;
      this.doDestroy();
    },

    appendArrow(element) {
      let hash;
      if (this.appended) {
        return;
      }
      this.appended = true;

      for (let item in element.attributes) {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name;
          break;
        }
      }

      const arrow = document.createElement('div');
      if (hash) {
        arrow.setAttribute(hash, '');
      }
      arrow.setAttribute('x-arrow', '');
      arrow.className = 'popper__arrow';
      element.appendChild(arrow);
    }
  },

  beforeDestroy() {
    this.doDestroy(true);
    // appendToBody: true
    if (this.popperElm && this.popperElm.parentNode === document.body) {
      document.body.removeChild(this.popperElm);
    }
  },
};
</script>
