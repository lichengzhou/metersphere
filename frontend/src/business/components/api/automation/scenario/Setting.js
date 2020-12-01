export const ELEMENTS =new Map([
  ['ALL', ["scenario", "API", "CASE", "OT_IMPORT", "IfController", "ConstantTimer", "JSR223Processor", "JSR223PreProcessor", "JSR223PostProcessor", "Assertions", "Extract", "CustomizeReq"]],
  ['scenario', ["API", "CASE", "OT_IMPORT", "IfController", "ConstantTimer", "JSR223Processor", "JSR223PreProcessor", "JSR223PostProcessor", "Assertions", "Extract", "CustomizeReq"]],
  ['API', ["IfController", "ConstantTimer", "JSR223Processor", "JSR223PreProcessor", "JSR223PostProcessor", "Assertions", "Extract"]],
  ['CASE', ["IfController", "ConstantTimer", "JSR223Processor", "JSR223PreProcessor", "JSR223PostProcessor", "Assertions", "Extract"]],
  ['OT_IMPORT', []],
  ['IfController', ["API", "CASE", "OT_IMPORT", "ConstantTimer", "JSR223Processor", "JSR223PreProcessor", "JSR223PostProcessor", "Assertions", "Extract", "CustomizeReq"]],
  ['ConstantTimer', ["API", "CASE", "OT_IMPORT", "IfController", "JSR223Processor", "JSR223PreProcessor", "JSR223PostProcessor", "Assertions", "Extract", "CustomizeReq"]],
  ['JSR223Processor', []],
  ['JSR223PreProcessor', []],
  ['JSR223PostProcessor', []],
  ['Assertions', []],
  ['Extract', []],
  ['CustomizeReq', ["API", "CASE", "OT_IMPORT", "IfController", "ConstantTimer", "JSR223Processor", "JSR223PreProcessor", "JSR223PostProcessor", "Assertions", "Extract"]],
])