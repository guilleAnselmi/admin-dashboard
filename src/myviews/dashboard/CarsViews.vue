<template>
  <div>
    dashboard
  </div>
</template>
<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { getAccessTokenSilently  } = useAuth0()
</script>
