<template>
  <v-row no-gutters class="wrapper align-center">
    <v-col md="7" sx="1" class="d-none d-md-block heroLogin" />
    <v-col md="5" class="text-center pa-4 pa-lg-0 h-100 align-content-center bg-black">
      <img src="@/assets/dashboard.svg" alt="dashboard-icon" width="50%">
      <p>My Little Asso</p>
      <v-card class="mx-auto" max-width="500" outlined>
        <v-card-title class="text-center">
          Créer un compte
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="name" label="Name" type="texte" :rules="[rules.required]" required />

            <v-text-field v-model="email" label="Email" type="email" :rules="[rules.required, rules.email]" required />

            <v-text-field v-model="password" label="Password" type="password" :rules="[rules.required]" required />

            <v-btn color="primary" @click="register">
              S'enregistrer
            </v-btn>
            <p class="my-4 text-red" v-if="messageResponseServer">{{ messageResponseServer }}</p>
          </v-form>
                   <div class="my-4">
                  <p>
                      <b>Vous avez déjà un compte ?</b>
                  </p>
                  <div>
                      <RouterLink :to="{name:'login'}">SE CONNECTER</RouterLink>
                  </div>
              </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-snackbar
      v-model="snackbar"
      vertical
      color="red"
    >
      <div class="text-subtitle-1 pb-2">Invalid credential</div>

      <template v-slot:actions>
        <v-btn
          color="indigo"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script setup>
import { ref } from "vue"

import { useUserStore } from "@/stores/user.js"
import { useRouter } from "vue-router"

const store = useUserStore()
const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref("")
const messageResponseServer = ref('')
const snackbar = ref(false)

const rules = {
  required: value => !!value || 'Required.',
  email: value =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    'Invalid email address.',
}

function register() {
  store.register({ email: email.value, password: password.value, name: name.value })
  .then(() =>  messageResponseServer.value = "Enregistrement réussi" )
  .catch((error) => messageResponseServer.value = error)
  }
  
  /*
function handleAuthError(errorMessage) {
  messageResponseServer.value = errorMessage;
  if(errorMessage != ''){
    snackbar.value = true
  }
}*/
</script>

<style>
.wrapper {
  height: 100%;
  width: 100%;
}

.heroLogin {
  background: url("@/assets/bg-login.jpg");
  background-size: cover;
  height: 100%;
  content: "";
}

#buttonDiv iframe {
  margin: auto !important;
}
</style>
