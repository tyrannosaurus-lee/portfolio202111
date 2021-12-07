import Viewdetail from './Viewdetail.vue';

export default {
  title: 'Example/Viewdetail',
  component: Viewdetail,
};

const Template = (args) => ({
  components: { Viewdetail },
  template: '<Viewdetail />',
  setup() {
    return { ...args };
  }
});


export const Default = Template.bind({});
Default.args = { };