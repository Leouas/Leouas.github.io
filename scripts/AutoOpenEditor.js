let spawn = require('hexo-util/lib/spawn');

hexo.on('new'||'n', (data) => {
// spawn('sublime_text.exe', [hexo.base_dir, data.path]);
spawn('vim', [hexo.base_dir, data.path]);
});

