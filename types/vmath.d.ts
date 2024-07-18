/** @noSelfInFile */

declare namespace vmath {
	/**
	 * Addition Operator for Vector Math
	 * @see {@link https://typescripttolua.github.io/docs/advanced/language-extensions#operator-map-types|TSTL Docs}
	 */
	export const add: LuaAddition<vmath.vector3, vmath.vector3, vmath.vector3> &
		LuaAddition<vmath.vector4, vmath.vector4, vmath.vector4>;

	/**
	 * Subtraction Operator for Vector Math
	 * @see {@link https://typescripttolua.github.io/docs/advanced/language-extensions#operator-map-types|TSTL Docs}
	 */
	export const sub: LuaSubtraction<
		vmath.vector3,
		vmath.vector3,
		vmath.vector3
	> &
		LuaSubtraction<vmath.vector4, vmath.vector4, vmath.vector4>;

	/**
	 * Multiplication Operator for Vector Math
	 * @see {@link https://typescripttolua.github.io/docs/advanced/language-extensions#operator-map-types|TSTL Docs}
	 */
	export const mul: LuaMultiplication<number, vmath.matrix4, vmath.matrix4> &
		LuaMultiplication<number, vmath.vector3, vmath.vector3> &
		LuaMultiplication<number, vmath.vector4, vmath.vector4> &
		LuaMultiplication<vmath.matrix4, number, vmath.matrix4> &
		LuaMultiplication<vmath.matrix4, vmath.vector4, vmath.vector4> &
		LuaMultiplication<vmath.quaternion, vmath.quaternion, vmath.quaternion> &
		LuaMultiplication<vmath.vector3, number, vmath.vector3> &
		LuaMultiplication<vmath.vector4, number, vmath.vector4>;

	/**
	 * Division Operator for Vector Math
	 * @see {@link https://typescripttolua.github.io/docs/advanced/language-extensions#operator-map-types|TSTL Docs}
	 */
	export const div: LuaDivision<vmath.vector3, number, vmath.vector3> &
		LuaDivision<vmath.vector4, number, vmath.vector4>;

	/**
	 * Negation Operator for Vector Math
	 * @see {@link https://typescripttolua.github.io/docs/advanced/language-extensions#operator-map-types|TSTL Docs}
	 */
	export const unm: LuaNegation<vmath.vector3, vmath.vector3> &
		LuaNegation<vmath.vector4, vmath.vector4>;

	/**
	 * Concatenation Operator for Vector Math
	 * @see {@link https://typescripttolua.github.io/docs/advanced/language-extensions#operator-map-types|TSTL Docs}
	 */
	export const concat: LuaConcat<string, vmath.matrix4, string> &
		LuaConcat<string, vmath.quaternion, string> &
		LuaConcat<string, vmath.vector3, string> &
		LuaConcat<string, vmath.vector4, string>;
}
