/* eslint-disable */

const createDtoInType = shape({
  name: string(1, 255).isRequired(),
  age: number(),
  driverLicence: boolean()
});

const listDtoInType = shape({
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});

const deleteDtoInType = shape({
  id: id().isRequired()
});
