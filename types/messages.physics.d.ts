/**
 * tsd-util-types
 * @license CC0-1.0
 * @noSelfInFile
 */

// Defold physics messages
// @see https://defold.com/manuals/physics-messages/

/** */
declare type ray_cast_response_message = {
	fraction: number;
	position: vmath.vector3;
	normal: vmath.vector3;
	id: hash;
	group: hash;
	request_id: number;
};

declare type ray_cast_missed_message = { request_id: number };

declare type trigger_response_message = {
	other_id: hash;
	enter: boolean;
	other_group: hash;
	own_group: hash;
};

declare type contact_point_response_message = {
	position: vmath.vector3;
	normal: vmath.vector3;
	relative_velocity: vmath.vector3;
	distance: number;
	applied_impulse: number;
	life_time: number;
	mass: number;
	other_mass: number;
	other_id: hash;
	other_position: vmath.vector3;
	other_group: hash;
	own_group: hash;
};

declare type collision_response_message = {
	other_id: hash;
	other_position: vmath.vector3;
	other_group: hash;
	own_group: hash;
};

declare type apply_force_message = {
	force: vmath.vector3;
	position: vmath.vector3;
};
