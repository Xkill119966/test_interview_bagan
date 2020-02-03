module.exports = {
  apps: [
    {
      name: "dms-server",
      script: "./src/server.js",
      instances: 2,
      exec_mode: "cluster",
      watch: true,
      env: {
        NODE_ENV: "development",

        MONGO_URI: `mongodb://localhost:27017/dms-sample`
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
