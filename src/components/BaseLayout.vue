<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary" class="flex items-center">
        <ion-buttons slot="start" v-if="showBack">
          <ion-back-button default-href="/" />
        </ion-buttons>

        <ion-title class="text-center flex-1">{{ title }}</ion-title>

        <slot name="header-end"></slot>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding"> 
      <div class="flex flex-col items-center justify-center text-center h-full">
        <slot></slot> </div>
    </ion-content>
    <ion-footer class=" bottom-6 right-0 z-100">
      <slot name="actions"></slot>
    </ion-footer>
    </ion-page>
</template>

<script>
import {
  IonFooter,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
} from "@ionic/vue";

export default {
  name: "BaseLayout",
  components: {
    IonFooter,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    showBack: {
      type: Boolean,
      default: false,
    },
  },
};
</script>