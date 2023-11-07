import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script2 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script3 from "../b853061a-bf5a-4d76-b7f1-92ed9ea4a8bf/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const hasedera3 = new Entity('hasedera3')
engine.addEntity(hasedera3)
hasedera3.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(31.860015869140625, 0.4155002236366272, 16.25336456298828),
  rotation: new Quaternion(7.765282964171047e-15, -3.725290298461914e-8, 1.016901169661414e-14, -1),
  scale: new Vector3(0.9018571376800537, 0.9018561840057373, 0.9018571376800537)
})
hasedera3.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("103e143c-8faa-4c31-bd0e-bbe2adc7ce1f/hasedera02.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
hasedera3.addComponentOrReplace(gltfShape)

const doom = new Entity('doom')
engine.addEntity(doom)
doom.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(31.937129974365234, 7.152557373046875e-7, 16.137954711914062),
  rotation: new Quaternion(7.765282964171047e-15, -3.725290298461914e-8, 1.016901169661414e-14, -1),
  scale: new Vector3(1.0000008344650269, 1, 1.0000008344650269)
})
doom.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("564e2cb9-3b67-415b-b4ac-f5d09afe1d24/doom.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
doom.addComponentOrReplace(gltfShape2)

const dase3 = new Entity('dase3')
engine.addEntity(dase3)
dase3.setParent(_scene)
const gltfShape3 = new GLTFShape("30ca0fce-dd47-4428-85c2-eac913d6d069/dase.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
dase3.addComponentOrReplace(gltfShape3)
const transform4 = new Transform({
  position: new Vector3(41.34583282470703, 1.8521528244018555, 14.626455307006836),
  rotation: new Quaternion(-0.19415095448493958, 0.09613373875617981, -0.019122188910841942, -0.9760625958442688),
  scale: new Vector3(0.3198903203010559, 0.2769944965839386, 0.33596470952033997)
})
dase3.addComponentOrReplace(transform4)

const dase = new Entity('dase')
engine.addEntity(dase)
dase.setParent(_scene)
dase.addComponentOrReplace(gltfShape3)
const transform5 = new Transform({
  position: new Vector3(22.450801849365234, 1.8521528244018555, 14.617576599121094),
  rotation: new Quaternion(-0.19415095448493958, -0.0961337685585022, 0.019122226163744926, -0.9760625958442688),
  scale: new Vector3(0.3198902904987335, 0.27699440717697144, 0.33596473932266235)
})
dase.addComponentOrReplace(transform5)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(45.06896209716797, 0.7787649631500244, 28.983089447021484),
  rotation: new Quaternion(1.126677994878287e-14, 1, -1.1920926823449918e-7, -3.725290298461914e-8),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
externalLink.addComponentOrReplace(transform6)

const kaitenPe = new Entity('kaitenPe')
engine.addEntity(kaitenPe)
kaitenPe.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(32, 11.5, 16),
  rotation: new Quaternion(0, 0, -1, -3.725290298461914e-8),
  scale: new Vector3(1.0101100206375122, 53.44599533081055, 1.0101096630096436)
})
kaitenPe.addComponentOrReplace(transform7)
const gltfShape4 = new GLTFShape("1d623d87-d88a-43dc-b928-e0b70f5cc4bb/kaiten_pe.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
kaitenPe.addComponentOrReplace(gltfShape4)

const videoStream2 = new Entity('videoStream2')
engine.addEntity(videoStream2)
videoStream2.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(31.980144500732422, 1.909799337387085, 9.78536319732666),
  rotation: new Quaternion(6.534366214891625e-15, -3.725290298461914e-8, -1.1147268682122971e-14, -1),
  scale: new Vector3(4.306685447692871, 4.306677341461182, 4.508155345916748)
})
videoStream2.addComponentOrReplace(transform8)

const invisibleCylinder = new Entity('invisibleCylinder')
engine.addEntity(invisibleCylinder)
invisibleCylinder.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(32.49818420410156, 0.45859432220458984, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(21, 0.20999999344348907, 21)
})
invisibleCylinder.addComponentOrReplace(transform9)

