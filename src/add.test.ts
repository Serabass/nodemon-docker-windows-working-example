import { add } from "./add";

describe('Add', () => {
    it('Sandbox', () => {
        expect(add(1, 6)).toBe(7);
    })
});
