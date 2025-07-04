/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/Schema.jsx",
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_Ox1ysBDe2lFZ@ep-plain-fog-a1bmtoeh-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
  },
};