class PluginA {
    apply(compiler) {
        // 注册同步勾子
        compiler.hooks.run.tap('Plugin A', () => {
            // 调用
            console.log('Plugin A');
        })

        // 可以注册多个勾子
        // compiler.hooks.run.tap('Plugin A1', () => {
        //     // 调用
        //     console.log('Plugin A1');
        // })

        // compiler.hooks.emit.tap('Plugin A emit', () => {
        //     console.log('Plugin A emit');
        // })
    }
}

module.exports = PluginA