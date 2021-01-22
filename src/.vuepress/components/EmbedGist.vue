<template>
  <vue-embed-gist gist-id="ec8cc067e17b7a3ad602a755420ff82b" :file="filename" />
</template>
 
<script>
import VueEmbedGist from "vue-embed-gist";
export default {
  props: ['filename'],
  components: {
    VueEmbedGist,
  },
};
</script>