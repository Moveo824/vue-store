<template>
  <el-container>
    <el-header>
      <el-button 
        type="primary"
        @click="storePage"
      >
        STORE
      </el-button>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col
          :span="8"
          v-for="(product, index) in cart"
          :key="index"
        >
          <el-card 
            shadow="never"
            class="cards"
          >
            <cartItem
              :product="product"
              @deleteProduct="deleteProduct(index)"
            />
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import cartItem from '@/components/cartItem'
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    cartItem
  },
  methods: {
    ...mapActions([
      'delete_From_Cart'
    ]),
    storePage() {
      this.$router.push('/')
    },
    deleteProduct(index) {
      this.delete_From_Cart(index)
    }
  },
  computed: {
    ...mapGetters([
      'cart'
    ])
  }
}
</script>