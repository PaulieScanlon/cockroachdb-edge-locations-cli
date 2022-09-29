const { client } = require('../lib/prisma');

module.exports = async function () {
  try {
    const response = await client.locations.findMany();
    return response.sort((a, b) => b.date - a.date);
  } catch (error) {
    console.error(error);
  } finally {
    client.$disconnect();
  }
};
