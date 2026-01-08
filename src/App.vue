<template>
  <ion-app>
    <ion-router-outlet />
    </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
// นำเข้าคอมโพเนนต์พื้นฐานของ Ionic

export default {
  name: 'App',
  // ชื่อคอมโพเนนต์
  components: {
    // ลงทะเบียนคอมโพเนนต์ที่นำเข้า
    IonApp,
    IonRouterOutlet,
  },
}; 

//
</script>