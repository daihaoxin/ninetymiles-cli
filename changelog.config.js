module.exports = {
  disableEmoji: true,
  list: ['feat', 'fix', 'refactor', 'perf', 'style', 'test', 'chore', 'ci', 'release'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'issues',
    'subject',
    'body',
    // "breaking",
  ],
  scopes: ['DAG', '其他'],
  types: {
    chore: {
      description: '编译过程和辅助工具修改',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: '持续集成相关修改',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: '纯文档修改',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: '功能修改',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: '缺陷修复',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: '性能改进',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: '代码重构',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: '版本发布',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: '代码美化',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: '测例修改',
      emoji: '💍',
      value: 'test',
    },
  },
};
