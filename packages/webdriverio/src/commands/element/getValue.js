/**
 *
 * Get the value of a `<textarea>`, `<select>` or text `<input>` found by given selector.
 * If multiple elements are found via the given selector, an array of values is returned instead.
 *
 * <example>
    :index.html
    <input type="text" value="John Doe" id="username">
    :getValue.js
    it('should demonstrate the getValue command', () => {
        const inputUser = $('#username');
        const value = inputUser.getValue();
        console.log(value); // outputs: "John Doe"
    });
 * </example>
 *
 * @alias element.getValue
 * @return {String}  requested element(s) value
 * @uses protocol/elements, protocol/getElementAttribute
 * @type property
 *
 */

export default function getValue () {
    return this.getElementAttribute(this.elementId, 'value')
}
