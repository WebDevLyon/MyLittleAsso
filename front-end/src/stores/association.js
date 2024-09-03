import { defineStore } from "pinia";
import {ref} from 'vue'

export const useAssociationStore = defineStore('association', () => {
  const association = ref(null)
})
