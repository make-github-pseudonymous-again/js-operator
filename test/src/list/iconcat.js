import test from 'ava';

import * as operator from '#module';

test('iconcat', (t) => {
	const a = [1, 2];
	operator.iconcat(a, [3, 4, 5]);
	t.deepEqual(a, [1, 2, 3, 4, 5], 'iconcat [1, 2], [3, 4, 5]');
});
