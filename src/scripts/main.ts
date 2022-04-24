import { Engine } from './engine/Engine'
import { Mog } from './sprite/Mog'
import mogAtlas from '../assets/mog/mog_atlasx3.png'

const engine = new Engine()
engine.scene.add('mog_atlas', mogAtlas)
const mog = new Mog(engine, 0, 0, { name: 'mog_atlas', key: 'mog' }, 1, true)

window.addEventListener('load', () => {
  engine.init()
})
