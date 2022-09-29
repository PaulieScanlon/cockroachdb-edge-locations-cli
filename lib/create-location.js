const { client, Prisma } = require('../lib/prisma-client');
const nodeip = require('ip');
const geoip = require('fast-geoip');

const setAsPrismaDecimal = (n) => {
  return new Prisma.Decimal(n);
};

module.exports = async function () {
  const ip = nodeip.address();
  const geo = await geoip.lookup(ip);

  const data = {
    date: new Date(),
    city: geo.city,
    lat: setAsPrismaDecimal(geo.ll[0]),
    lng: setAsPrismaDecimal(geo.ll[1])
  };

  try {
    const response = await client.locations.create({
      data: data
    });

    return data;
  } catch (error) {
    console.error(error);
  } finally {
    client.$disconnect();
  }
};
