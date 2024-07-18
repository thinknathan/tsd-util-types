/** @noSelfInFile */

/**
 * Script lifecycle types
 * @see https://defold.com/manuals/script/
 */

/**
 * Called when the component is initialized.
 */
declare type ScriptInit<T> = (this: T) => void;

/**
 * Called once each frame. dt contains the delta time since the last frame.
 */
declare type ScriptUpdate<T> = (this: T, dt: number) => void;

/**
 * Frame-rate independent update. dt contains the delta time since the last update.
 */
declare type ScriptFixedUpdate<T> = (this: T, dt: number) => void;

/**
 * When messages are sent to the script component through msg.post() the engine calls this function of the receiver component.
 * @see {@link https://defold.com/manuals/message-passing|Defold Message Passing Manual}
 */
declare type ScriptOnMessage<T> = (
	this: T,
	message_id: hash,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	message: any,
	sender: url,
) => void;

/**
 * If this component has acquired input focus (see `acquire_input_focus`) the engine calls this function when input is registered.
 * @see {@link https://defold.com/ref/go/#acquire_input_focus|Defold API for acquire_input_focus}
 * @see {@link https://defold.com/manuals/input|Defold Input Manual}
 */
declare type ScriptOnInput<T> = (
	this: T,
	action_id: hash,
	action: go.input_message,
) => void;

/**
 * This function is called when the script is reloaded through the hot reload editor function.
 * @see {@link https://defold.com/manuals/hot-reload|Defold Hot Reload Manual}
 */
declare type ScriptOnReload<T> = (this: T) => void;

/**
 * Called when the component is deleted.
 */
declare type ScriptFinal<T> = (this: T) => void;
