/**
 * @description this directive will automatically focus an element where v-focus is called
 */

export default {
  name: 'focus',
  mounted(el: HTMLElement) {
    el.focus();
  },
};
