<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
      <ion-card-subtitle>{{ author }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <p>ราคา: {{ price }} บาท</p>

      <ion-button color="danger" expand="block" @click="$emit('delete-book', title)">
        ลบหนังสือ
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from "@ionic/vue";

export default {
  name: "BookCard",
  components: { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton },
  props: {
    title: String,
    author: String,
    price: Number
  },
  methods: {
    deleteBook() {
      this.$emit("remove");
    }
  }
};
</script>