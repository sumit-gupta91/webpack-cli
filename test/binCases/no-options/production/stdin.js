"use strict";

module.exports = function testAssertions(code, stdout, stderr) {
	expect(code).toBe(2);
	expect(stdout).toEqual(expect.anything());
	expect(stdout[0]).toContain("Hash: ");
	expect(stdout[1]).toContain("Version: ");
	expect(stdout[2]).toContain("Time: ");
	expect(stdout[4]).toContain("");
	expect(stdout[5]).toContain("ERROR in Entry module not found");
	expect(stdout[6]).toContain("");
	expect(stderr).toHaveLength(0);
};
