<template>
  <q-page class="q-mt-sm">
    <div class="q-pa-md">
    <Carousel/>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="nuevos" label="Nuevos productos"></q-tab>
            <q-tab name="promos" label="Promociones"></q-tab>
          </q-tabs>

          <q-separator ></q-separator>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="nuevos">
              <div class="text-h6"></div>
              <div class="row">
                <div v-for="pr in products" :key="pr.id" class="col-3 q-mt-lg">
                  <Product v-bind="pr"/>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="promos">
              <div class="text-h6">Promociones</div>
              No hay promociones.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
    <div class="text-grey-9 text-weight-bold q-pa-sm">
      <div class="row items-center q-mx-sm">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-sm">
          <div class="rounded-borders">
            <div class="q-pl-md bg-white q-pt-sm shadow-1">
              <span class="text-grey-9 text-h6 text-weight-bold">Categorias</span> <a
              class="text-primary q-ml-sm cursor-pointer">[see more]</a>
            </div>
            <div class="q-pl-md bg-white q-pt-sm shadow-1">
              <div v-for="cat in categorias" :key="cat.id" class="q-pa-sm inline-block">
                <Categoria v-bind="cat"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import Product from 'components/Product.vue'
import Categoria from 'components/Categoria.vue'
import Carousel from 'components/Carousel.vue'
import store from '../store'

export default {
  name: 'home',
  components: {
    Product,
    Categoria,
    Carousel
  },
  computed: {
    categoriasGroups () {
      return Array.from(Array(Math.ceil(this.categorias.length / 4)).keys())
    },
    enCarrito () { return store.getters.getCarrito }
  },
  methods: {},
  data () {
    return {
      tab: 'nuevos',
      trending_slide: 1,
      latest_slide: 1,
      products: store.getters.getProductos,
      categorias: store.getters.getCategorias
    }
  }
}
</script>

<style scoped>
  .custom-caption {
    text-align: center;
    padding: 8px;
    color: white;
    background-color: rgba(0, 0, 0, .3);
  }

</style>
