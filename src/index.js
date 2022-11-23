import VueTree from './vue-tree.vue'

VueTree.install = Vue => {
    Vue.components(VueTree.name, VueTree)
}

export default VueTree
