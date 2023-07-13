module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@/controllers": "./src/controllers",
            "@/models": "./src/models",
            "@/services": "./src/services",
            "@/views": "./src/views",
            "@/atomic/element": "./atomic/element",
            "@/atomic/component": "./atomic/component",
            "@/atomic/design": "./atomic/design",
          },
        },
      ],
      ["nativewind/babel"],
      [
        "module:react-native-dotenv",
        {
         'moduleName':'@env',
         'path':'.env',
        }
      ]
    ],
  };
};
