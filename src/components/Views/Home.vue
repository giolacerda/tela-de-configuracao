<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: 'Home'
})
</script>

<template>
    <v-container class="fill-height d-flex align-center justify-center">
        <router-Link to="/configuracao" style="text-decoration: none; color: inherit;">
            <v-card class="pa-10 rounded-xl elevation-3 d-flex flex-column
                 align-center justify-center text-center cursor-pointer">

                <v-icon class="mb-4 text-deep-purple-accent-4">mdi-cog</v-icon>

                <p class="text-subtitle-1 font-weight-medium text-medium-emphasis">Configuração</p>
            </v-card>
        </router-Link>
    </v-container>
</template>