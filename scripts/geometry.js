/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   geometry.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: cjulienn <cjulienn@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/26 13:22:32 by cjulienn          #+#    #+#             */
/*   Updated: 2022/12/26 18:43:15 by cjulienn         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import Net from "./game.js";

/* display a black background */
export function	drawBackground(ctx, width, height) {
	drawRect(ctx, 0, 0, width, height, "black");
}

/* draw the net of the terrain (static element) */
export function	drawNet(ctx, net, height)
{
	for (let i = 0; i < height; i+= 15) {
		drawRect(ctx, net.x, net.y + i, net.width, net.height, net.color);
	}
}

/* draw a filled (with color) circle.
circle center is at coordinates x, y.
r is the radius of the circle */
export function	drawCircle(ctx, x, y, r, color)
{
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y , r, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.fill();
}

/* draw a filled (with color) rectangle. 
Upper left summit is at coordianates x, y.
w and h are respectively width and height of the rectangle */
export function	drawRect(ctx, x, y, w, h, color)
{
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
}

/* draw some text in a canvas.
ctx is the context, x and y the initial coordinates where to display test,
text is the string to be displayed and color the color of the text */
export function	drawText(ctx, text, x, y, color)
{
	ctx.fillStyle = color;
	ctx.font = "75 px fantasy";
	ctx.fillText(text, x, y);
}
