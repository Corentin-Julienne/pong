/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   dynamic.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: cjulienn <cjulienn@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/26 18:14:20 by cjulienn          #+#    #+#             */
/*   Updated: 2022/12/26 19:12:50 by cjulienn         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as geom from './geometry.js';

// /* player struct to store and update every player moves */
// export class Player
// {
// 	constructor ()
// 	{
		
// 	}
// }

// /* player struct to store and update every AI moves */
// export class Antagonist
// {
// 	constructor ()
// 	{
		
// 	}
// }

/* player struct to store and update every ball moves */
export class Ball
{
	constructor (canvasX, canvasY, context)
	{
		this.x = canvasX / 2;
		this.y = canvasY / 2;
		this.context = context;
		this.radius = 10;
		this.color = "red";
	}

	drawBall () {
		geom.drawCircle(this.context, this.x, this.y, this.radius, this.color);
		console.log("go there");
		console.log(this.x);
		console.log(this.y);
	}

	// updateBallPosition ()
	// {
	// 	// to implement
	// }
}
