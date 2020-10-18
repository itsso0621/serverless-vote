exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";
  return {
    statusCode: 200,
    bodt: `Hello ${subject}`,
  };
};
