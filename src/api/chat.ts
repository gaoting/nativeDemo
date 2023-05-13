import Config from 'react-native-config';

import type {MsgListType} from '../types';

const keys = Config.CHARTGPT_KEY;
const baseUrl = Config.HTTPS_PROXY;

const Api = async (arr: MsgListType[]) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': ' application/json',
      Authorization: `Bearer ${keys}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: arr,
      stream: true,
    }),
  };
  // console.log('params', params);
  return fetch(`${baseUrl}/v1/chat/completions`, params);
};

export default Api;
