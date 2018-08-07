import Vue from 'vue';
import FilterDemo from '@/components/filter/FilterDemo.vue';


const components = [
  FilterDemo
];
/* 全局注册 */
const install = (_vue) => {
  components.forEach((component) => {
    _vue.component(component.name, component);
  });
};
install(Vue);


export { FilterDemo }