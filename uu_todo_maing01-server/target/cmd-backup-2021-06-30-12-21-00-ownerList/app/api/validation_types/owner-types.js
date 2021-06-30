/* eslint-disable */

const createDtoInType = shape({
  name: string(1, 255).isRequired(),
  age: number(),
  driverLicence: boolean()
});
