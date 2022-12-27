/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   game.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: cjulienn <cjulienn@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/26 15:44:49 by cjulienn          #+#    #+#             */
/*   Updated: 2022/12/26 19:14:11 by cjulienn         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as geom from './geometry.js';
import * as dynamic from './dynamic.js';

export default class	Game
{
	constructor (width, height, context)
	{
		this.width = width;
		this.height = height;
		this.context = context;
		this.ball = new dynamic.Ball(this.width, this.height, this.context);
		this.playerScore = 0;
		this.AIScore = 0;
		this.framePerSecond = 60;
		this.net = new Net(this.width, "red");
	}

	renderGame() {
		setInterval(this.renderFrame(), 1000 / this.framePerSecond);
	}
	
	renderFrame() {
		this.drawTerrain();
	}
	
	drawTerrain() {
		geom.drawBackground(this.context, this.width, this.height);
		geom.drawNet(this.context, this.net, this.height);
		this.ball.drawBall();
	}
}

/* used to contains infos about the net present in the middle of the canvas */
export class Net 
{
	constructor (canvasX, color)
	{
		this.x = (canvasX / 2);
		this.y = 0;
		this.width = 2;
		this.height = 2;
		this.color = color;
	}
}
