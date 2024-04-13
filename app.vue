<script setup lang="ts">
const { data, signIn, signOut } = useAuth()
</script>

<template>
  <button v-if="data?.user" @click="signOut()">Sign Out</button>
  <button v-else @click="signIn('github')">Sign In</button>
  <pre>{{ data }}</pre>
</template>
