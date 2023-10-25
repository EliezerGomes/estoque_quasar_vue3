<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent= "handleForgotPassword">
      <p class="col-12 text-h5 text-center">Forgot Password</p>

      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label='Email'
          v-model="email"
        />

        <div class= "full-width q-pt-md q-gutter-y-sm">
          <q-btn
            label= "send reset email"
            color= "primary"
            class= "full-width"
            outline
            rounded
            type= "submit"
          />

          <q-btn
            label= "Back"
            color= "dark"
            class= "full-width"
            flat
            rounded
            :to="{ name: 'login' }"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useAuthUser } from 'src/composables/UseAuthUser'

export default defineComponent({
  setup () {
    const { sendPasswordRestEmail } = useAuthUser()
    const email = ref('')

    const handleForgotPassword = async () => {
      await sendPasswordRestEmail(email.value)
      alert(`Password reset email sent to: ${email.value}`)
    }

    return {
      email,
      handleForgotPassword
    }
  }
})
</script>
