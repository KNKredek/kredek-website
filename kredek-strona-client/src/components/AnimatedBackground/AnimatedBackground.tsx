
import { useEffect, useRef } from "react";
import "./animatedBackground.scss"

//toCanvasCoordinateX
function canX(x: number): number {
    return x + (window.innerWidth / 2);
}
//toCanvasCoordinateY
function canY(y: number): number {
    return -y + 400;
}

function easeInOutCirc(t: number): number {
    return t * t * (3 - 2 * t)
}

const functionsArray: ((x:number) => number)[] = [
    (x) => -(Math.pow((x-200),2)/900) + 500,
    (x) => 100,
]

class Vector2d {
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}

class Stroke {
    startPosition: Vector2d = new Vector2d(-window.innerWidth/2,0);s
    endPosition: Vector2d = new Vector2d(window.innerWidth/2,0);
    duration: number = 1000;
    initialTime: number;
    color: string;
    fx: (x: number) => number = functionsArray[0];
    finishedDt: number = 0;
    drawEveryDt: number = this.duration / 800;
    
    
    constructor(){
        this.initialTime = Date.now();
        this.color = "#0bae0299";
    }

    draw(ctx: CanvasRenderingContext2D){
        const dt = Date.now() - this.initialTime;

        if(dt < this.duration){
            const positionsToDraw:Vector2d[] = [];
            let time = this.finishedDt
            for(; time <= dt; time += this.drawEveryDt){
                const animationPercent = (time / this.duration) > 1 ? 1 : (time / this.duration);
                const transformedPercent = easeInOutCirc(animationPercent);

                let x = ((1 - transformedPercent) * this.startPosition.x + transformedPercent * this.endPosition.x);
                let y = this.fx(x);

                if(false){
                    const temp = x;
                    x = y;
                    y = temp;
                }

                positionsToDraw.push(new Vector2d(x,y));
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
        const spread = 12;
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
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = 800;
            const ctx = canvasRef.current.getContext("2d");
            if(ctx){
                const stroke = new Stroke();
                const animate = (initialTime: number) => {
                    stroke.draw(ctx);
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
        <canvas ref={canvasRef} className="animatedBackground"/>
    )
}
export default AnimatedBackground;