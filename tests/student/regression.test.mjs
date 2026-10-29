import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';
test('viewer user-4 cannot receive claim-B owned by user-42 (incident)', () => {
  const claimB = { id: 'claim-B', ownerId: 'user-42', status: 'pending' };
  const claimA = { id: 'claim-A', ownerId: 'user-4', status: 'approved' };
  const claims = [claimB, claimA];
  assert.equal(getClaim(claims, 'user-4', 'claim-B'), null, 'user-4 must not receive claim-B owned by user-42');
  assert.deepEqual(getClaim(claims, 'user-42', 'claim-B'), claimB);
  assert.deepEqual(getClaim(claims, 'user-4', 'claim-A'), claimA);
});
