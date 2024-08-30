import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import User from '@/models/User'


export const useUserStore = defineStore('user', () => {
  const user = ref(User.loadFromLocalStorage())
  const returnUrl = ref(null)
  const router = useRouter()
  const postConfig = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
  }
  
  async function register(userInformations) {
    postConfig.body = JSON.stringify(userInformations)
    const response = await fetch('http://localhost:3000/register', postConfig)

    const reponse = await response.json()
    updateUser(reponse)
  }

  async function loginUser(typeOfConnect, userInformations) {
    let endpoint = 'http://localhost:3000/login'

    const response = await fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ typeOfConnect, userInformations })
    })
    const reponse = await response.json()
    if (response.status == 200) {
      updateUser(reponse)

      return reponse
    } else {
      throw reponse
    }
  }

  function updateUser(payload) {
    const userUpdated = User.fromApiResponse(payload)
    user.value = userUpdated
    userUpdated.saveToLocalStorage()
  }

  function logout() {
    if (user.value) {
      user.value.logout()
      user.value = null
    }
    router.push('/login')
  }

  return { user, returnUrl, register, loginUser, logout }
})
