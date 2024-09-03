<template>
  <v-card>
    <v-card-title class="text-h5">Bienvenue !</v-card-title>
    <v-card-text>Que souhaitez-vous faire ?</v-card-text>

    <!-- Conteneur principal en flex -->
    <v-row class="pa-4" justify="space-between">
      
      <!-- Section Créer une Association -->
      <v-col cols="12" md="6" class="d-flex flex-column align-center">
        <!-- SVG pour créer une association avec une hauteur fixée -->
        <img :src="createAssociationSvg" alt="Créer une association" class="mb-2 pa-3 association-image" />
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="openCreateAssociation" class="mt-auto">Créer une Association</v-btn>
      </v-col>

      <!-- Section Rejoindre une Association -->
      <v-col cols="12" md="6" class="d-flex flex-column align-center">
        <!-- SVG pour rejoindre une association avec la même hauteur que l'autre image -->
        <img :src="joinAssociationSvg" alt="Rejoindre une association" class="mb-2 pa-3 association-image" />
        <!-- Input pour le code unique -->
        <v-text-field v-model="associationCode" label="Code unique de l'association" outlined class="mb-2 mt-auto w-100"></v-text-field>
        <v-btn color="secondary" @click="openJoinAssociation">Rejoindre une association</v-btn>
      </v-col>

    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

// Importer les images SVG directement
import createAssociationSvg from '@/assets/createAsso.svg';
import joinAssociationSvg from '@/assets/joinAsso.svg';

// Champ pour saisir le code de l'association
const associationCode = ref('');

// Méthodes à définir pour les boutons
const openCreateAssociation = () => {
  console.log('Créer une association');
  // Logique pour créer une association
};

const openJoinAssociation = () => {
  console.log('Rejoindre une association avec le code:', associationCode.value);
  // Logique pour rejoindre une association
};
</script>

<style scoped>
.association-image {
  height: 150px; /* Ajuste la hauteur des images ici */
  object-fit: contain; /* S'assure que l'image est bien contenue dans le cadre */
}

.mt-auto {
  margin-top: auto;
}
</style>
