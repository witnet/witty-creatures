<template>
  <div class="fieldset">
    <header class="title">{{ title.toUpperCase() }}</header>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fieldset',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.fieldset {
  margin-bottom: 34px;
  padding: 0 24px;
  .title {
    color: #f8971e;
    margin-bottom: 24px;
  }
}
</style>
