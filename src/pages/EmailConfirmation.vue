<template>
  <q-page padding>
    <p class="text-body1">Thank's for register</p>
    <p class="text-body1">Please confirm your email to finishing registering: <strong>{{ $route.query.email }}</strong></p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation'
})
</script>
