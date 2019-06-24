<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Welcome</h3>
              <div v-if="userIsAuthenticated">
                Display Recent Objects Here
              </div>
              <div v-if="!userIsAuthenticated">
                Please Sign In
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
      export default {
        computed: {
          userIsAuthenticated () {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
          }
        }
      }
</script>
<style>

</style>


