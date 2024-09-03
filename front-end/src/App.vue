<template>
    <router-view />
   <app-modal v-if="modalStore.showModal" @close="modalStore.closeModal" />
</template>

<script setup>
import { useModalStore } from '@/stores/modalStore';
import AppModal from "@/components/AppModal.vue"

const modalStore = useModalStore();
</script>
