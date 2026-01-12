const supabase = require("../supabase");

module.exports = async (req, res) => {
  const { skill } = req.query;

  let query = supabase.from("projects").select("*");

  if (skill) {
    query = query.eq("skill", skill);
  }

  const { data, error } = await query;

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
};
