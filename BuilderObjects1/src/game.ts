import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../5caa95dd-9d2f-42e1-b935-0da1a287864a/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const openAndClosedSign = new Entity('openAndClosedSign')
engine.addEntity(openAndClosedSign)
openAndClosedSign.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(21, 0, 13),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15.680000305175781, 15.680000305175781, 15.680000305175781)
})
openAndClosedSign.addComponentOrReplace(transform6)

const beanbagNavy = new Entity('beanbagNavy')
engine.addEntity(beanbagNavy)
beanbagNavy.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(11, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beanbagNavy.addComponentOrReplace(transform7)
const gltfShape2 = new GLTFShape("e4008d63-ac7b-4def-a79e-760b268b0afb/Beanbag_Navy.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
beanbagNavy.addComponentOrReplace(gltfShape2)

const drinksDispenserBlack = new Entity('drinksDispenserBlack')
engine.addEntity(drinksDispenserBlack)
drinksDispenserBlack.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(17.5, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
drinksDispenserBlack.addComponentOrReplace(transform8)
const gltfShape3 = new GLTFShape("dd0802fe-6a52-4b19-b588-8b4bc2341b6b/Drinks_Dispenser_Black.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
drinksDispenserBlack.addComponentOrReplace(gltfShape3)

const bigTable = new Entity('bigTable')
engine.addEntity(bigTable)
bigTable.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(13.5, 0, 24.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bigTable.addComponentOrReplace(transform9)
const gltfShape4 = new GLTFShape("5e4c9eb9-0b1f-4e81-a56b-4c8be2c36e5e/Big_Table.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
bigTable.addComponentOrReplace(gltfShape4)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init(options)
script1.spawn(openAndClosedSign, {"startOn":true,"clickable":true}, createChannel(channelId, openAndClosedSign, channelBus))