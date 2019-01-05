exports.transformHeartbeatToUpdate = function(heartbeat) {
  /**
   * Implement your custom logic of transforming wakatime heartbeats into
   * Google Sheet cell updates.
   *
   * Heartbeats come in the format of:
   * {
   *   time: 1546728158.3935978,
   *   entity: '~/dev/build-your-own-wakatime/index.js',
   *   type: 'file',
   *   category: null,
   *   is_write: false,
   *   project: 'build-your-own-wakatime',
   *   branch: 'master',
   *   language: 'JavaScript',
   *   dependencies: [],
   *   lines: 0,
   *   lineno: null,
   *   cursorpos: null,
   *   user_agent: 'wakatime/10.7.1 (Darwin-17.7.0-x86_64-i386-64bit)' 
   * }
   *
   * Updates should be in the form of:
   * {
   *   range: 'A1',
   *   value: 123
   * }
   */

  const updates = []

  console.log('DEBUG: updates to be made:')
  console.log(updates)

  return updates
}
