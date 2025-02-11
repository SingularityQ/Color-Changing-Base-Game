function Switch (BlueOrRed: boolean) {
    timer.background(function () {
        spawnParticles(mySprite, 0, 15)
    })
    if (BlueOrRed) {
        mySprite.setImage(img`
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . 8 . . . . 8 . . . . . 
            . . . . . 8 8 . . . 8 . . . . . 
            . . . . . . . 8 8 8 8 . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . 8 . 8 . 8 . . . . . . 
            . . . . 8 . . 8 . . 8 . . . . . 
            . . . 8 . . . . 8 . 8 . . . . . 
            . . . 8 . . . . 8 . . 8 . . . . 
            . . . 8 . . . . 8 . . . . . . . 
            . . . . . . . . 8 8 . . . . . . 
            . . . . . . . 8 . . 8 . . . . . 
            . . . . . . . 8 . . . 8 . . . . 
            . . . . . . 8 . . . . 8 . . . . 
            . . . . . . 8 . . . . 8 . . . . 
            . . . . . . 8 . . . . 8 . . . . 
            `)
        Color = false
    } else {
        mySprite.setImage(img`
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . 4 . . . . 4 . . . . . 
            . . . . . 4 4 . . . 4 . . . . . 
            . . . . . . . 4 4 4 4 . . . . . 
            . . . . . . 4 4 4 . . . . . . . 
            . . . . . 4 . 4 . 4 . . . . . . 
            . . . . 4 . . 4 . . 4 . . . . . 
            . . . 4 . . . . 4 . 4 . . . . . 
            . . . 4 . . . . 4 . . 4 . . . . 
            . . . 4 . . . . 4 . . . . . . . 
            . . . . . . . . 4 4 . . . . . . 
            . . . . . . . 4 . . 4 . . . . . 
            . . . . . . . 4 . . . 4 . . . . 
            . . . . . . 4 . . . . 4 . . . . 
            . . . . . . 4 . . . . 4 . . . . 
            . . . . . . 4 . . . . 4 . . . . 
            `)
        Color = true
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    if (!(Color)) {
        tiles.placeOnTile(sprite, tiles.getTileLocation(spawnpointX, spawnpointY))
    }
})
function isSpriteAnim () {
    if (mySprite.image != img`
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . 4 . . . . 4 . . . . . 
        . . . . . 4 4 . . . 4 . . . . . 
        . . . . . . . 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 . 4 . 4 . . . . . . 
        . . . . 4 . . 4 . . 4 . . . . . 
        . . . 4 . . . . 4 . 4 . . . . . 
        . . . 4 . . . . 4 . . 4 . . . . 
        . . . 4 . . . . 4 . . . . . . . 
        . . . . . . . . 4 4 . . . . . . 
        . . . . . . . 4 . . 4 . . . . . 
        . . . . . . . 4 . . . 4 . . . . 
        . . . . . . 4 . . . . 4 . . . . 
        . . . . . . 4 . . . . 4 . . . . 
        . . . . . . 4 . . . . 4 . . . . 
        ` || mySprite.image != img`
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 8 . . . . 8 . . . . . 
        . . . . . 8 8 . . . 8 . . . . . 
        . . . . . . . 8 8 8 8 . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . 8 . 8 . 8 . . . . . . 
        . . . . 8 . . 8 . . 8 . . . . . 
        . . . 8 . . . . 8 . 8 . . . . . 
        . . . 8 . . . . 8 . . 8 . . . . 
        . . . 8 . . . . 8 . . . . . . . 
        . . . . . . . . 8 8 . . . . . . 
        . . . . . . . 8 . . 8 . . . . . 
        . . . . . . . 8 . . . 8 . . . . 
        . . . . . . 8 . . . . 8 . . . . 
        . . . . . . 8 . . . . 8 . . . . 
        . . . . . . 8 . . . . 8 . . . . 
        `) {
        return true
    } else {
        return false
    }
}
function endLevel (changeToLevelNum: number) {
    if (changeToLevelNum == 1) {
        tiles.setCurrentTilemap(tilemap`level`)
        spawnpointX = 4
        spawnpointY = 12
        currentLevel = 1
        tiles.placeOnTile(mySprite, tiles.getTileLocation(spawnpointX, spawnpointY))
    } else if (changeToLevelNum == 2) {
        tiles.setCurrentTilemap(tilemap`level0`)
        spawnpointX = 0
        spawnpointY = 27
        currentLevel = 2
        tiles.placeOnTile(mySprite, tiles.getTileLocation(spawnpointX, spawnpointY))
    } else if (changeToLevelNum == 3) {
        tiles.setCurrentTilemap(tilemap`level9`)
        spawnpointX = 0
        spawnpointY = 27
        currentLevel = 3
        tiles.placeOnTile(mySprite, tiles.getTileLocation(spawnpointX, spawnpointY))
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.destroy(value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
        spike = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . 1 9 1 . . . . . . 
            . . . . . . . 1 9 1 . . . . . . 
            . . . . . . . 1 7 1 . . . . . . 
            . . . . . . 1 9 7 7 1 . . . . . 
            . . . . . 1 9 7 7 7 7 1 . . . . 
            . . . . . 1 9 7 7 7 7 1 . . . . 
            . . . . 1 9 9 7 7 7 7 7 1 . . . 
            . . . . 1 9 7 7 7 7 7 7 1 . . . 
            . . . 1 9 7 7 7 7 7 7 7 6 1 . . 
            . . . 1 9 7 7 7 7 7 7 7 6 1 . . 
            . . 1 9 9 7 7 7 7 7 7 7 6 6 1 . 
            . . 1 7 7 7 7 7 7 7 7 7 7 6 1 . 
            . . 1 6 6 6 6 6 8 6 6 6 6 8 1 . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(spike, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.setWallAt(value, true)
    }
    camera.setPosition(mySprite.x, mySprite.y)
    setColoredBlockCollision()
    Switch(false)
    setColoredBlockCollision()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Switch(Color)
    setColoredBlockCollision()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (Color) {
        tiles.placeOnTile(sprite, tiles.getTileLocation(spawnpointX, spawnpointY))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    endLevel(currentLevel + 1)
})
function setColoredBlockCollision () {
    if (Color) {
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            tiles.setTileAt(value, assets.tile`myTile2`)
            tiles.setWallAt(value, true)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
            tiles.setTileAt(value, assets.tile`myTile5`)
            tiles.setWallAt(value, false)
        }
    } else {
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            tiles.setTileAt(value, assets.tile`myTile1`)
            tiles.setWallAt(value, true)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
            tiles.setTileAt(value, assets.tile`myTile7`)
            tiles.setWallAt(value, false)
        }
    }
}
function spawnParticles (origin: Sprite, colorRangeMin: number, colorRangeMax: number) {
    let list = 0
    if (sprites.allOfKind(list).length > 100) {
        for (let index = 0; index < 100; index++) {
            sprites.destroy(sprites.allOfKind(list)._pickRandom())
        }
    } else {
        for (let index = 0; index < 25; index++) {
            projectile = sprites.createProjectileFromSprite(img`
                f 
                `, origin, randint(-75, 75), randint(-75, 75))
            projectile.setFlag(SpriteFlag.Ghost, true)
            projectile.image.fill(randint(colorRangeMin, colorRangeMax))
        }
    }
    while (sprites.allOfKind(list).length > 0) {
        pause(100)
        sprites.destroy(sprites.allOfKind(list)._pickRandom())
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(spawnpointX, spawnpointY))
    if (Color) {
        spawnParticles(otherSprite, 2, 5)
    } else {
        spawnParticles(otherSprite, 6, 9)
    }
})
let vx = 0
let spike: Sprite = null
let currentLevel = 0
let projectile: Sprite = null
let camera: Sprite = null
let mySprite: Sprite = null
let Color = false
let spawnpointY = 0
let spawnpointX = 0
spawnpointX = 4
spawnpointY = 12
// True = Orange,
// False = Blue
Color = true
mySprite = sprites.create(assets.image`mainPlayer`, SpriteKind.Player)
mySprite.ay = 300
camera = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
scene.cameraFollowSprite(camera)
endLevel(1)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    tiles.setWallAt(value, true)
}
projectile = sprites.createProjectileFromSprite(img`
    f 
    `, mySprite, randint(-75, 75), randint(-75, 75))
