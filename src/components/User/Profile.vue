<template>
  <v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-text>
          <div class="text-md-center">
              <h4 class="headline mb-0"><b class="red--text">Name :</b> {{ user.name }}</h4>
              <h4 class="headline mb-0"><b class="red--text">Email :</b> {{ user.email }}</h4>
          </div>
        </v-card-text>
     </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters.user
      }
    }
  }
</script>
