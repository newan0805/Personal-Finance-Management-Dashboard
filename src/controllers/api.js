const { ipcMain } = require('electron');
const axios = require('axios');

ipcMain.handle('api:fetchData', async (_, url) => {
  try {
    // @ts-ignore
    const response = await axios.get(url);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
