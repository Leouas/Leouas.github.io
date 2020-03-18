let spawn = require('hexo-util/lib/spawn');

hexo.on('new'||'n', (data) => {
spawn('Mark Text', [hexo.base_dir, data.path]);
});

