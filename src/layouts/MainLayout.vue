 Layout Builder
Visible Header
Visible Footer
Visible left-side Drawer
Visible right-side Drawer
Inject Drawer content for scrolling
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-red-12 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-h6">
            <img style="cursor:pointer" @click="$router.push({path: `/`})" src="~assets/logo_market.png" width="40px" height="auto" class="vertical-middle">
            Free Market
          </div>
        </q-toolbar-title>
        <q-btn @click="confirm = true" color="orange" icon="shopping_cart">Carrito ({{ enCarrito.length }}) </q-btn>
        <q-dialog v-model="confirm">
          <q-card style="width: 700px; max-width: 80vw;">
            <q-item v-bind:key="(item, index)" v-for="(item, index) in itemsCarrito">
              <q-item-section avatar>
                <q-avatar>
                  <img :src="item.img">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{item.name}}</q-item-label>
                <q-item-label caption>{{item.desc}}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label>${{item.precio}}</q-item-label>
                <q-btn @click="quitarDeCarrito(index)" size='xs' round color="red" icon="cancel" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
              </q-item-section>
              <q-item-section></q-item-section>
              <q-item-section side>
                <q-item-label>
                  <span class="text-weight-medium">Precio total: ${{total}}</span>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-card-actions align="right">
              <q-btn flat label="Volver al sitio" color="orange" v-close-popup />
              <q-btn flat label="Comprar" color="orange" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import store from '../store'

export default {
  computed: {
    itemsCarrito () {
      return store.getters.getCarrito.map((id) => {
        return store.getters.getProductos.find((pr) => {
          return id === pr.id
        })
      })
    },
    total () {
      return this.itemsCarrito.reduce((tot, pr) => tot + pr.precio, 0)
    },
    enCarrito () { return store.getters.getCarrito }
  },
  methods: {
    quitarDeCarrito (index) {
      store.dispatch('quitarCarrito', index)
    }
  },
  data () {
    return {
      confirm: false
    }
  }
}
</script>

<style>
  body{
    background-color: rgb(228, 228, 228);
  }
</style>
