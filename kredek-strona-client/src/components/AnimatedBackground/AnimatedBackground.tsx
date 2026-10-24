
import { useEffect, useRef } from "react";
import "./animatedBackground.scss"

const CANVAS_HEIGHT = 800;
const CANVAS_WIDTH = 6000;

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
    "#EE204D59", // czerwony (red)
    "#FCE88359", // żółty (yellow)
    "#1F75FE59", // niebieski (blue)
    "#B4674D59", // brązowy (brown)
    "#FF753859", // pomarańczowy (orange)
    "#1CAC7859", // zielony (green)
    "#926EAE59", // fioletowy (violet)
    "#23232359", // czarny (black)
    "#FFAACC59", // różowy (carnation pink)
    "#C5E38459", // żółtozielony (yellow-green)
    "#0D98BA59", // niebiesko-zielony (blue-green)
    "#FF534959", // czerwono-pomarańczowy (red-orange)
    "#C0448F59", // czerwono-fioletowy (red-violet)
    "#FFB65359", // żółto-pomarańczowy (yellow-orange)
    "#7366BD59", // niebiesko-fioletowy (blue-violet)
]
// const functionsArray: ((x:number) => number)[] = [
//     (x) => -(Math.pow((x-200),2)/900) + 500,
//     (x) => ( * 10 - 5) * x,
// ]

const functionArrayFun = () => {
    const random = Math.random();
    const random2 = Math.random();
    const array: ((x:number) => number)[] = [
        //(x) => -(Math.pow((x-200),2)/(random * 100 + 900)) + (random2 * 2400 - 1200),
        (x) => (random * 1 - 0.5) * x + (random2 * 500) + 600 + Math.sin(x / (random2 * 100 + 50)) * 100,
    ]
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
    fx: (x: number) => number = functionArrayFun()[Math.floor(Math.random() * functionArrayFun().length)];//functionsArray[Math.floor(Math.random() * colorArray.length)];
    finishedDt: number = 0;
    drawEveryDt: number = this.duration / 600;
    isFlipped: boolean = Math.random() < 1;
    isNegativeX: boolean = Math.random() < 0.5;
    isNegativeY: boolean = Math.random() < 0.5;
    
    constructor(colorId:number){
        this.initialTime = Date.now();
        this.color = colorArray[colorId];//colorArray[Math.floor(Math.random() * colorArray.length)];
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
            canvasRef.current.width = 6200;
            canvasRef.current.height = 800;
            const ctx = canvasRef.current.getContext("2d");
            let i = 1
            if(ctx){
                const strokes:Stroke[] = [new Stroke(0)];
                const animate = (initialTime: number) => {
                    for(let i = 0; i < strokes.length; i++){
                        strokes[i].draw(ctx);
                    }
                    if(strokes.length < 16 && Math.random() < 0.1){
                        strokes.push(new Stroke(i));
                        i++;
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