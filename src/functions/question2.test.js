//2//

import { spaceReplace } from "./question2.js";

test('Removing all spaces from characters, and replacing with an -', () => {
    expect(spaceReplace("a b c")).toBe("a-b-c");
  });