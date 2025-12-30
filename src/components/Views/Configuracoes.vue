<script lang="ts">
import { defineComponent, watch } from "vue";

export default defineComponent({
    name: 'Configuracoes',
    data(vm) {
        return {
            temaEscolhido: "",
            notificacaoEmail: "",
            notificacaoPush: "",
            notificacaoWhatsapp: "",
            modoDeUso: "",

            
    }},
     watch: {
        temaEscolhido(n) {
            if (n === "dark") { this.$el.className = "dark" }
            else if (n === "light") { this.$el.className = "light" }
            else { this.$el.className = "auto" }
        }
    },
    methods: {
    salvarConfiguracoes() {
      if (this.temaEscolhido || this.notificacaoEmail || this.notificacaoPush || this.notificacaoWhatsapp || this.modoDeUso) {
        alert("Configuração salva")
      } else {
        alert("Selecione uma configuração")
      }
    }
  }
})
</script>

<template>
    <v-app>
        <v-container class="py-8 bg-grey-lighten-4" max-width="600">
            <!-- cabeçalho -->
            <div class="mb-6">
                <h1 class="text-h5 font-weight-bold mb-1">
                    Configurações
                </h1>
                <p class="text-body-2 text-medium-emphasis">
                    Personalize sua experiência no app
                </p>
            </div>
            <v-col class="pa-0">
                <v-row class="ma-0">
                    <v-card class="pa-6 roudend-xl elevation-2  " width="100%" :class="temaEscolhido">
                        <!--  card Aparencia -->
                        <div class="mb-6">
                            <h2 class="text-subititle-1
                             font-weight-medium mb-1">
                                Aparência
                            </h2>

                            <p class="text-body-2 
                            mb-4">Escolha o tema do aplicativo
                            </p>

                            <v-radio-group class="mb-2" v-model="temaEscolhido">
                                <v-radio label="Claro ☀️" value="light" color="deep-purple-accent-4"></v-radio>
                                <v-radio label="Escuro 🌙" value="dark" color="deep-purple-accent-4"></v-radio>
                                <v-radio label="Automático ⚙️" value="auto" color="deep-purple-accent-4"></v-radio>
                            </v-radio-group>

                            <v-divider class="my-6"></v-divider>

                        </div>
                        <!-- card notificações -->
                        <div class="mb-6">
                            <h2 class="text-subtitle-1 
                            font-weight-medium mb-1">
                                Notificações
                            </h2>
                            <p class="text-body-2 
                            mb-4">
                                Gerencie como deseja receber aviso
                            </p>

                            <v-switch class="mb-2" color="deep-purple-accent-4" label="E-mail"
                                v-model="notificacaoEmail"></v-switch>
                            <v-switch class="mb-2" color="deep-purple-accent-4" label="Push" v-model="notificacaoPush">
                                </v-switch>
                                <v-switch color="deep-purple-accent-4" label="WhatsApp"
                                    v-model="notificacaoWhatsapp"></v-switch>


                        </div>

                        <v-divider class="my-6"></v-divider>

                        <!-- card modo de uso -->
                        <div class="mb-8">
                            <h2 class="text-subtitle-1 mb-4">
                                Modo de uso
                            </h2>
                            <v-radio-group class="mb-2" v-model="modoDeUso">
                                <v-radio label="Básico" value="basic" color="deep-purple-accent-4"></v-radio>
                                <v-radio label="Avançado" value="advanced" color="deep-purple-accent-4"></v-radio>
                            </v-radio-group>
                        </div>
                        <v-btn color="deep-purple-accent-4" variant="flat" block height="48"
                            class="text-none rounded-lg font-weight-medium text-white" @click="salvarConfiguracoes">
                            Salvar configurações
                        </v-btn>
                    </v-card>
                </v-row>
            </v-col>
        </v-container>
    </v-app>
</template>

<style scoped>
/* ===== CARD - TEMA CLARO ===== */
.v-card.light {
    background-color: #ffffff;
    color: #1f2937;
}

/* ===== CARD - TEMA ESCURO ===== */
.v-card.dark {
    background-color: #111827;
    color: #e5e7eb;
}

/* ===== CARD - TEMA AUTOMÁTICO ===== */
.v-card.auto {
    background-color: #f3f4f6;
    color: #1f2937;
}

/* ===== TEXTOS NO ESCURO ===== */
.v-card.dark h1,
.v-card.dark h2 {
    color: #f9fafb;
}

.v-card.dark p {
    color: #cbd5e1;
    /* cinza claro, confortável de ler */
}




/* ===== DIVIDER NO ESCURO ===== */
.v-card.dark .v-divider {
    border-color: rgba(255, 255, 255, 0.08);
}
</style>