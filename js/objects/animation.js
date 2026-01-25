import { loadImg, img, getCtx } from "../physics/renderer.js";

export class AnimatedSprite {
    #currentSpriteIndex
    #accumTime
    constructor(spriteSheet, spritesCoords, fps = 15, loop = false) {
        this.spriteSheet = spriteSheet
        this.spritesCoords = [...spritesCoords];
        this.playing = true;
        this.loop = loop;
        this.fps = fps;
        this.#currentSpriteIndex = 0;
        this.#accumTime = 0;
    }
    static async create(spriteSheetSrc, spritesCoords, fps = 15, loop = false)
    {
        const img = await loadImg(spriteSheetSrc);
        return new AnimatedSprite(img, spritesCoords, fps, loop);
    }
    reset()
    {
        this.#currentSpriteIndex = 0;
        this.#accumTime = 0;
        this.playing = true;
    }
    update(dt) {
        this.#accumTime += dt;
        if (1 / this.fps < this.#accumTime) {
            // advance the index
            if (this.loop)
                this.#currentSpriteIndex = (this.#currentSpriteIndex + 1) % this.spritesCoords.length;
            else if (this.#currentSpriteIndex < this.spritesCoords.length - 1)
                this.#currentSpriteIndex += 1;
            else
                this.playing = false;
            this.#accumTime = 0;
        }
        console.log(this.#accumTime)
    }
    draw(x, y, targetWidth = undefined, targetHeight = undefined) {
        let spriteCoords = this.spritesCoords[this.#currentSpriteIndex];
        let ctx = getCtx();
        const width = spriteCoords.w;
        const height = spriteCoords.h;
        ctx.drawImage(
            this.spriteSheet,              // 1. The Sprite Sheet image
            spriteCoords.x,     // 2. Source X (on the sheet)
            spriteCoords.y,     // 3. Source Y (on the sheet)
            width,              // 4. Source Width
            height,             // 5. Source Height
            x - width / 2,      // 6. Destination X (on the canvas)
            y - height / 2,     // 7. Destination Y (on the canvas)
            targetWidth || width,              // 8. Destination Width (scale if needed)
            targetHeight || height              // 9. Destination Height (scale if needed)
        );
    }
}

export class ANimationPlayer {
    constructor()
    {
        this.animations = {}
        this.currentAnimation = undefined;
        this.defaultAnimation = undefined;
    }

    play(animationName)
    {
        this.currentAnimation = animationName;
        if(this.currentAnimation)
        {
            this.animations[this.currentAnimation].reset();
        }
    }
    update(dt) {
        if(this.currentAnimation)
        {
            if(this.animations[this.currentAnimation].playing)
                this.animations[this.currentAnimation].update(dt);
            else
            {
                this.play(this.defaultAnimation)
            }
        }
    }
    draw(x, y, targetWidth = undefined, targetHeight = undefined)
    {
        if(this.currentAnimation)
            this.animations[this.currentAnimation].draw(x, y, targetWidth, targetHeight);
    } 
}