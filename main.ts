function Switch (BlueOrRed: boolean) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (!(Color)) {
        tiles.placeOnTile(sprite, tiles.getTileLocation(spawnpointX, spawnpointY))
    }
})
function endLevel (changeToLevelNum: number) {
    if (changeToLevelNum == 1) {
        tiles.setCurrentTilemap(tilemap`level`)
        spawnpointX = 4
        spawnpointY = 12
        currentLevel = 1
        tiles.placeOnTile(mySprite, tiles.getTileLocation(spawnpointX, spawnpointY))
    } else if (changeToLevelNum == 2) {
        tiles.setCurrentTilemap(tilemap`level2`)
        spawnpointX = 0
        spawnpointY = 27
        currentLevel = 2
        tiles.placeOnTile(mySprite, tiles.getTileLocation(spawnpointX, spawnpointY))
    }
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
let vx = 0
let currentLevel = 0
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
scene.cameraFollowSprite(mySprite)
endLevel(1)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    tiles.setWallAt(value, true)
}
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (controller.left.isPressed()) {
            if (Color) {
                pause(100)
                mySprite.setImage(img`
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
                    `)
                pause(100)
                mySprite.setImage(img`
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
                    `)
            } else {
                pause(100)
                mySprite.setImage(img`
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
                    `)
                pause(100)
                mySprite.setImage(img`
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
                    `)
            }
        } else if (controller.right.isPressed()) {
            if (Color) {
                pause(100)
                mySprite.setImage(img`
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
                    `)
                pause(100)
                mySprite.setImage(img`
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
                    `)
            } else {
                pause(100)
                mySprite.setImage(img`
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
                    `)
                pause(100)
                mySprite.setImage(img`
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
                    `)
            }
        } else if (Math.round(vx * 15) == 0) {
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
                pause(500)
                mySprite.setImage(img`
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . 4 . . . . 4 . . . . . 
                    . . . . . 4 . . . . 4 . . . . . 
                    . . . . . . 4 4 4 4 4 . . . . . 
                    . . . . . . 4 4 . . . . . . . . 
                    . . . . . 4 . 4 4 . . . . . . . 
                    . . . . . 4 . 4 . 4 . . . . . . 
                    . . . . 4 . . 4 . . 4 . . . . . 
                    . . . . 4 . . 4 . . . 4 . . . . 
                    . . . 4 . . . . 4 . . . . . . . 
                    . . . . . . . . 4 . . . . . . . 
                    . . . . . . . 4 . 4 . . . . . . 
                    . . . . . . . 4 . . 4 . . . . . 
                    . . . . . . . 4 . . 4 . . . . . 
                    . . . . . . . 4 . . 4 . . . . . 
                    . . . . . . 4 . . . 4 . . . . . 
                    `)
                pause(500)
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
                pause(500)
                mySprite.setImage(img`
                    . . . . . . 8 8 8 8 . . . . . . 
                    . . . . . 8 . . . . 8 . . . . . 
                    . . . . . 8 . . . . 8 . . . . . 
                    . . . . . . 8 8 8 8 8 . . . . . 
                    . . . . . . 8 8 . . . . . . . . 
                    . . . . . 8 . 8 8 . . . . . . . 
                    . . . . . 8 . 8 . 8 . . . . . . 
                    . . . . 8 . . 8 . . 8 . . . . . 
                    . . . . 8 . . 8 . . . 8 . . . . 
                    . . . 8 . . . . 8 . . . . . . . 
                    . . . . . . . . 8 . . . . . . . 
                    . . . . . . . 8 . 8 . . . . . . 
                    . . . . . . . 8 . . 8 . . . . . 
                    . . . . . . . 8 . . 8 . . . . . 
                    . . . . . . . 8 . . 8 . . . . . 
                    . . . . . . 8 . . . 8 . . . . . 
                    `)
                pause(500)
            }
        }
    }
})
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
