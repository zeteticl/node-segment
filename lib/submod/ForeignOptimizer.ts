/**
 * Created by user on 2018/8/18/018.
 */

import { SubSModule, SubSModuleOptimizer } from '../mod';
import POSTAG from '../POSTAG';
import Segment, { IDICT, IDICT_SYNONYM, IWord } from '../Segment';
import { IWordDebug } from '../util';
import { hexAndAny } from '../util/index';
import { COLOR_ALL, COLOR_HAIR } from '../mod/COLORS';

import UString from 'uni-string';

export class ForeignOptimizer extends SubSModuleOptimizer
{
	name = 'ForeignOptimizer';

	protected _TABLE: IDICT<IWord>;

	_cache()
	{
		super._cache();

		this._TABLE = this.segment.getDict('TABLE');
		this._POSTAG = this.segment.POSTAG;
	}

	doOptimize<T extends IWordDebug>(words: T[]): T[]
	{
		const self = this;
		const POSTAG = this._POSTAG;
		const TABLE = this._TABLE;

		let i = 0;
		let len = words.length - 1;

		while (i < len)
		{
			let w0: IWordDebug = words[i - 1];
			let w1: IWordDebug = words[i];
			let w2: IWordDebug = words[i + 1];

			if (!(w1.p === POSTAG.A_NX))
			{
				i++;
				continue;
			}

			if (w2)
			{
				let nw: string = w1.w + w2.w;
				let mw: IWordDebug = TABLE[nw];

				if (mw)
				{
					let new_w: IWordDebug = self.debugToken({
						...mw,
						w: nw,
						m: [w1, w2],
					}, {
						[this.name]: 1,
					}, true);

					this.sliceToken(words, i, 2, new_w);

					len--;
					continue;
				}
			}

			i++;
		}

		return words;
	}
}

export const init = ForeignOptimizer.init.bind(ForeignOptimizer) as typeof ForeignOptimizer.init;

export default ForeignOptimizer;
