/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   pong.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: cjulienn <cjulienn@student.s19.be>         +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/12/26 12:27:24 by cjulienn          #+#    #+#             */
/*   Updated: 2022/12/26 18:46:08 by cjulienn         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import Game from './game.js';

/* get the canva and its context to work on it */
const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

const game = new Game(1000, 600, context);
game.renderGame();

