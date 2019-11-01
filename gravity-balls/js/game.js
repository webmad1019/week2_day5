const Game = {
    title: 'Bouncing balls app yay',
    author: 'Ger',
    license: null,
    version: '1.0',
    canvasDomObj: undefined,
    fps: 60,
    ctx: undefined,
    winW: undefined,
    winH: undefined,
    ballImg: 'img/basketball.png',
    balls: [],
    keys: {
        SPACE: 32
    },
    init: function (id) {
        this.canvasDomObj = document.getElementById(id)
        this.ctx = this.canvasDomObj.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },
    setDimensions: function () {
        this.winW = window.innerWidth
        this.winH = window.innerHeight
        this.canvasDomObj.setAttribute('width', this.winW)
        this.canvasDomObj.setAttribute('height', this.winH)
    },
    start: function () {
        setInterval(() => {
            this.clearScreen()      // orden: primero limpiar
            this.moveBalls()
            this.clearBalls()
        }, 1000 / this.fps)
    },
    setEventListeners: function () {
        document.onkeydown = e => {
            e.keyCode === this.keys.SPACE ? this.newBall() : null
        }
    },
    newBall: function () {
        let ball = new Ball(this.ctx, this.ballImg, 50, 50)
        this.balls.push(ball)
        console.log(this.balls)
    },
    moveBalls: function () {
        this.balls.forEach(ball => ball.draw())
    },
    clearBalls: function () {
        this.balls = this.balls.filter(ball => ball._posX < this.winW)
    },
    clearScreen: function () {
        this.ctx.clearRect(0, 0, this.winW, this.winH)
    }
}