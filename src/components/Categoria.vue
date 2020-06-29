<template>
    <q-img @click="$router.push({path: `/category/${id}`})" style="background-color: rgb(228, 228, 228);" class="rounded-borders col-lg-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer full-height" :src="img" width="200px" height="200px">
        <div class="absolute-bottom custom-caption" style="background-color:rgba(0, 0, 0, .5);">
            <div class="text-caption text-weight-bolder">{{name}}</div>
        </div>
    </q-img>
</template>

<script>
export default {
  name: 'Categoria',
  props: {
    id: {
      type: Number,
      required: true
    },

    name: {
      type: String,
      default: ''
    },

    img: {
      type: String,
      default: '#'
    }
  }
}
</script>
