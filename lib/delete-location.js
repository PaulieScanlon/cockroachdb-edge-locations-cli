const { client } = require('../lib/prisma-client');

module.exports = async function (id) {
  try {
    const response = await client.locations.delete({
      where: {
        id: BigInt(id.slice(0, -1))
      }
    });

    return `id ${id} deleted ok!`;
  } catch (error) {
    console.error(error);
  } finally {
    client.$disconnect();
  }
};
