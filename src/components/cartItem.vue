<template>
  <div>
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
      class="img"
    >
    <h2>{{ product.title }}</h2>
    {{ product.description }}
    <p>
      <b>Rating: {{ product.rating }}</b>
    </p>
    <el-button
      type="danger"
      @click="deleteProduct"
    >
      Delete
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    deleteProduct() {
      this.$emit('deleteProduct')
    }
  }
}
</script>