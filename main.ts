function lvl_4__Monster_15 () {
    story.spriteMoveToLocation(Monster_15, 120, 165, 37.5)
    story.spriteMoveToLocation(Monster_15, 90, 135, 37.5)
    story.spriteMoveToLocation(Monster_15, 120, 105, 37.5)
    story.spriteMoveToLocation(Monster_15, 150, 135, 37.5)
}
function Lvl_2__Monster_12 () {
    if (Monster_12.isHittingTile(CollisionDirection.Bottom)) {
        Monster_12.setVelocity(0, -60)
    }
    if (Monster_12.isHittingTile(CollisionDirection.Top)) {
        Monster_12.setVelocity(0, 60)
    }
}
function Lvl_2__Monster_1 () {
    if (Monster_1.isHittingTile(CollisionDirection.Bottom)) {
        Monster_1.setVelocity(0, -60)
    }
    if (Monster_1.isHittingTile(CollisionDirection.Top)) {
        Monster_1.setVelocity(0, 60)
    }
}
function Level_3_monster_2_movement () {
    if (Level == 3) {
        story.spriteMoveToLocation(Monster_2, 200, 121, 30)
        story.spriteMoveToLocation(Monster_2, 200, 167, 30)
        story.spriteMoveToLocation(Monster_2, 153, 167, 30)
        story.spriteMoveToLocation(Monster_2, 153, 121, 30)
    }
}
function lvl_4__Monster_14 () {
    story.spriteMoveToLocation(Monster_14, 120, 150, 18.75)
    story.spriteMoveToLocation(Monster_14, 105, 135, 18.75)
    story.spriteMoveToLocation(Monster_14, 120, 120, 18.75)
    story.spriteMoveToLocation(Monster_14, 135, 135, 18.75)
}
function Level_3_monster_9_movement () {
    if (Level == 3) {
        story.spriteMoveToLocation(Monster_9, 153, 167, 30)
        story.spriteMoveToLocation(Monster_9, 153, 121, 30)
        story.spriteMoveToLocation(Monster_9, 200, 121, 30)
        story.spriteMoveToLocation(Monster_9, 200, 167, 30)
    }
}
function Level_2_Start () {
    if (Level == 2) {
        tiles.setTilemap(tilemap`level3`)
        Coin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        Monster_1 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_2 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_3 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_4 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_5 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_6 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_7 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_8 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_9 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_10 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_11 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_12 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Coin.setPosition(193, 128)
        Princess.setPosition(60, 128)
        Monster_1.setPosition(105, 90)
        Monster_2.setPosition(121, 165)
        Monster_3.setPosition(137, 90)
        Monster_4.setPosition(153, 165)
        Monster_5.setPosition(169, 90)
        Monster_6.setPosition(185, 165)
        Monster_7.setPosition(201, 90)
        Monster_8.setPosition(217, 165)
        Monster_9.setPosition(233, 90)
        Monster_10.setPosition(249, 165)
        Monster_11.setPosition(265, 90)
        Monster_12.setPosition(281, 165)
        Monster_1.setVelocity(0, -60)
        Monster_2.setVelocity(0, 60)
        Monster_3.setVelocity(0, -60)
        Monster_4.setVelocity(0, 60)
        Monster_5.setVelocity(0, -60)
        Monster_6.setVelocity(0, 60)
        Monster_7.setVelocity(0, -60)
        Monster_8.setVelocity(0, 60)
        Monster_9.setVelocity(0, -60)
        Monster_10.setVelocity(0, 60)
        Monster_11.setVelocity(0, -60)
        Monster_12.setVelocity(0, 60)
    }
}
function Level_3_Start () {
    if (Level == 3) {
        tiles.setTilemap(tilemap`level4`)
        controller.moveSprite(Princess, 40, 40)
        Monster_1 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_2 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_3 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_4 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_5 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_6 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_7 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_8 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_9 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_10 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_11 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Coin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        Princess.setPosition(175, 140)
        Coin.setPosition(153, 106)
        Monster_1.setPosition(154, 121)
        Monster_2.setPosition(167, 121)
        Monster_3.setPosition(180, 121)
        Monster_4.setPosition(193, 121)
        Monster_5.setPosition(199, 127)
        Monster_6.setPosition(199, 139)
        Monster_7.setPosition(186, 167)
        Monster_8.setPosition(173, 167)
        Monster_9.setPosition(160, 167)
        Monster_10.setPosition(153, 153)
        Monster_11.setPosition(153, 137)
        Monster_1.setVelocity(30, 0)
        Monster_2.setVelocity(30, 0)
        Monster_3.setVelocity(30, 0)
        Monster_4.setVelocity(30, 0)
        Monster_5.setVelocity(0, 30)
        Monster_6.setVelocity(0, 30)
        Monster_7.setVelocity(-30, 0)
        Monster_8.setVelocity(-30, 0)
        Monster_9.setVelocity(-30, 0)
        Monster_10.setVelocity(0, -30)
        Monster_11.setVelocity(0, -30)
    }
}
function Lvl_2__Monster_7 () {
    if (Monster_7.isHittingTile(CollisionDirection.Bottom)) {
        Monster_7.setVelocity(0, -60)
    }
    if (Monster_7.isHittingTile(CollisionDirection.Top)) {
        Monster_7.setVelocity(0, 60)
    }
}
function Lvl_2_Monster_5 () {
    if (Monster_5.isHittingTile(CollisionDirection.Bottom)) {
        Monster_5.setVelocity(0, -60)
    }
    if (Monster_5.isHittingTile(CollisionDirection.Top)) {
        Monster_5.setVelocity(0, 60)
    }
}
function Level_3_monster_1_movement () {
    if (Level == 3) {
        story.spriteMoveToLocation(Monster_1, 200, 121, 30)
        story.spriteMoveToLocation(Monster_1, 200, 167, 30)
        story.spriteMoveToLocation(Monster_1, 153, 167, 30)
        story.spriteMoveToLocation(Monster_1, 153, 121, 30)
    }
}
function lvl_4__Monster_16 () {
    story.spriteMoveToLocation(Monster_16, 120, 180, 56.25)
    story.spriteMoveToLocation(Monster_16, 75, 135, 56.25)
    story.spriteMoveToLocation(Monster_16, 120, 90, 56.25)
    story.spriteMoveToLocation(Monster_16, 165, 135, 56.25)
}
function lvl_4__Monster_10 () {
    story.spriteMoveToLocation(Monster_10, 120, 75, 75)
    story.spriteMoveToLocation(Monster_10, 180, 135, 75)
    story.spriteMoveToLocation(Monster_10, 120, 195, 75)
    story.spriteMoveToLocation(Monster_10, 60, 135, 75)
}
function Level_3_monster_7_movement () {
    if (Level == 3) {
        story.spriteMoveToLocation(Monster_7, 153, 167, 30)
        story.spriteMoveToLocation(Monster_7, 153, 121, 30)
        story.spriteMoveToLocation(Monster_7, 200, 121, 30)
        story.spriteMoveToLocation(Monster_7, 200, 167, 30)
    }
}
function Lvl_2__Monster_6 () {
    if (Monster_6.isHittingTile(CollisionDirection.Bottom)) {
        Monster_6.setVelocity(0, -60)
    }
    if (Monster_6.isHittingTile(CollisionDirection.Top)) {
        Monster_6.setVelocity(0, 60)
    }
}
function Lvl_2_Monster_2 () {
    if (Monster_2.isHittingTile(CollisionDirection.Bottom)) {
        Monster_2.setVelocity(0, -60)
    }
    if (Monster_2.isHittingTile(CollisionDirection.Top)) {
        Monster_2.setVelocity(0, 60)
    }
}
function Level_3_monster_11_movement () {
    if (Level == 3) {
        story.spriteMoveToLocation(Monster_11, 153, 121, 30)
        story.spriteMoveToLocation(Monster_11, 200, 121, 30)
        story.spriteMoveToLocation(Monster_11, 200, 167, 30)
        story.spriteMoveToLocation(Monster_11, 153, 167, 30)
    }
}
function lvl_4__Monster_7 () {
    story.spriteMoveToLocation(Monster_7, 90, 135, 37.5)
    story.spriteMoveToLocation(Monster_7, 120, 105, 37.5)
    story.spriteMoveToLocation(Monster_7, 150, 135, 37.5)
    story.spriteMoveToLocation(Monster_7, 120, 165, 37.5)
}
function Level_3_monster_10_movement () {
    if (Level == 3) {
        story.spriteMoveToLocation(Monster_10, 153, 121, 30)
        story.spriteMoveToLocation(Monster_10, 200, 121, 30)
        story.spriteMoveToLocation(Monster_10, 200, 167, 30)
        story.spriteMoveToLocation(Monster_10, 153, 167, 30)
    }
}
function lvl_4__Monster_12 () {
    story.spriteMoveToLocation(Monster_12, 120, 105, 37.5)
    story.spriteMoveToLocation(Monster_12, 150, 135, 37.5)
    story.spriteMoveToLocation(Monster_12, 120, 165, 37.5)
    story.spriteMoveToLocation(Monster_12, 90, 135, 37.5)
}
function Level_3_monster_5_movement () {
    if (Level == 3) {
        story.spriteMoveToLocation(Monster_5, 200, 167, 30)
        story.spriteMoveToLocation(Monster_5, 153, 167, 30)
        story.spriteMoveToLocation(Monster_5, 153, 121, 30)
        story.spriteMoveToLocation(Monster_5, 200, 121, 30)
    }
}
function lvl_4__Monster_3 () {
    story.spriteMoveToLocation(Monster_3, 150, 135, 37.5)
    story.spriteMoveToLocation(Monster_3, 120, 165, 37.5)
    story.spriteMoveToLocation(Monster_3, 90, 135, 37.5)
    story.spriteMoveToLocation(Monster_3, 120, 105, 37.5)
}
function lvl_4__Monster_8 () {
    story.spriteMoveToLocation(Monster_8, 75, 135, 56.25)
    story.spriteMoveToLocation(Monster_8, 120, 90, 56.25)
    story.spriteMoveToLocation(Monster_8, 165, 135, 56.25)
    story.spriteMoveToLocation(Monster_8, 120, 180, 56.25)
}
function Level_3_monster_3_movement () {
    if (Level == 3) {
        story.spriteMoveToLocation(Monster_3, 200, 121, 30)
        story.spriteMoveToLocation(Monster_3, 200, 167, 30)
        story.spriteMoveToLocation(Monster_3, 153, 167, 30)
        story.spriteMoveToLocation(Monster_3, 153, 121, 30)
    }
}
function Lvl_2__Monster_10 () {
    if (Monster_10.isHittingTile(CollisionDirection.Bottom)) {
        Monster_10.setVelocity(0, -60)
    }
    if (Monster_10.isHittingTile(CollisionDirection.Top)) {
        Monster_10.setVelocity(0, 60)
    }
}
function Lvl_2__Monster_3 () {
    if (Monster_3.isHittingTile(CollisionDirection.Bottom)) {
        Monster_3.setVelocity(0, -60)
    }
    if (Monster_3.isHittingTile(CollisionDirection.Top)) {
        Monster_3.setVelocity(0, 60)
    }
}
function Change_level_when_completing_map () {
    if (Level == 1) {
        Level += 1
        Monster_1.destroy()
        Monster_2.destroy()
        Monster_3.destroy()
        Monster_4.destroy()
        Level_2_Start()
    }
    if (Level == 2) {
        if (Coin_value == 1) {
            Level += 1
            Monster_1.destroy()
            Monster_2.destroy()
            Monster_3.destroy()
            Monster_4.destroy()
            Monster_5.destroy()
            Monster_6.destroy()
            Monster_7.destroy()
            Monster_8.destroy()
            Monster_9.destroy()
            Monster_10.destroy()
            Monster_11.destroy()
            Monster_12.destroy()
            Coin_value = 0
            Level_3_Start()
        }
    }
    if (Level == 3) {
        if (Coin_value == 1) {
            Monster_5.setVelocity(0, 0)
            story.cancelSpriteMovement(Monster_1)
            story.cancelSpriteMovement(Monster_2)
            story.cancelSpriteMovement(Monster_3)
            story.cancelSpriteMovement(Monster_4)
            story.cancelSpriteMovement(Monster_5)
            story.cancelSpriteMovement(Monster_6)
            story.cancelSpriteMovement(Monster_7)
            story.cancelSpriteMovement(Monster_8)
            story.cancelSpriteMovement(Monster_9)
            story.cancelSpriteMovement(Monster_10)
            story.cancelSpriteMovement(Monster_11)
            Monster_1.destroy()
            Monster_2.destroy()
            Monster_3.destroy()
            Monster_4.destroy()
            Monster_5.destroy()
            Monster_6.destroy()
            Monster_7.destroy()
            Monster_8.destroy()
            Monster_9.destroy()
            Monster_10.destroy()
            Monster_11.destroy()
            Level += 1
            Coin_value = 0
            Level_4_Start()
        }
    }
    if (Level == 4) {
        if (Coin_value == 3) {
            game.over(true)
        }
    }
}
function lvl_4__Monster_17 () {
    story.spriteMoveToLocation(Monster_17, 120, 195, 75)
    story.spriteMoveToLocation(Monster_17, 60, 135, 75)
    story.spriteMoveToLocation(Monster_17, 120, 75, 75)
    story.spriteMoveToLocation(Monster_17, 180, 135, 75)
}
function Level_3_monster_4_movement () {
    if (Level == 3) {
        story.spriteMoveToLocation(Monster_4, 200, 121, 30)
        story.spriteMoveToLocation(Monster_4, 200, 167, 30)
        story.spriteMoveToLocation(Monster_4, 153, 167, 30)
        story.spriteMoveToLocation(Monster_4, 153, 121, 30)
    }
}
function lvl_4__Monster_2 () {
    story.spriteMoveToLocation(Monster_2, 165, 135, 56.25)
    story.spriteMoveToLocation(Monster_2, 120, 180, 56.25)
    story.spriteMoveToLocation(Monster_2, 75, 135, 56.25)
    story.spriteMoveToLocation(Monster_2, 120, 90, 56.25)
}
function Level_4_Start () {
    if (Level == 4) {
        tiles.setTilemap(tilemap`level 4`)
        controller.moveSprite(Princess, 50, 50)
        Monster_1 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_2 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_3 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_4 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_6 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_7 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_8 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_9 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_10 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_11 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_12 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_13 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_14 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_15 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_16 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Monster_17 = sprites.create(img`
            . f f f f f f f f . 
            f f 1 2 1 1 2 1 f f 
            f f 2 2 2 2 2 2 f f 
            f 1 2 1 2 2 1 2 1 f 
            f 2 2 1 2 2 1 2 2 f 
            f 2 1 1 2 2 1 1 2 f 
            f 2 f f f f f f 2 f 
            f f d f d d f d f f 
            f f d d d d d d f f 
            . f f f f f f f f . 
            `, SpriteKind.Enemy)
        Coin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        Coin_2 = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        Coin_3 = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        Princess.setPosition(110, 24)
        Coin.setPosition(165, 135)
        Coin_2.setPosition(120, 90)
        Coin_3.setPosition(120, 180)
        Monster_1.setPosition(120, 75)
        Monster_2.setPosition(120, 90)
        Monster_3.setPosition(120, 105)
        Monster_4.setPosition(120, 120)
        Monster_6.setPosition(120, 150)
        Monster_7.setPosition(120, 165)
        Monster_8.setPosition(120, 180)
        Monster_9.setPosition(120, 195)
        Monster_10.setPosition(60, 135)
        Monster_11.setPosition(75, 135)
        Monster_12.setPosition(90, 135)
        Monster_13.setPosition(105, 135)
        Monster_14.setPosition(135, 135)
        Monster_15.setPosition(150, 135)
        Monster_16.setPosition(165, 135)
        Monster_17.setPosition(180, 135)
        Monster_1.setVelocity(0, 0)
        Monster_2.setVelocity(0, 0)
        Monster_3.setVelocity(0, 0)
        Monster_4.setVelocity(0, 0)
        Monster_5.setVelocity(0, 0)
        Monster_6.setVelocity(0, 0)
        Monster_7.setVelocity(0, 0)
        Monster_8.setVelocity(0, 0)
        Monster_9.setVelocity(0, 0)
        Monster_10.setVelocity(0, 0)
        Monster_11.setVelocity(0, 0)
        Monster_12.setVelocity(0, 0)
        Monster_13.setVelocity(0, 0)
        Monster_14.setVelocity(0, 0)
        Monster_15.setVelocity(0, 0)
        Monster_16.setVelocity(0, 0)
        Monster_17.setVelocity(0, 0)
    }
}
function Level_3_monster_8_movement () {
    if (Level == 3) {
        story.spriteMoveToLocation(Monster_8, 153, 167, 30)
        story.spriteMoveToLocation(Monster_8, 153, 121, 30)
        story.spriteMoveToLocation(Monster_8, 200, 121, 30)
        story.spriteMoveToLocation(Monster_8, 200, 167, 30)
    }
}
function lvl_4__Monster_11 () {
    story.spriteMoveToLocation(Monster_11, 120, 90, 56.25)
    story.spriteMoveToLocation(Monster_11, 165, 135, 56.25)
    story.spriteMoveToLocation(Monster_11, 120, 180, 56.25)
    story.spriteMoveToLocation(Monster_11, 75, 135, 56.25)
}
function Lvl_2__Monster_11 () {
    if (Monster_11.isHittingTile(CollisionDirection.Bottom)) {
        Monster_11.setVelocity(0, -60)
    }
    if (Monster_11.isHittingTile(CollisionDirection.Top)) {
        Monster_11.setVelocity(0, 60)
    }
}
function lvl_4__Monster_4 () {
    story.spriteMoveToLocation(Monster_4, 135, 135, 18.75)
    story.spriteMoveToLocation(Monster_4, 120, 150, 18.75)
    story.spriteMoveToLocation(Monster_4, 105, 135, 18.75)
    story.spriteMoveToLocation(Monster_4, 120, 120, 18.75)
}
function Lvl_2__Monster_4 () {
    if (Monster_4.isHittingTile(CollisionDirection.Bottom)) {
        Monster_4.setVelocity(0, -60)
    }
    if (Monster_4.isHittingTile(CollisionDirection.Top)) {
        Monster_4.setVelocity(0, 60)
    }
}
function lvl_4__Monster_1 () {
    story.spriteMoveToLocation(Monster_1, 180, 135, 75)
    story.spriteMoveToLocation(Monster_1, 120, 195, 75)
    story.spriteMoveToLocation(Monster_1, 60, 135, 75)
    story.spriteMoveToLocation(Monster_1, 120, 75, 75)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (Level == 1) {
        music.baDing.play()
        Coin.destroy()
        Coin_value = 1
    }
    if (Level == 2) {
        Coin_value = 1
        Coin.destroy()
        music.baDing.play()
    }
    if (Level == 3) {
        Coin_value = 1
        Coin.destroy()
        music.baDing.play()
    }
    if (Level == 4) {
        if (Coin_value == 2) {
            music.baDing.play()
            Coin_3.destroy()
            Coin_value = 3
        }
        if (Coin_value == 1) {
            music.baDing.play()
            Coin.destroy()
            Coin_value = 2
        }
        if (Coin_value == 0) {
            music.baDing.play()
            Coin_2.destroy()
            Coin_value = 1
        }
    }
})
function Level_3_monster_6_movement () {
    if (Level == 3) {
        story.spriteMoveToLocation(Monster_6, 200, 167, 30)
        story.spriteMoveToLocation(Monster_6, 153, 167, 30)
        story.spriteMoveToLocation(Monster_6, 153, 121, 30)
        story.spriteMoveToLocation(Monster_6, 200, 121, 30)
    }
}
function lvl_4__Monster_9 () {
    story.spriteMoveToLocation(Monster_9, 60, 135, 75)
    story.spriteMoveToLocation(Monster_9, 120, 75, 75)
    story.spriteMoveToLocation(Monster_9, 180, 135, 75)
    story.spriteMoveToLocation(Monster_9, 120, 195, 75)
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass1, function (sprite, location) {
    if (Level == 3) {
        Change_level_when_completing_map()
    }
})
function Lvl_2__Monster_8 () {
    if (Monster_8.isHittingTile(CollisionDirection.Bottom)) {
        Monster_8.setVelocity(0, -60)
    }
    if (Monster_8.isHittingTile(CollisionDirection.Top)) {
        Monster_8.setVelocity(0, 60)
    }
}
function lvl_4__Monster_6 () {
    story.spriteMoveToLocation(Monster_6, 105, 135, 18.75)
    story.spriteMoveToLocation(Monster_6, 120, 120, 18.75)
    story.spriteMoveToLocation(Monster_6, 135, 135, 18.75)
    story.spriteMoveToLocation(Monster_6, 120, 150, 18.75)
}
function Start_level_1 () {
    tiles.setTilemap(tilemap`level5`)
    Princess.setPosition(40, 103)
    Monster_1 = sprites.create(img`
        . f f f f f f f f . 
        f f 1 2 1 1 2 1 f f 
        f f 2 2 2 2 2 2 f f 
        f 1 2 1 2 2 1 2 1 f 
        f 2 2 1 2 2 1 2 2 f 
        f 2 1 1 2 2 1 1 2 f 
        f 2 f f f f f f 2 f 
        f f d f d d f d f f 
        f f d d d d d d f f 
        . f f f f f f f f . 
        `, SpriteKind.Enemy)
    Monster_1.setBounceOnWall(true)
    Monster_1.setPosition(290, 175)
    Monster_2 = sprites.create(img`
        . f f f f f f f f . 
        f f 1 2 1 1 2 1 f f 
        f f 2 2 2 2 2 2 f f 
        f 1 2 1 2 2 1 2 1 f 
        f 2 2 1 2 2 1 2 2 f 
        f 2 1 1 2 2 1 1 2 f 
        f 2 f f f f f f 2 f 
        f f d f d d f d f f 
        f f d d d d d d f f 
        . f f f f f f f f . 
        `, SpriteKind.Enemy)
    Monster_2.setBounceOnWall(true)
    Monster_2.setPosition(290, 130)
    Monster_3 = sprites.create(img`
        . f f f f f f f f . 
        f f 1 2 1 1 2 1 f f 
        f f 2 2 2 2 2 2 f f 
        f 1 2 1 2 2 1 2 1 f 
        f 2 2 1 2 2 1 2 2 f 
        f 2 1 1 2 2 1 1 2 f 
        f 2 f f f f f f 2 f 
        f f d f d d f d f f 
        f f d d d d d d f f 
        . f f f f f f f f . 
        `, SpriteKind.Enemy)
    Monster_3.setBounceOnWall(true)
    Monster_3.setPosition(115, 150)
    Monster_4 = sprites.create(img`
        . f f f f f f f f . 
        f f 1 2 1 1 2 1 f f 
        f f 2 2 2 2 2 2 f f 
        f 1 2 1 2 2 1 2 1 f 
        f 2 2 1 2 2 1 2 2 f 
        f 2 1 1 2 2 1 1 2 f 
        f 2 f f f f f f 2 f 
        f f d f d d f d f f 
        f f d d d d d d f f 
        . f f f f f f f f . 
        `, SpriteKind.Enemy)
    Monster_4.setBounceOnWall(true)
    Monster_4.setPosition(115, 110)
    Monster_1.setVelocity(190, 0)
    Monster_2.setVelocity(190, 0)
    Monster_3.setVelocity(-190, 0)
    Monster_4.setVelocity(-190, 0)
}
function Lvl_2__Monster_9 () {
    if (Monster_9.isHittingTile(CollisionDirection.Bottom)) {
        Monster_9.setVelocity(0, -60)
    }
    if (Monster_9.isHittingTile(CollisionDirection.Top)) {
        Monster_9.setVelocity(0, 60)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    Change_level_when_completing_map()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Level == 1) {
        info.changeScoreBy(1)
        Princess.setPosition(40, 103)
    }
    if (Level == 2) {
        Coin.destroy()
        info.changeScoreBy(1)
        Princess.setPosition(58, 118)
        Coin_value = 0
        Coin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        Coin.setPosition(193, 125)
    }
    if (Level == 3) {
        Coin.destroy()
        info.changeScoreBy(1)
        Princess.setPosition(175, 140)
        Coin_value = 0
        Coin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        Coin.setPosition(153, 106)
    }
    if (Level == 4) {
        Coin.destroy()
        Coin_2.destroy()
        info.changeScoreBy(1)
        Coin_3.destroy()
        Princess.setPosition(110, 24)
        Coin_value = 0
        Coin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        Coin_2 = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        Coin_3 = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Food)
        Coin.setPosition(165, 135)
        Coin_2.setPosition(120, 90)
        Coin_3.setPosition(120, 180)
    }
})
function lvl_4__Monster_13 () {
    story.spriteMoveToLocation(Monster_13, 120, 120, 18.75)
    story.spriteMoveToLocation(Monster_13, 135, 135, 18.75)
    story.spriteMoveToLocation(Monster_13, 120, 150, 18.75)
    story.spriteMoveToLocation(Monster_13, 105, 135, 18.75)
}
let Coin_3: Sprite = null
let Coin_2: Sprite = null
let Monster_13: Sprite = null
let Monster_17: Sprite = null
let Monster_16: Sprite = null
let Monster_11: Sprite = null
let Monster_10: Sprite = null
let Monster_8: Sprite = null
let Monster_7: Sprite = null
let Monster_6: Sprite = null
let Monster_5: Sprite = null
let Monster_4: Sprite = null
let Monster_3: Sprite = null
let Coin: Sprite = null
let Monster_9: Sprite = null
let Monster_14: Sprite = null
let Monster_2: Sprite = null
let Monster_1: Sprite = null
let Monster_12: Sprite = null
let Monster_15: Sprite = null
let Coin_value = 0
let Princess: Sprite = null
let Level = 0
Level = 1
Princess = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Coin_value = 0
scene.cameraFollowSprite(Princess)
controller.moveSprite(Princess, 60, 60)
info.setScore(0)
Start_level_1()
game.onUpdate(function () {
    if (Level == 2) {
        if (Monster_1.isHittingTile(CollisionDirection.Top)) {
            Monster_1.setVelocity(0, 75)
            Monster_2.setVelocity(0, -75)
            Monster_3.setVelocity(0, 75)
            Monster_4.setVelocity(0, -75)
            Monster_5.setVelocity(0, 75)
            Monster_6.setVelocity(0, -75)
            Monster_7.setVelocity(0, 75)
            Monster_8.setVelocity(0, -75)
            Monster_9.setVelocity(0, 75)
            Monster_10.setVelocity(0, -75)
            Monster_11.setVelocity(0, 75)
            Monster_12.setVelocity(0, -75)
        }
        if (Monster_1.isHittingTile(CollisionDirection.Bottom)) {
            Monster_1.setVelocity(0, -75)
            Monster_2.setVelocity(0, 75)
            Monster_3.setVelocity(0, -75)
            Monster_4.setVelocity(0, 75)
            Monster_5.setVelocity(0, -75)
            Monster_6.setVelocity(0, 75)
            Monster_7.setVelocity(0, -75)
            Monster_8.setVelocity(0, 75)
            Monster_9.setVelocity(0, -75)
            Monster_10.setVelocity(0, 75)
            Monster_11.setVelocity(0, -75)
            Monster_12.setVelocity(0, 75)
        }
    }
})
game.onUpdate(function () {
    if (Monster_1.isHittingTile(CollisionDirection.Left)) {
        Monster_1.setVelocity(190, 0)
        Monster_2.setVelocity(190, 0)
        Monster_3.setVelocity(190, 0)
        Monster_4.setVelocity(190, 0)
    }
    if (Monster_1.isHittingTile(CollisionDirection.Right)) {
        Monster_1.setVelocity(-190, 0)
        Monster_2.setVelocity(-190, 0)
        Monster_3.setVelocity(-190, 0)
        Monster_4.setVelocity(-190, 0)
    }
})
forever(function () {
    if (Level == 3) {
        Level_3_monster_10_movement()
    }
})
forever(function () {
    if (Level == 3) {
        Level_3_monster_3_movement()
    }
})
forever(function () {
    if (Level == 3) {
        Level_3_monster_5_movement()
    }
})
forever(function () {
    if (Level == 3) {
        Level_3_monster_1_movement()
    }
})
forever(function () {
    if (Level == 3) {
        Level_3_monster_8_movement()
    }
})
forever(function () {
    if (Level == 3) {
        Level_3_monster_6_movement()
    }
})
forever(function () {
    if (Level == 3) {
        Level_3_monster_2_movement()
    }
})
forever(function () {
    if (Level == 3) {
        Level_3_monster_7_movement()
    }
})
forever(function () {
    if (Level == 3) {
        Level_3_monster_4_movement()
    }
})
forever(function () {
    if (Level == 3) {
        Level_3_monster_11_movement()
    }
})
forever(function () {
    if (Level == 3) {
        Level_3_monster_9_movement()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_2()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_1()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_3()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_11()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_16()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_6()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_15()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_17()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_9()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_10()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_8()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_14()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_12()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_7()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_4()
    }
})
forever(function () {
    if (Level == 4) {
        lvl_4__Monster_13()
    }
})
