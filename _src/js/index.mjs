//console.log('hello webpack');
import '../sass/sv4.scss'

import bg_fade from './site-parts/bg-fade'

import e_clock from './site-parts/e-clock'
import hover_lamp from './site-parts/hover-lamp'
import menu_switch from './site-parts/menu-switch'
import scroll from './site-parts/scroll'

import v_g_nav from './vue/g-nav/index'
import v_top from './vue/top/index'


bg_fade()
e_clock()
hover_lamp()
menu_switch()
scroll()

v_g_nav()
v_top()
