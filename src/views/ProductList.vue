<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>รายการสินค้า</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col 
            size="12" 
            size-sm="6" 
            size-md="4" 
            v-for="item in products" 
            :key="item.id"
          >
            <ProductCard :product="item" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, 
  IonContent, IonGrid, IonRow, IonCol 
} from "@ionic/vue";
import ProductCard from "../views/ProductCard.vue";

export default {
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle,
    IonContent, IonGrid, IonRow, IonCol,
    ProductCard
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "เครื่องเล่นเกม Xbox Series S",
          price: 10999,
          image: "https://cms-assets.xboxservices.com/assets/37/d2/37d211d0-5c2c-42c6-bb71-ca7492c5e088.png?n=642227_Hero-Gallery-0_C1_857x676.png"
        },
        {
          id: 2,
          name: "เครื่องเล่นเกม PlayStation 5",
          price: 17999,
          image: "https://mediam.dotlife.store/media/catalog/product/cache/3b7e899159f673788675d87d1d929a98/s/o/sony-ps5-pro-001.jpeg"
        },
        {
          id: 3,
          name: "เครื่องเล่นเกม Nintendo Switch",
          price: 6999,
          image: "https://mediam.dotlife.store/media/catalog/product/cache/3b7e899159f673788675d87d1d929a98/n/i/nintendo_switch_console_cpw_.003.jpeg"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* สามารถเพิ่มการตกแต่งพื้นหลังของหน้าได้ที่นี่ */
ion-content {
  --background: #f4f7f6;
}
</style>