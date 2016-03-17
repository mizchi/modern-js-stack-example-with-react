#!/usr/bin/env babel-node
import glob from "glob";
import mkdirp from "mkdirp";
import path from "path";
import fs from "fs";

const testCase = filename => `/* @flow */
// import {} from "${filename.replace(".js", "")}";
describe("${filename.replace('.js', '')}", () => {
  xit("should be written", () => {
  });
});
`;

glob.sync("src/**/*.js", {nodir: true}).forEach(filename => {
  let testFileName = filename.replace("src/", "test/").replace(".js", "-test.js");
  mkdirp.sync(path.dirname(testFileName));
  if (!fs.existsSync(testFileName)){
    fs.writeFileSync(testFileName, testCase(filename));
  }
});
