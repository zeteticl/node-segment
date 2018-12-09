"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const line_1 = require("./line");
/**
 * 原版 node-segment 的格式
 */
class TableDictBlacklist extends line_1.default {
    constructor(type = TableDictBlacklist.type, options = {}, ...argv) {
        super(type, options, ...argv);
    }
}
TableDictBlacklist.type = 'BLACKLIST';
exports.TableDictBlacklist = TableDictBlacklist;
exports.default = TableDictBlacklist;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhY2tsaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmxhY2tsaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsaUNBQW1DO0FBRW5DOztHQUVHO0FBQ0gsTUFBYSxrQkFBbUIsU0FBUSxjQUFhO0lBSXBELFlBQVksT0FBZSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsVUFBb0IsRUFBRSxFQUFFLEdBQUcsSUFBSTtRQUVsRixLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBO0lBQzlCLENBQUM7O0FBTGUsdUJBQUksR0FBRyxXQUFXLENBQUM7QUFGcEMsZ0RBUUM7QUFFRCxrQkFBZSxrQkFBa0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElESUNUX1NZTk9OWU0sIElXb3JkIH0gZnJvbSAnLi4vU2VnbWVudCc7XG5pbXBvcnQgeyBJRGljdFJvdywgc3RyaW5naWZ5TGluZSB9IGZyb20gJ3NlZ21lbnQtZGljdC9saWIvbG9hZGVyL2xpbmUnO1xuaW1wb3J0IENqa0NvbnYgZnJvbSAnY2prLWNvbnYnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyB0ZXh0X2xpc3QgfSBmcm9tICcuLi91dGlsL2Nqayc7XG5pbXBvcnQgQWJzdHJhY3RUYWJsZURpY3RDb3JlLCB7IElESUNULCBJRElDVDIsIElPcHRpb25zIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCBUYWJsZURpY3RMaW5lIGZyb20gJy4vbGluZSc7XG5cbi8qKlxuICog5Y6f54mIIG5vZGUtc2VnbWVudCDnmoTmoLzlvI9cbiAqL1xuZXhwb3J0IGNsYXNzIFRhYmxlRGljdEJsYWNrbGlzdCBleHRlbmRzIFRhYmxlRGljdExpbmVcbntcblx0c3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnQkxBQ0tMSVNUJztcblxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcgPSBUYWJsZURpY3RCbGFja2xpc3QudHlwZSwgb3B0aW9uczogSU9wdGlvbnMgPSB7fSwgLi4uYXJndilcblx0e1xuXHRcdHN1cGVyKHR5cGUsIG9wdGlvbnMsIC4uLmFyZ3YpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVEaWN0QmxhY2tsaXN0XG4iXX0=