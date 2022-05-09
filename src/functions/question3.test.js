//3//

import { returnPerson } from "./question3";

test('Returning a name and an age', () => {
        expect(returnPerson("Albert", 30)).toEqual({
        name: "Albert",
        age: 30,
    });

  });