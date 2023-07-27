class PluginB {
    apply(compiler) {
        // 注册同步勾子
        compiler.hooks.run.tap('Plugin B', () => {
            // 调用
            console.log('Plugin B');
        })
    }
}

module.exports = PluginB