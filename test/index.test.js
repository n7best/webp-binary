import WebpLib from "../src";
var fs = require('fs');

test("webplib", () => {
  expect(WebpLib.Version).toBe("1.0.0");
  expect(fs.existsSync(WebpLib.GetBinPath('anim_diff'))).toBe(true);
  expect(fs.existsSync(WebpLib.GetBinPath('anim_dump'))).toBe(true);
  expect(fs.existsSync(WebpLib.GetBinPath('cwebp'))).toBe(true);
  expect(fs.existsSync(WebpLib.GetBinPath('dwebp'))).toBe(true);
  expect(fs.existsSync(WebpLib.GetBinPath('gif2webp'))).toBe(true);
  expect(fs.existsSync(WebpLib.GetBinPath('img2webp'))).toBe(true);
  expect(fs.existsSync(WebpLib.GetBinPath('vwebp'))).toBe(true);
  expect(fs.existsSync(WebpLib.GetBinPath('webpinfo'))).toBe(true);
  expect(fs.existsSync(WebpLib.GetBinPath('webpmux'))).toBe(true);
});
