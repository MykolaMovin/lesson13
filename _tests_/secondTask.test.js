const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2' ];

describe('Tests for the first task', () => {
    test('Test whether the array contains the element "admin"', () => {
        expect(userList).toContain('admin');
    });

    test('Test whether the first element in the array is "Nick"', () => {
        expect(userList[0]).toBe('Nick');
    });

    test('Test whether the last element in the array is "new _ user_2"', () => {
        expect(userList[userList.length - 1]).toBe('new_user_2');
    });

    test('Test the statement that the length of the array is 5', () => {
        expect(userList.length).toBe(5);
    });

    test('Test the statement that the 3rd element of the array has type string', () => {
        expect(typeof userList[2]).toBe('string');
    });

    test('Prove the statement that the array does not have an 8th element', () => {
        expect(userList.length).toBeLessThan(8);
    });
});