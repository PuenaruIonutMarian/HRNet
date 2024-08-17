/**
 * @type {import('../../types').Employee[]}
 */
export const testerData = Array.from({ length: 120 }, () => {
    // Generate a random age between 18 and 65
    const age = Math.floor(Math.random() * 48) + 18;

    // Calculate the year of birth based on the age
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;

    // Generate a random month and day
    const birthMonth = Math.floor(Math.random() * 12);
    const birthDay = Math.floor(Math.random() * 28) + 1; 

    // Construct the date of birth
    const dateOfBirth = new Date(birthYear, birthMonth, birthDay).toISOString().split('T')[0];

    return {
        firstName: ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Eve', 'Frank'][Math.floor(Math.random() * 7)],
        lastName: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller'][Math.floor(Math.random() * 7)],
        dateOfBirth: dateOfBirth,
        startDate: new Date(birthYear, birthMonth, birthDay).toISOString().split('T')[0],
        street: ['Main St', 'Oak St', 'Maple St', 'Cedar St', 'Elm St', 'Pine St', 'Spruce St'][Math.floor(Math.random() * 7)],
        city: ['New York', 'Paris', 'London', 'Tokyo', 'Berlin', 'Los Angeles', 'Moscow'][Math.floor(Math.random() * 7)],
        state: ['NY', 'PA', 'ON', 'JP', 'DE', 'CA', 'RU'][Math.floor(Math.random() * 7)],
        zipCode: ['10001', '10002', '10003', '10004', '10005', '10006', '10007'][Math.floor(Math.random() * 7)],
        department: ['Engineering', 'Marketing', 'Sales', 'Finance', 'HR', 'Legal', 'IT'][Math.floor(Math.random() * 7)],
    };
});
