class Ball {

    constructor(ctx, url, width, height) {
        this._ctx = ctx
        this._image = new Image()
        this._image.src = url

        this._width = width
        this._height = height
        this._posX = 0
        this._posY = 0
        this._velX = 10
        this._velY = 1
        this._gravity = .45
    }

    draw() {
        this.move()
        this._ctx.drawImage(this._image, this._posX, this._posY, this._width, this._height)
    }

    move() {
        this._posX += this._velX
        this._velY += this._gravity
        this._posY += this._velY

        this._posY > window.innerHeight - this._height ? this._velY *= -1 : null
    }
}