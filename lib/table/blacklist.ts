import { IDICT_SYNONYM, IWord } from '../Segment';
import { IDictRow, stringifyLine } from 'segment-dict/lib/loader/line';
import CjkConv from 'cjk-conv';
import { cloneDeep } from '../util';
import { text_list } from '../util/cjk';
import AbstractTableDictCore, { IDICT, IDICT2, IOptions } from './core';
import TableDictLine from './line';

/**
 * 原版 node-segment 的格式
 */
export class TableDictBlacklist extends TableDictLine
{
	static readonly type = 'BLACKLIST';

	constructor(type: string = TableDictBlacklist.type, options: IOptions = {}, ...argv)
	{
		super(type, options)
	}
}

export default TableDictBlacklist
