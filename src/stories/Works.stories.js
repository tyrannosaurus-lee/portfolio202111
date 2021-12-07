import Works from './Works.vue';

export default {
  title: 'Example/Works',
  component: Works
};

const Template = (args) => ({
  components: { Works },
  setup() {
    return { ...args };
  },
  template: '<Works />',
});

export const Default = Template.bind({});
Default.args = { };