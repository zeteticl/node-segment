/**
 * Created by user on 2018/4/16/016.
 */
import { SubSModuleOptimizer } from '../mod';
import { IWordDebug } from '../util';
/**
 * 以詞意來自動轉換 而不需要手動加入字典於 synonym.txt
 * 適用於比較容易需要人工處理的轉換
 *
 * 自動處理 `里|后`
 *
 * @todo 發于余干松冲准呆只范舍涂
 */
export declare class ZhtSynonymOptimizer extends SubSModuleOptimizer {
    static readonly type: string;
    readonly type: string;
    doOptimize<T extends IWordDebug>(words: T[]): T[];
}
export declare const init: typeof SubSModuleOptimizer.init;
export default ZhtSynonymOptimizer;
