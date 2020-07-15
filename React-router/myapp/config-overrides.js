const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
    // config为webpack配置文件
    // 修改配置
    config.resolve.alias['@'] = path.join(__dirname,'./src/')
    // config.module.rules[2].oneOf[1].options.plugins.unshift(["@babel/plugin-proposal-decorators", { "legacy": true }])
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators',{"legacy": true }],config)
    return config;
}