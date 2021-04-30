import test from 'ava';
import * as operator from '../../../../src/index.js';

test( "ne", t => {

	var a, b, i, n;

	n = 10;

	for (i = 0; i < n; ++i) {
		a = Math.floor(Math.random() * Math.pow(2, 32));
		b = Math.floor(Math.random() * Math.pow(2, 32));
		t.deepEqual(operator.ne(a, b), a != b, a + " != " + b);
	};

});
