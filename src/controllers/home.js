import getConnection from '../database';

export const getHome = async (req, res) => {
  try {
    const connection = await getConnection();
    const data = await connection.query('SELECT * FROM TB_TEST');

    res.send({
      success: true,
      message: null,
      data,
    });
  } catch (e) {
    res.send({
      success: false,
      message: e.message,
      data: null,
    });
  }
};
