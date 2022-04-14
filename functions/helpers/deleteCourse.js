const { table } = require('./airtable');
const response = require('./response');

module.exports = async (event) => {
  const { id } = JSON.parse(event.body);
  try {
    const deletedCourse = await table.destroy(id);
    return response(200, deletedCourse);
  } catch (err) {
    console.error(err);
    return response(500, {});
  }
};
