/**
 * tsd-util-types
 * @license CC0-1.0
 * @noSelfInFile
 */

// Defold engine messages

/** */
declare type generic_message =
	| LuaMap<AnyNotNil, AnyNotNil>
	| { [key: string | number | symbol]: AnyNotNil };

// CAMERA
declare type set_camera_message = {
	aspect_ratio?: number;
	fov?: number;
	near_z?: number;
	far_z?: number;
	orthographic_projection?: boolean;
	orthographic_zoom?: number;
};

// COLLECTION PROXY
declare type set_time_step_message = { factor: number; mode: 1 | 0 };

// GO
declare type set_parent_message = {
	parent_id: hash;
	keep_world_transform?: number;
};

// GUI
declare type layout_changed_message = { id: hash; previous_id: hash };

// MODEL
declare type model_animation_done_message = {
	animation_id: hash;
	playback: // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-duplicate-type-constituents
	| typeof go.PLAYBACK_ONCE_FORWARD
		// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-duplicate-type-constituents
		| typeof go.PLAYBACK_ONCE_BACKWARD
		// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents, @typescript-eslint/no-duplicate-type-constituents
		| typeof go.PLAYBACK_ONCE_PINGPONG;
};

// RENDER
declare type clear_color_message = { color: vmath.vector4 };
declare type draw_debug_text_message = {
	position: vmath.vector3;
	text: string;
	color: vmath.vector4;
};
declare type draw_line_message = {
	start_point: vmath.vector3;
	end_point: vmath.vector3;
	color: vmath.vector4;
};
declare type resize_message = { height: number; width: number };
declare type window_resized_message = { height: number; width: number };

// SOUND
declare type play_sound_message = {
	delay?: number;
	gain?: number;
	play_id?: number;
};
declare type set_gain_message = { gain: number };
declare type sound_done_message = { play_id: number };
declare type sound_stopped_message = { play_id: number };

// SPRITE
declare type animation_done_message = { current_tile: number; id: hash };
declare type play_animation_message = { id: hash };

// SYS
declare type exit_message = { code: number };
declare type reboot_message = {
	arg1?: string;
	arg2?: string;
	arg3?: string;
	arg4?: string;
	arg5?: string;
	arg6?: string;
};
declare type set_update_frequency_message = { frequency: number };
declare type set_vsync_message = { swap_interval: number };
declare type start_record_message = {
	file_name: string;
	frame_period?: number;
	fps?: number;
};
