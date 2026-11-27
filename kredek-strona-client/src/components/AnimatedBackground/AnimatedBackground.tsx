
import { useEffect, useRef } from "react";
import "./animatedBackground.scss"

const CANVAS_HEIGHT = 1000;
const CANVAS_WIDTH = 10000;

//toCanvasCoordinateX
function canX(x: number): number {
    return x + CANVAS_WIDTH / 2;
}
//toCanvasCoordinateY
function canY(y: number): number {
    return -y + CANVAS_HEIGHT / 2;
}

function easeInOutCirc(t: number): number {
    return t * t * (3 - 2 * t)
}

function isInViewBox(x: number, y: number): boolean{
    const RENDERING_BORDER_WIDTH = 250;
    if(
        x > -(CANVAS_WIDTH / 2 + RENDERING_BORDER_WIDTH) && 
        x < (CANVAS_WIDTH / 2 + RENDERING_BORDER_WIDTH) && 
        y > -(CANVAS_HEIGHT / 2 + RENDERING_BORDER_WIDTH) && 
        y < (CANVAS_HEIGHT / 2 + RENDERING_BORDER_WIDTH) 
    ){
        return true;
    }
    return false
}


const colorArray: string[] = [
    "#2E245F59",
    "#ff5e5759"
    //"#EE204D59",
    // "#FCE88359", 
    // "#1F75FE59", 
    // "#B4674D59", 
    // "#FF753859", 
    // "#1CAC7859", 
    // "#926EAE59", 
    // "#23232359",
    // "#FFAACC59", 
    // "#C5E38459", 
    // "#0D98BA59", 
    // "#FF534959", 
    // "#C0448F59", 
    // "#FFB65359", 
    // "#7366BD59", 
]

const functionArrayFun = () => {
    const random = Math.random();
    const random2 = Math.random();
    const array: ((x: number) => number)[] = [
    // Twoje oryginalne
    //(x) => -(Math.pow(x - 200, 2) / (random * 100 + 900)) + (random2 * 2400 - 1200),
    (x) => (random * 1 - 0.5) * x + random2 * 1500 + Math.sin(x / (random2 * 100 + 50)) * 100,

    ];
    return array;
}

class Vector2d {
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}

class Stroke {
    startPosition: Vector2d = new Vector2d(-CANVAS_HEIGHT/2,0);
    endPosition: Vector2d = new Vector2d(CANVAS_HEIGHT/2,0);
    duration: number = 1000;
    initialTime: number;
    color: string;
    fx: (x: number) => number = functionArrayFun()[Math.floor(Math.random() * functionArrayFun().length)];
    finishedDt: number = 0;
    drawEveryDt: number = this.duration / 600;
    isFlipped: boolean;
    isNegativeX: boolean;
    isNegativeY: boolean;
    
    constructor(fx: (x: number) => number,duration: number, isFlipped: boolean, isNegativeX: boolean, isNegativeY: boolean, color: string){
        this.initialTime = Date.now();
        this.color = color;
        this.fx = fx;
        this.duration = duration;
        this.isFlipped = isFlipped;
        this.isNegativeX = isNegativeX;
        this.isNegativeY = isNegativeY;
    }

    draw(ctx: CanvasRenderingContext2D){
        const dt = Date.now() - this.initialTime;

        if(dt < this.duration){
            const positionsToDraw:Vector2d[] = [];
            let time = this.finishedDt
            while(time <= dt){
                const animationPercent = (time / this.duration) > 1 ? 1 : (time / this.duration);
                const transformedPercent = easeInOutCirc(animationPercent);

                let x = ((1 - transformedPercent) * this.startPosition.x + transformedPercent * this.endPosition.x);
                let y = this.fx(x);

                if(this.isFlipped){
                    const temp = x;
                    x = y;
                    y = temp;
                }

                if(this.isNegativeX){
                    x = -x;
                }

                if(this.isNegativeX){
                    y = -y;
                }

                if(isInViewBox(x,y)){
                    positionsToDraw.push(new Vector2d(x,y));
                }
                time += this.drawEveryDt
            }
            this.finishedDt = time;

            ctx.fillStyle = this.color;
            console.log(positionsToDraw)

            for(let i = 0; i < positionsToDraw.length; i++){
                ctx.beginPath();
                ctx.moveTo(canX(positionsToDraw[i].x),canY(positionsToDraw[i].y))
                this.drawCrayonSpray(ctx, positionsToDraw[i]);
                ctx.fill();
                ctx.closePath();
            }
        }
    }

    drawCrayonSpray(ctx: CanvasRenderingContext2D, point: Vector2d){
        const amount = 24;
        const spread = 10;
        for(let i = 0; i <= amount; i++){
            const offset = spread * Math.random()
            const randomDegree  = Math.random() * Math.PI * 2;
            const offsetX = offset * Math.cos(randomDegree);
            const offsety = offset * Math.sin(randomDegree);
            ctx.moveTo(canX(point.x + offsetX),canY(point.y + offsety));
            ctx.arc(canX(point.x + offsetX),canY(point.y + offsety),Math.random() * 2,0, Math.PI * 2);
        }
    }
}

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let initialized = false;
    const initializeCanvas = () => {
        if(canvasRef.current && !initialized){
            initialized = true;
            canvasRef.current.width = CANVAS_WIDTH;
            canvasRef.current.height = CANVAS_HEIGHT;
            const ctx = canvasRef.current.getContext("2d");
            let i = -CANVAS_WIDTH/2;
            if(ctx){
                const strokes:Stroke[] = [];
                const drawed:number[] = [];
                let everyDraw = 2;
                const animate = (initialTime: number) => {
                    for(let i = 0; i < strokes.length; i++){
                        strokes[i].draw(ctx);
                    }
                    if(i % everyDraw == 0){
                        let width = Math.min(window.innerWidth + 500,CANVAS_WIDTH)
                        let r = Math.floor(Math.random() * width/5 - width/10) * 5;
                        let tries = 0;
                        while(drawed.includes(r) && tries < 10){
                            r = Math.floor(Math.random() * width/5 - width/10) * 5;
                            tries ++;
                        }
                        drawed.push(r);
                        const time = Math.random() * 1000 + 1000;
                        strokes.push(new Stroke(x => (r + (Math.sin(x / 350) * 300)) ,time,true,i % everyDraw == 0,false,colorArray[i % (everyDraw * 8) == 0 ? 1 : 0]));
                    }
                    i++;
                    if(everyDraw < 32 && Date.now() - initialTime > everyDraw * 2000){
                        everyDraw *= 2;
                    }
                    requestAnimationFrame(() => {
                        animate(initialTime);
                    });
                }
                animate(Date.now());
            }
        }
    }
    
    useEffect(() => {
        initializeCanvas();
    },[])
    return (
        <div className="animatedBackgroundContainer">
            <canvas ref={canvasRef} className="animatedBackground"/>
        </div>
    )
}
export default AnimatedBackground;