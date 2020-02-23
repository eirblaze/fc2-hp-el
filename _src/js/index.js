import savestage from "./wwa_savestage/index"

import '../sass/sv4.scss'

require('./common')

require('./site-parts/bg-fade.js')
require('./site-parts/e-clock.js')
require('./site-parts/hover-lamp.js')
require('./site-parts/menu-switch.js')

require('./vue/g-nav/index.js')
require('./vue/top/index.js')

require('./scroll')

savestage()