projectile.setFlag(SpriteFlag.AutoDestroy, true)
camera.setPosition(mySprite.x, mySprite.y)
forever(function () {
    if (controller.left.isPressed()) {
        vx += -0.2
    }
    if (controller.right.isPressed()) {
        vx += 0.2
    }
    if (controller.up.isPressed()) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.vy += -160
        }
    }
})
forever(function () {
    vx = vx * 0.9
    mySprite.x += vx
})
forever(function () {
    camera.x += -0.1 * (camera.x - mySprite.x)
    camera.y += -0.1 * (camera.y - mySprite.y)
})
game.onUpdateInterval(100, function () {
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        value.vy += 25
    }
})
game.onUpdateInterval(200, function () {
    if (controller.left.isPressed()) {
        if (Color) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . 4 . . . . . 4 . . . . . . . 
                . . . 4 . . 4 4 4 4 4 4 . . . . 
                . . . . 4 4 . . 4 . . . 4 . . . 
                . . . . . . . . 4 . . . 4 . . . 
                . . . . . . . . 4 . . . 4 . . . 
                . . . . . . . . 4 . . . . . . . 
                . . . . . . . . 4 4 . . . . . . 
                . . . . . . . 4 4 . 4 . . . . . 
                . . . . . . 4 . . . . 4 4 4 4 . 
                . . . . . 4 . . . . . . . . . . 
                . . . . . 4 . . . . . . . . . . 
                `,img`
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . . 4 . . . . . . . 
                . . . 4 . . . 4 4 4 . . . . . . 
                . . . . 4 . 4 . 4 . 4 . . . . . 
                . . . . . 4 4 . 4 4 . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 4 4 . . . . . . . 
                . . . . . 4 . . 4 . . . . . . . 
                . . . . 4 . . . . 4 4 4 4 4 . . 
                . . . . 4 . . . . . . . . . . . 
                . . . . 4 . . . . . . . . . . . 
                . . . . 4 . . . . . . . . . . . 
                `],
            100,
            false
            )
        } else {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . 8 . . . . . 8 . . . . . . . 
                . . . 8 . . 8 8 8 8 8 8 . . . . 
                . . . . 8 8 . . 8 . . . 8 . . . 
                . . . . . . . . 8 . . . 8 . . . 
                . . . . . . . . 8 . . . 8 . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . 8 8 . . . . . . 
                . . . . . . . 8 8 . 8 . . . . . 
                . . . . . . 8 . . . . 8 8 8 8 . 
                . . . . . 8 . . . . . . . . . . 
                . . . . . 8 . . . . . . . . . . 
                `,img`
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . 8 . . . 8 8 8 . . . . . . 
                . . . . 8 . 8 . 8 . 8 . . . . . 
                . . . . . 8 8 . 8 8 . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . 8 . . 8 . . . . . . . 
                . . . . 8 . . . . 8 8 8 8 8 . . 
                . . . . 8 . . . . . . . . . . . 
                . . . . 8 . . . . . . . . . . . 
                . . . . 8 . . . . . . . . . . . 
                `],
            100,
            false
            )
        }
    } else if (controller.right.isPressed()) {
        if (Color) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . 4 . . . . . 4 . . 
                . . . . 4 4 4 4 4 4 . . 4 . . . 
                . . . 4 . . . 4 . . 4 4 . . . . 
                . . . 4 . . . 4 . . . . . . . . 
                . . . 4 . . . 4 . . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . 4 4 . . . . . . . . 
                . . . . . 4 . 4 4 . . . . . . . 
                . 4 4 4 4 . . . . 4 . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . . . . . . . 4 . . . . . 
                `,img`
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . 4 4 4 . . . 4 . . . 
                . . . . . 4 . 4 . 4 . 4 . . . . 
                . . . . . . 4 4 . 4 4 . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . . 4 4 4 . . . . . . 
                . . . . . . . 4 . . 4 . . . . . 
                . . 4 4 4 4 4 . . . . 4 . . . . 
                . . . . . . . . . . . 4 . . . . 
                . . . . . . . . . . . 4 . . . . 
                . . . . . . . . . . . 4 . . . . 
                `],
            100,
            false
            )
        } else {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . . . 8 . . . . . 8 . . 
                . . . . 8 8 8 8 8 8 . . 8 . . . 
                . . . 8 . . . 8 . . 8 8 . . . . 
                . . . 8 . . . 8 . . . . . . . . 
                . . . 8 . . . 8 . . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . 8 8 . . . . . . . . 
                . . . . . 8 . 8 8 . . . . . . . 
                . 8 8 8 8 . . . . 8 . . . . . . 
                . . . . . . . . . . 8 . . . . . 
                . . . . . . . . . . 8 . . . . . 
                `,img`
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . . . . . 8 8 8 . . . 8 . . . 
                . . . . . 8 . 8 . 8 . 8 . . . . 
                . . . . . . 8 8 . 8 8 . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . . 8 8 8 . . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . 8 8 8 8 8 . . . . 8 . . . . 
                . . . . . . . . . . . 8 . . . . 
                . . . . . . . . . . . 8 . . . . 
                . . . . . . . . . . . 8 . . . . 
                `],
            100,
            false
            )
        }
    }
    if (isSpriteAnim()) {
        if (Color) {
            mySprite.setImage(img`
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 . . . . 4 . . . . . 
                . . . . . 4 4 . . . 4 . . . . . 
                . . . . . . . 4 4 4 4 . . . . . 
                . . . . . . 4 4 4 . . . . . . . 
                . . . . . 4 . 4 . 4 . . . . . . 
                . . . . 4 . . 4 . . 4 . . . . . 
                . . . 4 . . . . 4 . 4 . . . . . 
                . . . 4 . . . . 4 . . 4 . . . . 
                . . . 4 . . . . 4 . . . . . . . 
                . . . . . . . . 4 4 . . . . . . 
                . . . . . . . 4 . . 4 . . . . . 
                . . . . . . . 4 . . . 4 . . . . 
                . . . . . . 4 . . . . 4 . . . . 
                . . . . . . 4 . . . . 4 . . . . 
                . . . . . . 4 . . . . 4 . . . . 
                `)
        } else {
            mySprite.setImage(img`
                . . . . . . 8 8 8 8 . . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . 8 8 . . . 8 . . . . . 
                . . . . . . . 8 8 8 8 . . . . . 
                . . . . . . 8 8 8 . . . . . . . 
                . . . . . 8 . 8 . 8 . . . . . . 
                . . . . 8 . . 8 . . 8 . . . . . 
                . . . 8 . . . . 8 . 8 . . . . . 
                . . . 8 . . . . 8 . . 8 . . . . 
                . . . 8 . . . . 8 . . . . . . . 
                . . . . . . . . 8 8 . . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . . 8 . . . . 
                . . . . . . 8 . . . . 8 . . . . 
                . . . . . . 8 . . . . 8 . . . . 
                . . . . . . 8 . . . . 8 . . . . 
                `)
        }
    }
})
