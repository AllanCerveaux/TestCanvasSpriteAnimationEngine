import { Engine } from './engine/Engine'
import { Mog } from './sprite/Mog'
import mogAtlas from '../assets/mog/mog_atlasx3.png'

const engine = new Engine()
engine.scene.sprite.add('mog_atlas', mogAtlas)
engine.scene.anims.add({
  key: 'mog_atlas',
  name: 'mog_sleep',
  startAt: 0,
  row: 1,
  frames: 5,
  frameRate: 10,
  repeat: true
})
const mog = new Mog(engine, 0, 0, { name: 'mog', key: 'mog_atlas' })

window.addEventListener('load', () => {
  engine.init()
})
