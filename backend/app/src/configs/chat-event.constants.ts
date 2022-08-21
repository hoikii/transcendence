export const chatEvent = {
  JOIN: 'JOIN',
  LEAVE: 'LEAVE',
  CREATE: 'CREATE',
  DESTROYED: 'DESTROYED',
  SEND: 'SEND',
  RECEIVE: 'RECEIVE',
  NOTICE: 'NOTICE',
  ADD_ADMIN: 'ADD_ADMIN',
  REMOVE_ADMIN: 'REMOVE_ADMIN',
  INVITE: 'INVITE',
  INVITE_DM: 'INVITE_DM',
  PASSWORD: 'PASSWORD',
  BAN: 'BAN',
  UNBAN: 'UNBAN',
  MUTE: 'MUTE',
  UNMUTE: 'UNMUTE',
} as const
