import axios from 'axios';

export const getProducts = async (
  page = 1,
  size = 10,
  sorting = { title: 1 }
) => {
  return await axios.get(
    `${process.env.REACT_APP_SERVER_DOMAIN}/api/getProducts`,
    {
      params: { from: page, size, sorting },
    }
  );
};
