<template>
  <ion-card class="product-card">
    <img :src="product.image" alt="product image" />

    <ion-card-header>
      <ion-card-title>{{ product.name }}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <p>
        ราคา: 
        <span>{{ product.price }} บาท</span>
      </p>

      <ion-button expand="block" color="primary" @click="goDetail">
        ดูรายละเอียด
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();

    const goDetail = () => {
      router.push(`/products/${props.product.id}`);
    };

    return { goDetail };
  }
};
</script>

