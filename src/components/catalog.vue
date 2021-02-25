<template>
  <div>
    <el-row :gutter="20">
      <el-col 
        :span="8" 
        v-for="(product, index) in paginatedProducts"
        :key="index"
      >
      <el-card 
        shadow="never"
        class="cards"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
          class="img"
        >
        <h2>{{ product.title }}</h2>
        {{ product.description }}
        <p><b>Rating: {{ product.rating }}</b></p>
        <el-button 
          type="success"
          @click="addToCart(product)"
        >
          Add to cart
        </el-button>
      </el-card>
    </el-col>
  </el-row>
    <div class="pagination">
      <div 
        class="page"
        v-for="page in pages"
        :key="page"
        :class="{'pageSelected': page === pageNumber}"
        @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['searchValue'],
  data() {
    return {
      productsPerPage: 6,
      pageNumber: 1
    }
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page
    },
    addToCart(product) {
      this.$emit('addToCart', product)
    }
  },
  computed: {
    ...mapGetters([
      'products'
    ]),
    pages() {
      return Math.ceil(this.products.length / 6)
    },
    productsFilter() {
      return this.products.filter((product) => {
        return product.title.toLowerCase().match(this.searchValue.toLowerCase())
      })
    },
    paginatedProducts() {
      let from = (this.pageNumber - 1) * this.productsPerPage
      let to = from + this.productsPerPage
      return this.productsFilter.slice(from, to)
    }
  }
}
</script>

<style>
  .img {
    width: 100px;
    height: 100px;
  }
</style>