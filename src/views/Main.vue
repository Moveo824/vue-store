<template>
  <el-container>
    <el-header>
      <el-input
        class="search"
        placeholder="Search..."
        v-model="searchValue"
      />
      <el-button
        type="success"
        icon="el-icon-s-goods"
        class="btn-cart"
        circle
        @click="cartPage"
      >
      </el-button>
    </el-header>
    <el-main>
      <catalog
        :searchValue="searchValue"
        @addToCart="addToCart"
      />
    </el-main>
  </el-container>
</template>

<script>
import { mapActions } from 'vuex'
import catalog from '@/components/catalog'

export default {
  components: {
    catalog
  },
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    ...mapActions([
      'getProducts', 'add_To_Cart'
    ]),
    addToCart(data) {
      this.add_To_Cart(data)
    },
    cartPage() {
      this.$router.push('/cart')
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style>
  .search {
    margin-top: 5px;
    width: 600px;
  }

  .cards {
    margin-bottom: 10px;
    height: 400px;
  }

  .searchBtn {
    margin-top: 5px;
    margin-left: 10px;
  }

  .pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .page {
    padding: 8px;
    border: solid 1px #e7e7e7;
  }

  .page:hover {
    background: rgb(204, 199, 199);
    cursor: pointer;
    color: white;
  }

  .pageSelected {
    background: rgb(204, 199, 199);
    cursor: pointer;
    color: white;
  }

  .btn-cart {
    margin-left: 10px;
  }
</style>s