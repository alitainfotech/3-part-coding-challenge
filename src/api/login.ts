/**
 * This is a fake call to demonstrate api call for the email and password with static values
 * 
 * @param email string
 * @param password string
 * @returns Promise
 */
export const checkLogin = (email: string, password: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (email === 'admin@admin.com' && password === 'Password123#') {
                resolve(1);
            } else {
                resolve(0);
            }
        }, 2000)
    });
}