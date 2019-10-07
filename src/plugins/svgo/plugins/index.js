module.exports = {
  addAttributesToSVGElement: require('../plugins/addAttributesToSVGElement'),
  addClassesToSVGElement: require('../plugins/addClassesToSVGElement'),
  cleanupAttrs: require('../plugins/cleanupAttrs'),
  cleanupEnableBackground: require('../plugins/cleanupEnableBackground'),
  cleanupIDs: require('../plugins/cleanupIDs'),
  cleanupListOfValues: require('../plugins/cleanupListOfValues'),
  cleanupNumericValues: require('../plugins/cleanupNumericValues'),
  collapseGroups: require('../plugins/collapseGroups'),
  convertColors: require('../plugins/convertColors'),
  convertEllipseToCircle: require('../plugins/convertEllipseToCircle'),
  convertPathData: require('../plugins/convertPathData'),
  convertShapeToPath: require('../plugins/convertShapeToPath'),
  convertStyleToAttrs: require('../plugins/convertStyleToAttrs'),
  convertTransform: require('../plugins/convertTransform'),
  inlineStyles: require('../plugins/inlineStyles'),
  mergePaths: require('../plugins/mergePaths'),
  minifyStyles: require('../plugins/minifyStyles'),
  moveElemsAttrsToGroup: require('../plugins/moveElemsAttrsToGroup'),
  moveGroupAttrsToElems: require('../plugins/moveGroupAttrsToElems'),
  prefixIds: require('../plugins/prefixIds'),
  removeAttributesBySelector: require('../plugins/removeAttributesBySelector'),
  removeAttrs: require('../plugins/removeAttrs'),
  removeComments: require('../plugins/removeComments'),
  removeDesc: require('../plugins/removeDesc'),
  removeDimensions: require('../plugins/removeDimensions'),
  removeDoctype: require('../plugins/removeDoctype'),
  removeEditorsNSData: require('../plugins/removeEditorsNSData'),
  removeElementsByAttr: require('../plugins/removeElementsByAttr'),
  removeEmptyAttrs: require('../plugins/removeEmptyAttrs'),
  removeEmptyContainers: require('../plugins/removeEmptyContainers'),
  removeEmptyText: require('../plugins/removeEmptyText'),
  removeHiddenElems: require('../plugins/removeHiddenElems'),
  removeMetadata: require('../plugins/removeMetadata'),
  removeNonInheritableGroupAttrs: require('../plugins/removeNonInheritableGroupAttrs'),
  removeOffCanvasPaths: require('../plugins/removeOffCanvasPaths'),
  removeRasterImages: require('../plugins/removeRasterImages'),
  removeScriptElement: require('../plugins/removeScriptElement'),
  removeStyleElement: require('../plugins/removeStyleElement'),
  removeTitle: require('../plugins/removeTitle'),
  removeUnknownsAndDefaults: require('../plugins/removeUnknownsAndDefaults'),
  removeUnusedNS: require('../plugins/removeUnusedNS'),
  removeUselessDefs: require('../plugins/removeUselessDefs'),
  removeUselessStrokeAndFill: require('../plugins/removeUselessStrokeAndFill'),
  removeViewBox: require('../plugins/removeViewBox'),
  removeXMLNS: require('../plugins/removeXMLNS'),
  removeXMLProcInst: require('../plugins/removeXMLProcInst'),
  reusePaths: require('../plugins/reusePaths'),
  sortAttrs: require('../plugins/sortAttrs'),
  sortDefsChildren: require('../plugins/sortDefsChildren'),
}
