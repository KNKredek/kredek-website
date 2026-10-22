
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

class Vector2d {
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}

class Stroke {
    startPosition: Vector2d = new Vector2d(-window.innerWidth/2,0);
    endPosition: Vector2d = new Vector2d(window.innerWidth/2,0);
    duration: number = 1000;
    initialTime: number;
    color: string;
    strokes: Vector2d[] = [];
    constructor(){
        this.initialTime = Date.now();
        this.color = "red";
    }

    draw(ctx: CanvasRenderingContext2D){
        const dt = Date.now() - this.initialTime;
        let animationPercent = (dt / this.duration) > 1 ? 1 : (dt / this.duration);
        animationPercent = easeInOutCirc(animationPercent);
        
        let x = ((1 - animationPercent) * this.startPosition.x + animationPercent * this.endPosition.x) + Math.sin(animationPercent * 20) * 10;
        let y = Math.cos(animationPercent * 20) * 10;
        if(false){
            const temp = x;
            x = y;
            y = temp;
        }
        x = -x;
        y = -y;
        
        ctx.fillStyle = "red";
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        for(let i = 0; i < this.strokes.length; i++){
            if(i == 0){
                
            }
            ctx.moveTo(canX(this.strokes[0].x),canY(this.strokes[0].y));
            ctx.arc(canX(this.strokes[i].x),canY(this.strokes[i].y),5,0,2 * Math.PI);
        }
        if(animationPercent < 1){
            this.strokes.push(new Vector2d(x,y));
            ctx.moveTo(canX(x),canY(y));
            ctx.arc(canX(x),canY(y),5,0,2 * Math.PI);
        }else{
            this.strokes.splice(0,1);
        }
        ctx.fill();
        ctx.closePath();
    }

}

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const initializeCanvas = () => {
        if(canvasRef.current){
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = 800;
            const ctx = canvasRef.current.getContext("2d");
            if(ctx){
                const stroke = new Stroke();
                const animate = (initialTime: number) => {
                    ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
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