const yukaxxx = new Entity('yukaxxx')
engine.addEntity(yukaxxx)
yukaxxx.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(24, 0.04289817810058594, 16),
  rotation: new Quaternion(-2.216015008144989e-15, 0.7071068286895752, -8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
yukaxxx.addComponentOrReplace(transform10)
const gltfShape5 = new GLTFShape("76b83cba-65dc-4615-9805-d4e154591961/yukaxxx2.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
yukaxxx.addComponentOrReplace(gltfShape5)

const kaitenPe2 = new Entity('kaitenPe2')
engine.addEntity(kaitenPe2)
kaitenPe2.setParent(_scene)
kaitenPe2.addComponentOrReplace(gltfShape4)
const transform11 = new Transform({
  position: new Vector3(8.34585189819336, 0.20345044136047363, 17.08426284790039),
  rotation: new Quaternion(3.725290298461914e-8, 9.265043735744247e-15, 1, 3.7252917195473856e-8),
  scale: new Vector3(1.0101104974746704, 53.44601058959961, 1.0101103782653809)
})
kaitenPe2.addComponentOrReplace(transform11)

const glossyAethereaTiles = new Entity('glossyAethereaTiles')
engine.addEntity(glossyAethereaTiles)
glossyAethereaTiles.setParent(_scene)
const gltfShape6 = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
glossyAethereaTiles.addComponentOrReplace(gltfShape6)
const transform12 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles.addComponentOrReplace(transform12)

const glossyAethereaTiles2 = new Entity('glossyAethereaTiles2')
engine.addEntity(glossyAethereaTiles2)
glossyAethereaTiles2.setParent(_scene)
glossyAethereaTiles2.addComponentOrReplace(gltfShape6)
const transform13 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles2.addComponentOrReplace(transform13)

const glossyAethereaTiles3 = new Entity('glossyAethereaTiles3')
engine.addEntity(glossyAethereaTiles3)
glossyAethereaTiles3.setParent(_scene)
glossyAethereaTiles3.addComponentOrReplace(gltfShape6)
const transform14 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles3.addComponentOrReplace(transform14)

const glossyAethereaTiles4 = new Entity('glossyAethereaTiles4')
engine.addEntity(glossyAethereaTiles4)
glossyAethereaTiles4.setParent(_scene)
glossyAethereaTiles4.addComponentOrReplace(gltfShape6)
const transform15 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles4.addComponentOrReplace(transform15)

const glossyAethereaTiles5 = new Entity('glossyAethereaTiles5')
engine.addEntity(glossyAethereaTiles5)
glossyAethereaTiles5.setParent(_scene)
glossyAethereaTiles5.addComponentOrReplace(gltfShape6)
const transform16 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles5.addComponentOrReplace(transform16)

const glossyAethereaTiles6 = new Entity('glossyAethereaTiles6')
engine.addEntity(glossyAethereaTiles6)
glossyAethereaTiles6.setParent(_scene)
glossyAethereaTiles6.addComponentOrReplace(gltfShape6)
const transform17 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles6.addComponentOrReplace(transform17)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
script1.init(options)
script2.init(options)
script3.init(options)
script1.spawn(externalLink, {"url":"https://metatokyo.xyz/","name":"Metatokyo　WEB"}, createChannel(channelId, externalLink, channelBus))
script2.spawn(videoStream2, {"startOn":true,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream2","actionId":"toggle","values":{}}],"customStation":"https://player.vimeo.com/external/765576164.m3u8?s=0409f88630a5c97b26c306cd88797bebc538634c&logging=false","station":"https://theuniverse.club/live/sohoplaza/index.m3u8"}, createChannel(channelId, videoStream2, channelBus))
script3.spawn(invisibleCylinder, {"enabled":true}, createChannel(channelId, invisibleCylinder, channelBus))