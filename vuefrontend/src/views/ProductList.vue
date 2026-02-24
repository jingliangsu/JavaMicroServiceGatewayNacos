<template>
  <div class="product-container">
    <h1>微服务商品列表（Vue版）</h1>
    <div class="product-list">
      <div class="product-item" v-for="product in productList" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>价格：¥{{ product.price }}</p>
        <p>库存：{{ product.stock }}件</p>
      </div>
      <div v-if="productList.length === 0" class="empty-tip">暂无商品数据</div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'

// 定义商品列表数据
const productList = ref([])

// 页面加载时请求接口
onMounted(async () => {
  try {
    // 直接请求网关，网关会转发到对应的服务
    const res = await axios.get('http://localhost:8080/product/list')
    productList.value = res.data
    console.log('获取到的数据:', res.data)
  } catch (err) {
    console.error('接口请求失败：', err)
    alert('获取商品数据失败，请检查后端服务！')
  }
})
</script>

<style scoped>
.product-container {
  width: 800px;
  margin: 50px auto;
}

.product-item {
  border: 1px solid #e6e6e6;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
}

.empty-tip {
  color: #999;
  text-align: center;
  padding: 20px;
}
</style>
