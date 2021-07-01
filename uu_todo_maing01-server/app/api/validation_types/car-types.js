/* eslint-disable */

const createDtoInType = shape({
  name: string(1, 255).isRequired(),
  color: string(1, 255).isRequired(),
  number: number(),
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

const updateDtoInType = shape({
  id: id().isRequired(),
  name: string(1, 255).isRequired(),
  // color: string(1, 255).isRequired(),
  // number: number(),
});
