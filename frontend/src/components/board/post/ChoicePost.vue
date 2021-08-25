<template>
  <div class="container" style="display: inline-block; text-align: center">
    <b-card
      header="Card Header"
      header-text-variant="white"
      header-tag="header"
      header-bg-variant="dark"
      footer="Card Footer"
      footer-tag="footer"
      footer-bg-variant="success"
      footer-border-variant="dark"
      title="Title"
      style="max-width: 20rem"
    >
      <b-card-text>공부해야 되나요?</b-card-text>
      <b-button href="#" variant="primary">해야 한다</b-button>
      <b-button href="#" variant="primary">안해도 된다</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "postCard",
};
</script>
