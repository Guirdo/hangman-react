export const draw = (ctx, count) => {
    const drawHead = () => {
        ctx.strokeStyle = '#000000';
        ctx.beginPath();
        ctx.arc(350, 120, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }

    const drawBody = () => {
        drawLine(350, 160, 350, 300);
    }

    const drawLeftLeg = () => {
        drawLine(350, 300, 300, 370);
    }

    const drawRightLeg = () => {
        drawLine(350, 300, 400, 370);
    }

    const drawLeftArm = () => {
        drawLine(350, 230, 400, 200);
    }

    const drawRightArm = () => {
        drawLine(350, 230, 300, 200);
    }

    const drawLine = (x1, y1, x2, y2) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    const drawGallow = () => {
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 8;

        drawLine(20, 400, 200, 400);
        drawLine(100, 400, 100, 50);
        drawLine(100, 50, 350, 50);
    }

    const drawRope = () => {
        ctx.strokeStyle = '#FFC433';
        drawLine(350, 50, 350, 80);
    }

    switch (count) {
        case 0:
            drawGallow()
            break;
        case 1:
            drawRope();
            break;
        case 2:
            drawHead();
            break;
        case 3:
            drawBody();
            break;
        case 4:
            drawLeftLeg();
            break;
        case 5:
            drawRightArm();
            break;
        case 6:
            drawLeftArm();
            break;
        case 7:
            drawRightLeg();
            break;
        default:
            return;
    }
}
