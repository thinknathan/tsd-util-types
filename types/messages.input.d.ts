/**
 * tsd-util-types
 * @license CC0-1.0
 * @noSelfInFile
 */

// Defold input messages
// @see https://defold.com/manuals/input/

/** */
declare type InputMessage = {
	value?: number;
	pressed?: boolean;
	released?: boolean;
	repeated?: boolean;
	x?: number;
	y?: number;
	screen_x?: number;
	screen_y?: number;
	dx?: number;
	dy?: number;
	screen_dx?: number;
	screen_dy?: number;
	gamepad?: number;
	touch?: {
		id: number;
		pressed: boolean;
		released: boolean;
		tap_count: number;
		x: number;
		y: number;
		dx: number;
		dy: number;
		acc_x?: number;
		acc_y?: number;
		acc_z?: number;
	}[];
};
