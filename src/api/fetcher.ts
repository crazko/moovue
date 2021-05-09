import { config } from 'src/config';

export const fetcher = async (key: string) => {
  return await fetch(`${config.API_HOST}${key}`, {
    headers: {
      Authorization: `Bearer ${config.API_TOKEN}`,
    },
  }).then((response) => response.json());
};
