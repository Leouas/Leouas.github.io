let spawn = require('hexo-util/lib/spawn');

hexo.on('new'||'n', (data) => {
spawn('typora', [hexo.base_dir, data.path]);
});

