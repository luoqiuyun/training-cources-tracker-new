const { table } = require('./airtable');
const response = require('./response');

module.exports = async (event) => {
  const { id, ...fields } = JSON.parse(event.body);
  try {
    const updatedCourse = await table.update([{ id, fields }]);
    return response(200, updatedCourse);
  } catch (err) {
    console.error(err);
    return response(500, {});
  }
};
