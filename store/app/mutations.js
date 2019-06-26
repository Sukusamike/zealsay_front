import { set, toggle } from '@/util/vuex'

export default {
  setDrawer: set('drawer'),
  setImage: set('image'),
  setColor: set('color'),
  setTheme: set('theme'),
  setSlider: set('slider'),
  toggleDrawer: toggle('drawer')
}
