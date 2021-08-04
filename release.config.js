module.exports = {
  branch: 'master',
  branches: [{ name: 'master' }, { name: 'next', channel: 'next', prerelease: true }],
  plugins: [
    '@semantic-release/changelog',
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'docs', scope: 'README', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'chore', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'bug', release: 'patch' },
          { type: 'fix', release: 'patch' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}',
      },
    ],
  ],
}
