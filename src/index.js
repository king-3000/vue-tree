import devopsTree from './components/tree'

devopsTree.install = Vue => {
    Vue.components(devopsTree.name, devopsTree)
}

export default devopsTree
