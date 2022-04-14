const { table } = require('./airtable');
const response = require('./response');

module.exports = async (event) => {
  try {
    const courses = await table.select().firstPage();
    const formattedCourses = courses.map((course) => ({
      id: course.id,
      ...course.fields,
    }));
    return response(200, formattedCourses);
  } catch (err) {
    console.error(err);
    return response(500, {});
  }
};
