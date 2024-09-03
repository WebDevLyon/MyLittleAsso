// stores/modalStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modal', () => {
  const showModal = ref(false);
  const modalType = ref(null);

  function openModal(type) {
    modalType.value = type;
    showModal.value = true;
  }

  function closeModal() {
    modalType.value = null;
    showModal.value = false;
  }

  return { showModal, modalType, openModal, closeModal };
});
