<!-- src/components/AssociationChoiceModal.vue -->
<template>
  <v-dialog v-if="selectedComponent" v-model="dialog" max-width="50%" persistent>
    <component :is="selectedComponent"></component>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import {useModalStore} from '@/stores/modalStore'

import CreateOrChoiceAssociationModal from './CreateOrChoiceAssociationModal.vue'

const modalStore = useModalStore()


// Map de tous les composants dynamiques
const componentsMap = {
  CreateOrChoiceAssociationModal,
};

// Sélection du composant dynamique
const selectedComponent = computed(() => {
  return componentsMap[modalStore.modalType] || null;
});

const dialog = ref(true)
</script>
