const { table } = require('./airtable');
const response = require('./response');

module.exports = async (event) => {
  const fields = JSON.parse(event.body);
  try {
    const createdCourse = await table.create([{ fields }]);
    return response(200, createdCourse);
  } catch (err) {
    console.error(err);
    return response(500, {});
  }
};
