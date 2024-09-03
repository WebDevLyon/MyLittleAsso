import { createRouter, createWebHistory } from 'vue-router'
import Dasboard from '../views/DasboardView.vue'
import { useModalStore } from '@/stores/modalStore'
import { useAssociationStore } from '@/stores/association'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dasboard,
      meta: { requiresAuth: true, requiresAssociation: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const modalStore = useModalStore()
  const associationStore = useAssociationStore()
  const userStore = {
    isAuthenticated: true,
    isManager: false,
    isMember: false
  }
  console.log("associationStore : " , associationStore);
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const requiresAssociation = to.matched.some((record) => record.meta.requiresAssociation)

  if (requiresAuth && !userStore.isAuthenticated) {
    // Rediriger vers la page de connexion si non authentifié
    next({ name: 'Login' })
  } else if (requiresAuth && requiresAssociation && !userStore.isManager && !userStore.isMember) {
    modalStore.openModal('CreateOrChoiceAssociationModal')
    next()
  } else {
    modalStore.closeModal()
    next()
  }
})

export default router
