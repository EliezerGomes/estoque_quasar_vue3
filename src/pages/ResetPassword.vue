<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent= "handlePasswordReset">
      <p class="col-12 text-h5 text-center">Reset Password</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label='New Password'
          v-model="password"
        />

        <div class= "full-width q-pt-md q-gutter-y-sm">
          <q-btn
            label= "send reset Password"
            color= "primary"
            class= "full-width"
            outline
            rounded
            type= "submit"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useAuthUser } from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const { resetPassword } = useAuthUser()
    // const route = useRoute()
    const router = useRouter()
    // const token = route.query.token

    const password = ref('')

    const handlePasswordReset = async () => {
      await resetPassword(password.value)
      router.push({ name: 'login' })
    }

    return {
      password,
      handlePasswordReset
    }
  }
})
</script>
