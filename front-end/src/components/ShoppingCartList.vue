<template>
  <div
      class="product-container"
      v-for="product in products"
      :key="product.id"
  >
    <img class="product-image" :src="product.imageUrl"/>
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <h3>{{ product.price }}</h3>
    </div>
    <button @click="$emit('remove-from-cart', product.id)" class="remove-button"> Remove from cart </button>
  </div>
</template>

<script>
export default {
  name: "ShoppingCartList",
  props: ['products'],
}
</script>
