/* eslint-disable */
export const type = 'perItem'

export const active = true

export const description = 'converts non-eccentric <ellipse>s to <circle>s'

/**
 * Converts non-eccentric <ellipse>s to <circle>s.
 *
 * @see http://www.w3.org/TR/SVG/shapes.html
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Taylor Hunt
 */
export const fn = function(item) {
  if (item.isElem('ellipse')) {
    var rx = item.attr('rx').value || 0
    var ry = item.attr('ry').value || 0

    if (
      rx === ry ||
      rx === 'auto' ||
      ry === 'auto' // SVG2
    ) {
      var radius = rx !== 'auto' ? rx : ry
      item.renameElem('circle')
      item.removeAttr(['rx', 'ry'])
      item.addAttr({
        name: 'r',
        value: radius,
        prefix: '',
        local: 'r',
      })
    }
  }
  return
}